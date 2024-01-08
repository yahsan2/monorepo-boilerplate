// import { borderWidths, radiuses, shadows } from "./border";
// import { sizes } from "./sizes";
// import { spaces } from "./spacing";
// import { fontSizes, fontWeights, lineHeights } from "./typography";
import { colors } from "./colors";

export const breakpoints = {
  /* media queries */
  "viewport-m-max": "480px",
  "viewport-l-min": "481px",
};

export const tokens = {
  ...colors,
  // ...spaces,
  // ...sizes,
  // ...fontSizes,
  // ...fontWeights,
  // ...lineHeights,
  // ...borderWidths,
  // ...shadows,
  // ...radiuses,
};

export default tokens;
