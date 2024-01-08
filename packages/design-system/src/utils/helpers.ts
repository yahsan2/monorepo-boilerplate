export function typedObjectKeys<T extends Record<string, any>>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}

type Options = { [key: string]: string };

export type UIConfig<O extends Options = Options> = {
  variants: {
    [K in keyof O]: {
      [K2 in O[K]]: string;
    };
  };
  defaultVariants: O;
};

const typeMap = {
  string: "text",
  number: "number",
  symbol: "number",
  bigint: "number",
  boolean: "boolean",
  undefined: undefined,
  function: undefined,
  object: undefined,
} as const;

export function getArgTypes<O extends Record<string, string>, C extends UIConfig<O>>(config: C) {
  const defaultArgs = config.defaultVariants;
  const entries = Object.entries(defaultArgs).map(([key, defaultValue]) => {
    const options = typedObjectKeys(config.variants[key]);
    const hasOption = options.includes(defaultValue as any);
    return [
      key,
      {
        control: {
          type: hasOption
            ? options.length > 6
              ? "select"
              : "inline-radio"
            : typeMap[typeof defaultValue],
        },
        ...(hasOption ? { options } : {}),
      },
    ];
  });
  return Object.fromEntries(entries) as Record<
    keyof C["defaultVariants"],
    {
      control: {
        type: "string" | "number" | "inline-radio";
      };
      options?: string[];
    }
  >;
}

export const defaultParameters = {
  controls: {
    exclude: false,
  },
  docs: {
    canvas: { sourceState: false }, // start with the source open
  },
} as const;
