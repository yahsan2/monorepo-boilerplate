export const uniqSizes = {
  "size-200": "200px",
  "size-320": "320px",
  "size-560": "560px",
  "size-780": "780px",
  "size-960": "960px",
  "size-1180": "1180px",
  "size-1440": "1440px",
  "size-1680": "1680px",
} as const;

export const sidebarSizes = {
  "size-sidebar": uniqSizes["size-200"],
} as const;

export const containerSizes = {
  "size-container-sm": uniqSizes["size-560"],
  "size-container-md": uniqSizes["size-780"],
  "size-container-lg": uniqSizes["size-1180"],
  "size-container-max": uniqSizes["size-1680"],
  "size-container-full": "100%",
} as const;

export const modalSizes = {
  "size-modal-sm": uniqSizes["size-560"],
  "size-modal-md": uniqSizes["size-960"],
  "size-modal-lg": uniqSizes["size-1180"],
} as const;

export const inputSizes = {
  "size-min-input-md": uniqSizes["size-320"],
  "size-max-input-md": uniqSizes["size-560"],
  "size-max-input-lg": uniqSizes["size-960"],
} as const;

export const labelSizes = {
  "size-label-md": uniqSizes["size-200"],
} as const;

export const sizes = {
  ...sidebarSizes,
  ...inputSizes,
  ...containerSizes,
  ...modalSizes,
} as const;
