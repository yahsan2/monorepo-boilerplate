export const uniqSpacing = {
  "spacing-1": "1px",
  "spacing-2": "2px",
  "spacing-4": "4px",
  "spacing-6": "6px",
  "spacing-8": "8px",
  "spacing-12": "12px",
  "spacing-16": "16px",
  "spacing-24": "24px",
  "spacing-32": "32px",
  "spacing-40": "40px",
  "spacing-48": "48px",
  "spacing-64": "64px",
};

export const namedSpacing = {
  // section
  "spacing-section-sm": uniqSpacing["spacing-16"],
  "spacing-section-md": uniqSpacing["spacing-32"],
  "spacing-section-lg": uniqSpacing["spacing-64"],
  // stack
  "spacing-stack-xs": uniqSpacing["spacing-4"],
  "spacing-stack-sm": uniqSpacing["spacing-8"],
  "spacing-stack-md": uniqSpacing["spacing-16"],
  "spacing-stack-lg": uniqSpacing["spacing-24"],
  "spacing-stack-xl": uniqSpacing["spacing-32"],
  // cluster
  "spacing-cluster-xs": uniqSpacing["spacing-2"],
  "spacing-cluster-sm": uniqSpacing["spacing-4"],
  "spacing-cluster-md": uniqSpacing["spacing-8"],
  "spacing-cluster-lg": uniqSpacing["spacing-16"],
  "spacing-cluster-xl": uniqSpacing["spacing-24"],

  // layoutSide
  "spacing-layoutSide-xs": uniqSpacing["spacing-4"],
  "spacing-layoutSide-sm": uniqSpacing["spacing-8"],
  "spacing-layoutSide-md": uniqSpacing["spacing-16"],
  "spacing-layoutSide-lg": uniqSpacing["spacing-24"],
  "spacing-layoutSide-xl": uniqSpacing["spacing-32"],
};

export const spaces = { ...uniqSpacing, ...namedSpacing };
