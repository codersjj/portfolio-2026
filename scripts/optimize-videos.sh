#!/bin/bash

# Video Optimization Script
# Compresses video files using FFmpeg with optimal settings for web delivery
# Usage: ./scripts/optimize-videos.sh [input_file] [output_file]
# Or run without arguments to optimize all videos in common directories

set -e

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# FFmpeg settings
CRF=28              # Constant Rate Factor (18-28 recommended, lower = better quality)
PRESET="veryslow"   # Encoding speed (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
AUDIO_BITRATE="128k"

echo -e "${GREEN}=== Video Optimization Script ===${NC}"
echo "Settings: CRF=$CRF, Preset=$PRESET, Audio Bitrate=$AUDIO_BITRATE"
echo ""

# Function to optimize a single video
optimize_video() {
    local input="$1"
    local output="$2"
    
    if [ ! -f "$input" ]; then
        echo -e "${RED}Error: Input file '$input' not found${NC}"
        return 1
    fi
    
    echo -e "${YELLOW}Optimizing: $input${NC}"
    echo "Output: $output"
    
    # Get original file size
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null || echo "unknown")
    
    # Create temporary output file
    temp_output="${output}.tmp.mp4"
    
    # Run FFmpeg
    ffmpeg -y -i "$input" \
        -vcodec libx264 \
        -crf $CRF \
        -preset $PRESET \
        -acodec aac \
        -b:a $AUDIO_BITRATE \
        -movflags +faststart \
        "$temp_output" 2>&1 | grep -E "frame=|size=|time=" || true
    
    if [ $? -eq 0 ] && [ -f "$temp_output" ]; then
        # Get new file size
        new_size=$(stat -f%z "$temp_output" 2>/dev/null || stat -c%s "$temp_output" 2>/dev/null || echo "unknown")
        
        # Move temp file to final output
        mv "$temp_output" "$output"
        
        # Calculate compression ratio using awk (more portable than bc)
        if [ "$original_size" != "unknown" ] && [ "$new_size" != "unknown" ]; then
            reduction=$(awk "BEGIN {printf \"%.2f\", (1 - $new_size / $original_size) * 100}")
            echo -e "${GREEN}✓ Success!${NC}"
            echo "  Original: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "$original_size bytes")"
            echo "  Optimized: $(numfmt --to=iec-i --suffix=B $new_size 2>/dev/null || echo "$new_size bytes")"
            echo "  Reduction: ${reduction}%"
        else
            echo -e "${GREEN}✓ Success!${NC}"
        fi
    else
        echo -e "${RED}✗ Failed to optimize $input${NC}"
        rm -f "$temp_output"
        return 1
    fi
    
    echo ""
}

# If arguments provided, optimize single file
if [ $# -eq 2 ]; then
    optimize_video "$1" "$2"
    exit 0
elif [ $# -eq 1 ]; then
    input="$1"
    output="${input%.*}-optimized.mp4"
    optimize_video "$input" "$output"
    exit 0
fi

# Otherwise, batch optimize common video directories
echo "Batch optimization mode - scanning for videos..."
echo ""

# Find all MP4 files in common directories
video_dirs=(
    "public/assets/tools"
    "public/assets/works"
    "src/assets/works"
)

total_optimized=0
total_failed=0

for dir in "${video_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${YELLOW}Scanning: $dir${NC}"
        
        # Find all .mp4 files
        while IFS= read -r -d '' video; do
            # Skip already optimized files
            if [[ "$video" == *"-optimized.mp4" ]]; then
                continue
            fi
            
            # Create output filename
            dir_name=$(dirname "$video")
            base_name=$(basename "$video" .mp4)
            output="$dir_name/${base_name}-optimized.mp4"
            
            # Skip if optimized version already exists
            if [ -f "$output" ]; then
                echo -e "${YELLOW}Skipping (already optimized): $video${NC}"
                echo ""
                continue
            fi
            
            if optimize_video "$video" "$output"; then
                ((total_optimized++))
            else
                ((total_failed++))
            fi
        done < <(find "$dir" -maxdepth 1 -name "*.mp4" -print0 2>/dev/null)
    fi
done

echo -e "${GREEN}=== Optimization Complete ===${NC}"
echo "Total optimized: $total_optimized"
echo "Total failed: $total_failed"
echo ""
echo "Note: Original files are preserved. Review optimized versions and replace manually if satisfied."
