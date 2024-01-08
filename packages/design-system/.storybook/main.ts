import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-styling-webpack" /* For postcss */],
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
  viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};
export default config;
