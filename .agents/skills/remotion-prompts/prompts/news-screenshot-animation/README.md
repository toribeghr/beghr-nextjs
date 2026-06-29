# News Screenshot Animation

Animate a screenshot of a news headline with OCR text detection, 3D rotation, blur effects, and highlighted text.

## Prompt

```
use remotion best practices. import the following image into the project: '~/Desktop/Screenshot 2026-01-31 at 17.15.12.png' use tesseract CLI to do OCR and find the positions of the text. in remotion, make a new composition where you load the image and pad the article generously on a white full HD background. while the composition is running for 5 seconds, slowly, very subtly, zoom into it and slightly rotate the article in 3d from left to right. the overall rotation should be around 15deg for each axis. at the beginning, blur the whole composition and unblur it over 1 second. after the blur is done, evolve a highlighter from left to right using rough.js over the words "government shutdown" and "funding lapses". the image has a white background. make sure the the marker appears behind the text. when installing new dependencies, check for existing lockfiles and use the right package manager.
```

## Setup

Before using this prompt:

1. Ensure you have the Remotion skill installed:
   ```bash
   npx skills add remotion-dev/skills
   ```

2. Create a new Remotion project:
   ```bash
   bun create video --blank news
   cd news
   bun i
   ```

3. Install Tesseract OCR on your system:
   - **macOS**: `brew install tesseract`
   - **Ubuntu/Debian**: `sudo apt-get install tesseract-ocr`
   - **Windows**: Download from [GitHub releases](https://github.com/UB-Mannheim/tesseract/wiki)

## Customization

Modify these parts of the prompt to customize:

- **Image path**: Change `'~/Desktop/Screenshot 2026-01-31 at 17.15.12.png'` to your screenshot path
- **Duration**: Change `5 seconds` to your desired length
- **Rotation**: Adjust `15deg for each axis` for more/less rotation
- **Blur duration**: Change `1 second` for faster/slower reveal
- **Highlighted words**: Replace `"government shutdown" and "funding lapses"` with text to highlight

## What it does

1. **OCR Detection**: Uses Tesseract to find text positions in the image
2. **Composition**: Loads image with padding on a Full HD (1920x1080) white background
3. **Zoom**: Subtle zoom effect over the duration
4. **3D Rotation**: Rotates the image slightly from left to right (~15° per axis)
5. **Blur**: Starts blurred and unblurs over 1 second
6. **Highlight**: Animates a rough.js highlighter behind specified text

## Requirements

- Tesseract CLI
- rough.js (will be installed automatically)
- A screenshot with text content

## Example Output

The original tweet includes a video demonstration of this prompt in action.

## Author

Created by [@Remotion](https://x.com/Remotion)

[Original Tweet](https://x.com/Remotion/status/2017915342022979923)
