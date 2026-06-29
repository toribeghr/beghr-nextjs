# Transparent Video Overlay

Create call-to-action overlays with transparent backgrounds that can be composited over other videos.

## Prompt

```
use remotion best practices. this is our youtube channel: https://www.youtube.com/@remotion_dev. use curl scrape youtube to find the avatar and the subscriber count. multiple subscriber counts appear on the page, find the right one. make a white lower third that slides in from the bottom center. show the name, subscriber count and avatar. display a typical fixed width black youtube subscribe button that changes from "Subscribe" to "Subscribed". use a ease-out animation and for pressing in the button and a spring animation with a slight bounce once the button is released. fade out the lower third. render it as a transparent prores video.
```

## Context

This prompt demonstrates the Transparent Videos skill for Remotion, which enables creating video overlays with alpha channels (transparency). These can be composited over other videos in any video editor that supports ProRes with alpha channel.

## Setup

### 1. Install Remotion Skill

```bash
npx skills add remotion-dev/skills
```

### 2. Create Your Project

```bash
bun create video --blank youtube-cta
cd youtube-cta
bun i
```

### 3. Use the Prompt in Claude

Open Claude Code and paste the prompt, customizing it for your channel.

## Customization

### Different Social Platforms

Replace the YouTube-specific parts:

**Twitter/X:**
```
this is our X profile: https://x.com/username. scrape the profile to find the avatar and follower count. make a black lower third with the profile name, follower count, and avatar. display a "Follow" button that animates to "Following".
```

**Instagram:**
```
this is our Instagram: https://instagram.com/username. create a gradient lower third with the profile name, follower count, and avatar. show a "Follow" button with Instagram's colors.
```

**Generic CTA:**
```
create a lower third with the text "Visit our website: example.com". show a colorful "Learn More" button.
```

### Animation Styles

Modify the animation behavior:

- **Slide direction**: "slides in from the bottom center" → "slides in from the left" / "slides in from the top"
- **Animation type**: "ease-out" → "spring" / "linear" / "ease-in-out"
- **Button feedback**: "bounce once the button is released" → "scale pulse" / "ripple effect"

### Visual Styling

Customize the appearance:

- **Color scheme**: "white lower third" → "black lower third" / "gradient background" / "glassmorphic"
- **Button style**: "black youtube subscribe button" → "rounded pill button" / "minimal text button" / "custom branded button"
- **Layout**: "bottom center" → "top right" / "corner overlay" / "full width banner"

### Data Sources

Instead of scraping:
```
show the channel name "Remotion", subscriber count "50K", and use this avatar image: [path/to/image.png]
```

## What it does

1. **Web Scraping**: Uses curl to fetch YouTube page and extract channel data
2. **Data Parsing**: Intelligently finds the correct subscriber count from multiple instances
3. **Lower Third**: Creates animated text overlay with channel information
4. **Avatar Display**: Shows channel avatar image
5. **Interactive Button**: Animates Subscribe button with state change
6. **Smooth Animations**: Uses ease-out and spring physics for natural motion
7. **Transparent Render**: Exports as ProRes with alpha channel for compositing

## Animation Breakdown

1. **Slide In**: Lower third slides from bottom center (ease-out)
2. **Display**: Shows channel name, avatar, subscriber count, and button
3. **Button Press**: When clicked, button animates inward (ease-out)
4. **State Change**: Text changes from "Subscribe" to "Subscribed"
5. **Button Release**: Springs back with slight bounce
6. **Fade Out**: Lower third fades away smoothly

## Use Cases

- **YouTube videos**: Subscribe overlays
- **Live streams**: Call-to-action graphics
- **Social media**: Follow/subscribe prompts
- **Product videos**: Website CTAs
- **Webinars**: Registration overlays
- **Video ads**: Promotional overlays
- **Tutorials**: Social media prompts

## Technical Details

**Output Format**: ProRes with alpha channel (transparency)

**Compositing**: Import the rendered video into any video editor:
- Final Cut Pro
- Adobe Premiere Pro
- DaVinci Resolve
- After Effects

Place it on a layer above your main video content, and the transparent areas will show the video below.

## Advantages of Transparent Videos

- **Reusable**: Create once, overlay on multiple videos
- **Non-destructive**: Doesn't modify original video
- **Flexible**: Adjust timing and position in post
- **Professional**: Clean alpha channel for perfect compositing
- **Dynamic data**: Scrapes live data for current subscriber counts

## Requirements

- Remotion skill with Transparent Videos support
- Internet connection (for web scraping)
- ProRes codec support (built into macOS, available for Windows)

## Tips

- **Test the scraping**: YouTube page structure may change; verify data extraction
- **Subscriber count format**: Handle both "50K" and "50,000" formats
- **Avatar quality**: Ensure avatar image is high resolution
- **Button timing**: Adjust animation timing to feel natural
- **Safe areas**: Keep text within video safe zones for different platforms
- **File size**: ProRes with alpha creates large files; render at appropriate resolution

## Author

Created by [@Remotion](https://x.com/Remotion)

[Original Tweet](https://x.com/Remotion/status/2020677844044734695)

## Notes

This showcases one of Remotion's unique capabilities - creating transparent video overlays programmatically. The web scraping integration means you can automatically pull live data (subscriber counts, follower numbers, etc.) into your overlays without manual updates.
