import { Decorator, Parameters } from "@storybook/react";
import React from "react";

export const parameters: Parameters = {
  controls: {
    exclude: /.*/g,
  },
  docs: {
    canvas: { sourceState: "shown" }, // start with the source open
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Introduction",
        "Tokens",
        "Frames",
        ["documentation", "*"],
        "Atoms",
        ["documentation", "*"],
        "Molecules",
        ["documentation", "*"],
        "Organisms",
        ["documentation", "*"],
      ],
      locales: "ja-JP",
    },
  },
};

export const decorators: Decorator[] = [
  (Story) => (
    <div className="story-container">
      <Story />
    </div>
  ),
];
