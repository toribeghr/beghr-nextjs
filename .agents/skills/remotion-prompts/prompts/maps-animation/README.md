# Maps Animation

Create dynamic map animations with camera movements, location highlights, and data overlays using Mapbox and Remotion.

## Prompt

```
use remotion best practices. create a map animation where on each of the 10 biggest airports, you zoom in and rotate around the area by 360 degrees. then you zoom out and fly to the next one. when an airport is visible, show a lower third with the airport name and the passenger numbers. show 3d buildings. from from 10th place to 1st place.
```

## Context

This prompt demonstrates the Maps skill for Remotion, which enables creating cinematic map animations with camera movements, 3D buildings, and data overlays. The skill integrates with Mapbox to provide high-quality map rendering.

## Setup

### 1. Create a Mapbox Account

You'll need a Mapbox API token:

1. Sign up at [mapbox.com](https://www.mapbox.com/)
2. Navigate to your [account page](https://account.mapbox.com/)
3. Create a new access token
4. Copy your token for use in the next step

### 2. Install/Update Remotion Skills

If you already have Remotion skills installed, update to get the Maps skill:

```bash
npx remotion skills update
```

Or install for the first time:

```bash
npx skills add remotion-dev/skills
```

The setup process will prompt you for your Mapbox token.

### 3. Create Your Project

```bash
bun create video --blank maps-demo
cd maps-demo
bun i
```

## Customization

Adapt the prompt for different use cases:

### Different Locations
Replace "10 biggest airports" with:
- "capital cities of Europe"
- "UNESCO World Heritage sites in Asia"
- "major tech company headquarters"
- "Formula 1 race tracks"
- "national parks in the USA"

### Camera Movements
Modify the animation style:
- "zoom in and rotate around" → "fly over at constant altitude"
- "360 degrees" → "180 degrees" or "fly-through"
- Add: "start from space and zoom in to street level"

### Data Overlays
Change "airport name and passenger numbers" to:
- "city name and population"
- "venue name and capacity"
- "building name and height"
- Custom data relevant to your locations

### Visual Style
Add styling instructions:
- "use dark mode map style"
- "show satellite imagery instead of streets"
- "highlight routes between locations"
- "use custom color scheme"

## What it does

1. **Location Sequencing**: Animates through multiple geographic locations in order
2. **Camera Movements**: Zooms, rotates, and flies between locations
3. **3D Buildings**: Renders buildings in 3D for realistic depth
4. **Data Overlays**: Shows lower thirds with location names and statistics
5. **Smooth Transitions**: Automatic camera path interpolation between locations

## Example Use Cases

- **Travel showcase**: Tour of favorite destinations
- **Real estate**: Property location highlights
- **Business**: Office locations or service areas
- **Education**: Geographic or historical tours
- **Events**: Venue locations and details
- **Sports**: Stadium or course tours
- **Data visualization**: Geographic data storytelling

## Tips

- **Not always one-shot**: Maps animations may require iteration to perfect
- **Very steerable**: Easy to guide and refine with follow-up prompts
- **Code-based**: Unlike GenAI video (Sora), you get editable code you can iterate on
- **Keyframe refinement**: Initial keyframes may need adjustment for perfect timing
- **Data preparation**: Have your location data ready (names, coordinates, stats)

## Requirements

- Mapbox API token (free tier available)
- Remotion skill with Maps support
- Location data or clear description of places to visit

## Advantages Over Video AI

As Jonny Burger notes, compared to generative AI video models:
- **Editable code**: Full control over every aspect
- **Iteration-friendly**: Make changes without regenerating from scratch
- **Deterministic**: Same code produces same output every time
- **Data-driven**: Easy to update with new data
- **Resolution-independent**: Render at any resolution

## Author

Created by [@JNYBGR](https://x.com/JNYBGR) (Jonny Burger, creator of Remotion)

[Original Tweet](https://x.com/JNYBGR/status/1882959335847657892)

## Notes

This is an official example from the Remotion creator showcasing the new Maps skill capability. The skill was added to demonstrate how Remotion can handle complex geographic animations with minimal prompting.
