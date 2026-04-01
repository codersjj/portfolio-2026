import { execFileSync } from "child_process";
import fs from "fs";

export function remarkModifiedTime() {
  return function (_: any, file: any) {
    const filepath = file.history[0];
    let lastModified = "";

    try {
      lastModified = execFileSync("git", ["log", "-1", "--pretty=format:%cI", filepath], { encoding: "utf8" }).trim();
    } catch (e) {
      // Git command failed, ignored
    }

    if (!lastModified) {
      try {
        const stats = fs.statSync(filepath);
        lastModified = stats.mtime.toISOString();
      } catch (e) {
        // Ignore
      }
    }

    if (lastModified) {
      file.data.astro.frontmatter.lastModified = lastModified;
    }
  };
}
