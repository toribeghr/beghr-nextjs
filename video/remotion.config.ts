// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

// Find a pre-installed chrome-headless-shell (used in cloud environments that
// block Remotion's own Chromium download). Returns null when none is found,
// e.g. on your own computer, where Remotion uses its bundled browser as normal.
const findPreinstalledBrowser = (): string | null => {
  if (process.env.REMOTION_BROWSER_EXECUTABLE) {
    return process.env.REMOTION_BROWSER_EXECUTABLE;
  }
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
  if (!existsSync(root)) return null;
  for (const dir of readdirSync(root)) {
    if (!dir.startsWith("chromium_headless_shell")) continue;
    const bin = join(root, dir, "chrome-linux", "headless_shell");
    if (existsSync(bin)) return bin;
  }
  return null;
};

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);

// `npx remotion render` works without the --browser-executable flag in cloud
// environments. Safe everywhere: resolves to null (no-op) on your own computer.
const preinstalledBrowser = findPreinstalledBrowser();
if (preinstalledBrowser) {
  Config.setBrowserExecutable(preinstalledBrowser);
}
