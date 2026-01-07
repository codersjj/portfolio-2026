# Video Optimization Scripts

This directory contains utility scripts for optimizing video assets.

## optimize-videos.sh

Compresses video files using FFmpeg with optimal settings for web delivery.

### Prerequisites

- FFmpeg installed and available in PATH
- Bash shell (Git Bash on Windows, native on macOS/Linux)

### Usage

**Optimize a single video:**
```bash
./scripts/optimize-videos.sh input.mp4 output.mp4
```

**Optimize a single video (auto-generate output name):**
```bash
./scripts/optimize-videos.sh input.mp4
# Creates: input-optimized.mp4
```

**Batch optimize all videos in common directories:**
```bash
./scripts/optimize-videos.sh
```

### Settings

The script uses the following FFmpeg settings optimized for web:

- **CRF**: 28 (Constant Rate Factor - balance between quality and file size)
- **Preset**: veryslow (slower encoding = better compression)
- **Audio Bitrate**: 128k
- **Video Codec**: H.264 (libx264)
- **Audio Codec**: AAC
- **Fast Start**: Enabled (for web streaming)

### Customization

Edit the script to adjust these variables:
```bash
CRF=28              # Lower = better quality (18-28 recommended)
PRESET="veryslow"   # Encoding speed preset
AUDIO_BITRATE="128k"
```

### Example Output

```
=== Video Optimization Script ===
Settings: CRF=28, Preset=veryslow, Audio Bitrate=128k

Optimizing: public/assets/tools/dreamcore.mp4
Output: public/assets/tools/dreamcore-optimized.mp4
✓ Success!
  Original: 968.0KiB
  Optimized: 521.0KiB
  Reduction: 46.17%
```

### Notes

- Original files are preserved
- Optimized files are created with `-optimized` suffix
- Review optimized versions before replacing originals
- The script skips already optimized files in batch mode
