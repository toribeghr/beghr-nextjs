# Video Editor Interface

Create a canvas-based video editing interface that leverages the Remotion skill for interactive video creation.

## Prompt

```
Please add a Claude Code Skill along with an interface for video animation.

I want you to create an app that very simply allows us to use the Remotion skill, read more here: npx skills add remotion-dev/skills

And after you create this skill you will then be able to ask you to edit a video in a canvas.

So the sole purpose of the app should be a little canvas that you can edit and manipulate and change it so you can make a video. Optimize this for openness and being able to edit each scene in the video after the first generation.

Since you are running in a browser on http://vibecode.dev, I want you to use the assets. Users can upload their own assets to the app or generate assets they may want to use them in the video generations.

Please search up this new remotion skill this up. Figure out how to configure this app and skill so that it works great and is easy to create high quality animated videos such as launch videos.

ultrathink, go.
```

## Context

This prompt was designed for use with [Vibe Code](https://vibecode.dev), a browser-based environment that runs Claude Code. However, it can be adapted for local use as well.

## Setup

1. Ensure you have the Remotion skill installed:
   ```bash
   npx skills add remotion-dev/skills
   ```

2. This prompt will guide Claude to:
   - Research the Remotion skill capabilities
   - Design a canvas-based UI for video editing
   - Implement scene-by-scene editing functionality
   - Handle asset uploads and management
   - Configure the project for high-quality video output

## What it does

This prompt creates a complete video editing workflow interface that:

1. **Canvas Interface**: Provides a visual canvas for manipulating video elements
2. **Scene Management**: Allows editing individual scenes after initial generation
3. **Asset Management**: Supports uploading and organizing assets
4. **Remotion Integration**: Leverages the Remotion skill for video generation
5. **Iterative Editing**: Optimized for making changes and refinements

## Use Cases

- Creating product launch videos
- Building marketing animations
- Prototyping video concepts
- Educational content creation
- Social media video production

## Key Features

- **Openness**: Designed for easy modification and customization
- **Scene-level editing**: Change individual scenes without regenerating entire video
- **Asset integration**: Upload custom images, videos, and other media
- **Interactive workflow**: Visual interface rather than pure code
- **Quality focus**: Configured for professional video output

## Notes

- The "ultrathink, go" instruction encourages Claude to deeply research and plan before implementing
- Originally designed for browser-based use but adaptable to local environments
- Emphasizes iterative workflow over one-shot generation

## Author

Created by [@rileybrown](https://x.com/rileybrown)

[Original Tweet](https://x.com/rileybrown/status/2014812672962003025)

## Related

Riley Brown's tweet includes a video walkthrough showing this workflow in action.
