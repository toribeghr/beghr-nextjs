# Product Demo Video

Generate a complete product demo video using your existing codebase and UI components, with optional voiceover and music.

## Prompt

```
Create a demo video of the Presscut app/product using remotion. Use react components to replicate UI elements and replicate the UI of the app as closely as possible. The app has a LOT of features/functionality, so take guidance from the marketing home page/index for what to highlight, while keeping language simple and to-the-point. Really grill me with questions to nail down exactly how the final video should look/feel and what content should be there. The ultimate goal of this is to replicate what me, the founder, would be showing/doing with a product demo with a customer.
```

## Context

This prompt was used by [@Shpigford](https://x.com/Shpigford) to create a full product demo for [Presscut](https://presscut.com) directly from the existing codebase. The process took 2-3 hours and resulted in a professional demo video with voiceover, music, and sound effects.

## Setup

1. Navigate to your product's codebase:
   ```bash
   cd /path/to/your/product
   ```

2. Ensure you have the Remotion skill installed:
   ```bash
   npx skills add remotion-dev/skills
   ```

3. Optionally set up ElevenLabs MCP server for voiceover and music generation

## Customization

Replace these parts for your product:

- **Product name**: Change "Presscut app/product" to your product name
- **Reference source**: Change "marketing home page/index" to your reference (landing page, docs, etc.)
- **Your role**: Adapt "me, the founder" to your perspective

## What it does

1. **Code Analysis**: Claude analyzes your codebase to understand the product
2. **Interactive Planning**: Asks detailed questions about video structure, timing, and content
3. **UI Replication**: Uses existing React components to recreate your app's UI
4. **Scene Generation**: Creates animated scenes showcasing key features
5. **Timing Coordination**: Plans precise timing for each scene and transition

## Optional Enhancements

The original implementation also included:

### Voiceover (using ElevenLabs)
- Claude generates appropriate voiceover scripts for each scene
- Knows exact scene lengths for timing
- Generates separate audio clips per scene
- Lines up audio perfectly with visuals

### Background Music (using ElevenLabs)
- Generate music matching your desired aesthetic (e.g., "indie tech aesthetic")
- Automatically matches the total video length

### Sound Effects (using ElevenLabs)
- Add clicks, typing sounds, success chimes, etc.
- Timed to match on-screen actions

## Process

The typical workflow:

1. **Initial prompt**: Submit the prompt in your codebase
2. **Discovery phase**: Claude explores your code and asks clarifying questions
3. **Planning**: Claude creates a detailed plan for scenes, timing, and content
4. **Iteration**: Refine the plan based on your feedback
5. **Generation**: Claude implements the video
6. **Enhancement**: Optionally add voiceover, music, and effects
7. **Refinement**: Make adjustments and regenerate as needed

## Key Insights

- **No new assets needed**: Uses existing components and styling from your app
- **Interactive approach**: Claude asks questions to understand your vision
- **Founder perspective**: Mimics what you'd show in a real product demo
- **Marketing-aligned**: References your marketing materials to highlight the right features
- **Simple language**: Keeps narration clear and to-the-point

## Requirements

- Existing product codebase with React components
- Marketing/landing page for reference
- Remotion skill
- Optional: ElevenLabs API access (via MCP) for audio

## Cost & Time

From the original implementation:
- **Time**: 2-3 hours
- **Tokens**: ~$700 worth of Opus 4.5 (with Claude Code 20x max plan)
- **ElevenLabs**: ~12,000 credits for voiceover, music, and sound effects

## Author

Created by [@Shpigford](https://x.com/Shpigford)

[Original Tweet](https://x.com/Shpigford/status/2015250030815584647)

## Tips

- Be prepared to answer detailed questions about your product
- Have your marketing materials ready for reference
- Consider the full 2-3 hour commitment for high-quality results
- Start without voiceover, add it later if needed
- Use the iterative approach - refine until it matches your vision
