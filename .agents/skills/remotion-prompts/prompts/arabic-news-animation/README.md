# Arabic News Animation

Animate news screenshots with Arabic text support, featuring OCR, 3D effects, and customizable highlighting.

## Prompt

```
Use Remotion best practices. Import the attached image and use Tesseract CLI to do OCR and find the positions of the text.

In Remotion, create a new composition where you:
1. Load the image with generous padding on a white Full HD (1920x1080) background
2. Duration: 5 seconds
3. Apply a subtle zoom (1.0 → 1.05) and 3D rotation (±7.5° on Y axis, ±3° on X axis)
4. Start with blur (15px) and unblur over 1 second
5. After blur finishes, animate rough.js highlighters (left to right) over these texts:
- "[النص الأول]"
- "[النص الثاني]"
- "[النص الثالث]"

The highlighter should appear behind the text using multiply blend mode.
Use yellow highlight color (rgba(255, 230, 0, 0.5)).
Check for existing lockfiles and use the appropriate package manager.
```

## Setup

Before using this prompt:

1. Ensure you have the Remotion skill installed:
   ```bash
   npx skills add remotion-dev/skills
   ```

2. Create a new Remotion project:
   ```bash
   bun create video --blank arabic-news
   cd arabic-news
   bun i
   ```

3. Install Tesseract OCR with Arabic language support:
   - **macOS**:
     ```bash
     brew install tesseract
     brew install tesseract-lang
     ```
   - **Ubuntu/Debian**:
     ```bash
     sudo apt-get install tesseract-ocr tesseract-ocr-ara
     ```

## Customization

Replace the bracketed text with your target Arabic phrases:

- `[النص الأول]` - First text to highlight
- `[النص الثاني]` - Second text to highlight
- `[النص الثالث]` - Third text to highlight

You can also adjust:

- **Zoom range**: Change `1.0 → 1.05` for more/less zoom
- **Rotation**: Adjust `±7.5° on Y axis, ±3° on X axis` for different rotation
- **Blur amount**: Change `15px` for more/less initial blur
- **Highlight color**: Modify `rgba(255, 230, 0, 0.5)` for different colors

## What it does

1. **OCR Detection**: Uses Tesseract with Arabic language support to find text positions
2. **Composition**: Loads image with padding on Full HD white background
3. **Zoom**: Subtle zoom from 1.0 to 1.05 scale
4. **3D Rotation**: Rotates ±7.5° on Y axis and ±3° on X axis
5. **Blur**: Starts with 15px blur and unblurs over 1 second
6. **Highlight**: Animates yellow highlighters behind specified Arabic text using multiply blend mode

## Differences from Original

This prompt provides more structure and explicit parameters compared to the original News Screenshot Animation:

- Specific zoom values (1.0 → 1.05)
- Precise rotation angles (±7.5° Y, ±3° X)
- Defined blur amount (15px)
- Multiple highlight targets with placeholders
- Specified blend mode (multiply)
- Custom highlight color with alpha

## Requirements

- Tesseract CLI with Arabic language support
- rough.js (installed automatically)
- Screenshot with Arabic text

## Author

Created by [@Abdullah4AI](https://x.com/Abdullah4AI)

[Original Tweet](https://x.com/Abdullah4AI/status/2017934500773101973)
