// StoryBook と App 両方には反映される config
module.exports = {
  plugins: {
    tailwindcss: {
      config: "../../packages/design-system/tailwind.config.ts",
    },
    autoprefixer: {},
    "postcss-nested": {},
  },
};
