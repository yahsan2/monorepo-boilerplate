import fs from "fs";
import path from "path";
import { colors } from "../tokens/colors";

const colorCss = Object.entries(colors)
  .map(([key]) => {
    return `  --color-${key}: $color-${key};`;
  })
  .join("\n");

const css = `/* generated by scripts/generate-color-css.ts */
:root {
${colorCss}
}
`;

fs.writeFileSync(path.resolve(__dirname, "../assets/styles/colors.css"), css);
