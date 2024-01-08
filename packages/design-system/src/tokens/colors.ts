import { hexToRgb } from "./helpers";

// 使用している色の数を表す（色を増やすときは、デザイナーの指示があるとき）
// - key は色で表現する
// - value は重複してはいけない
export const colorPallets = {
  black: "#000000",
  white: "#ffffff",

  // other
  "natural-base": "#F6F7F9",

  // monotone
  "monotone-900": "#333333",
  "monotone-700": "#666666",
  "monotone-500": "#999999", // Base
  "monotone-300": "#dddddd",
  "monotone-200": "#e9e9e9",
  "monotone-100": "#f2f2f2",

  // Blue
  "blue-700": "#2F8AE0",
  "blue-600": "#3498ED",
  "blue-500": "#4DA7F0", // Base
  "blue-100": "#e9f4f9",

  // Orange
  "orange-700": "#F35003",
  "orange-600": "#FE5608",
  "orange-500": "#FF6F36", // Base
  "orange-100": "#FFF6F2",

  // Red
  "red-600": "#FF0211", // Base

  // Green
  "green-500": "#00A584", // Base
} as const;

// 使用している色の意味を表す
// - key は色の意味で表現する（Figmaのカラーパレットにできるだけ合わせる）
// - value は重複してよい

export const backgroundColors = {
  "background-default": colorPallets["natural-base"],
  "background-primary": colorPallets["blue-100"],
  "background-destructive": colorPallets["orange-100"],
  "background-disabled": colorPallets["monotone-100"],
  "background-white": colorPallets["white"],
  "background-modal": `rgba(${hexToRgb(colorPallets["black"])}, 0.4)`,
  "background-transparent": "transparent",
} as const;

export const textColors = {
  "text-default": colorPallets["monotone-900"],
  "text-secondary": colorPallets["monotone-700"],
  "text-disabled": colorPallets["monotone-500"],
  "text-primary": colorPallets["blue-500"],
  "text-contrast": colorPallets["white"],
  "text-destructive": colorPallets["orange-500"],
  "text-error": colorPallets["red-600"],
};

export const borderColors = {
  "border-default": colorPallets["monotone-300"],
  "border-secondary": colorPallets["monotone-200"],
  "border-hover": colorPallets["monotone-500"],
  "border-active": colorPallets["blue-500"],
  "border-error": colorPallets["orange-500"],
} as const;

export const colors = {
  ...colorPallets,

  // Primary
  "primary-default": colorPallets["blue-500"],
  "primary-hover": colorPallets["blue-600"],
  "primary-active": colorPallets["blue-700"],
  "primary-disabled": `rgba(${hexToRgb(colorPallets["blue-500"])}, 0.5)`, // blue-500 の透明度 50%
  "primary-foreground": colorPallets["white"],

  // Secondary
  "secondary-default": colorPallets["white"],
  "secondary-hover": colorPallets["monotone-100"],
  "secondary-active": colorPallets["monotone-200"],
  "secondary-disabled": `rgba(${hexToRgb(colorPallets["monotone-500"])}, 0.5)`, // monotone-500 の透明度 50%

  // destructive
  "destructive-default": colorPallets["orange-500"],
  "destructive-hover": colorPallets["orange-600"],
  "destructive-active": colorPallets["orange-700"],
  "destructive-disabled": `rgba(${hexToRgb(colorPallets["orange-500"])}, 0.4)`, // blue-500 の透明度 50%

  // Error
  "error-default": colorPallets["red-600"],

  // Success
  "success-default": colorPallets["green-500"],

  // Text
  ...textColors,

  // Border
  ...borderColors,

  // Background
  ...backgroundColors,
};
