// import { breakpoints, tokens } from "./src/tokens";
const { tokens } = require("./src/tokens");

// StoryBook と App 両方には反映される config
module.exports = {
  plugins: {
    tailwindcss: {
      config: "../../packages/design-system/tailwind.config.ts",
    },
    autoprefixer: {},
    "postcss-nested": {},
    "postcss-css-variables": {
      variables: Object.entries(tokens).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [`--${key}`]: value, //例: --color-white: #ffffff;
        };
      }, {}),
    },
    // "postcss-simple-vars": {
    //   variables: breakpoints,
    // },
  },
};
