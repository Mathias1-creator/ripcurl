"""Recompress public/images into .preview-cache/images as WebP.

The preview build embeds every image as a data URI in one HTML file, so the
originals (4.8 MB of JPEG/PNG) are re-encoded to WebP to keep that single file
a reasonable size. The real `npm run build` is untouched and still ships the
originals.

Output filenames keep the original name plus a `.webp` suffix; the bundler maps
`/images/<original name>` to the matching data URI.
"""

import pathlib
import sys

from PIL import Image

MAX_EDGE = 1280
QUALITY = 72

root = pathlib.Path(__file__).resolve().parent.parent
src_dir = root / "public" / "images"
out_dir = root / ".preview-cache" / "images"
out_dir.mkdir(parents=True, exist_ok=True)

before = after = 0

for src in sorted(src_dir.iterdir()):
    if not src.is_file():
        continue
    dest = out_dir / (src.name + ".webp")
    before += src.stat().st_size

    if not (dest.exists() and dest.stat().st_mtime >= src.stat().st_mtime):
        img = Image.open(src)
        if max(img.size) > MAX_EDGE:
            img.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        # Preserve alpha for the logo, drop it everywhere else.
        img = img.convert("RGBA" if img.mode in ("RGBA", "LA", "P") else "RGB")
        img.save(dest, "WEBP", quality=QUALITY, method=6)

    after += dest.stat().st_size

print(
    f"images: {sum(1 for _ in out_dir.iterdir())} files, "
    f"{before / 1e6:.1f} MB -> {after / 1e6:.1f} MB WebP",
    file=sys.stderr,
)
