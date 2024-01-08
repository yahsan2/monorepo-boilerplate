import { createElement, ReactNode } from "react";
import { cn, cv } from "@ui/utils";

const [textVariants, textConfig] = cv("", {
  variants: {
    display: {
      xl: "font-display text-8xl font-light",
      lg: "font-display text-7xl font-light",
      default: "font-display text-6xl font-light",
      sm: "font-display text-5xl font-light",
    },
    title: {
      xl: "text-5xl",
      lg: "text-4xl",
      default: "text-3xl",
      sm: "text-2xl",
    },
    body: {
      xl: "text-rose-500 line-through ",
      lg: "text-lg",
      default: "text-base",
      sm: "text-sm",
    },
    caption: {
      xl: "text-rose-500 line-through ",
      lg: "text-base/5",
      default: "text-sm/4",
      sm: "text-xs/3",
    },
    bold: {
      true: "font-bold",
    },
  },
  defaultVariants: {
    display: "false",
    title: "false",
    body: "false",
    caption: "false",
    bold: "false",
  },
} as const);

export const TEXT_TAGs = ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"] as const;

type Tags = (typeof TEXT_TAGs)[number];
type TextBaseProps<T extends Tags> = JSX.IntrinsicElements[T] & {
  as?: T;
  children: ReactNode;
  className?: string;
};

type DisplayProps<T extends Tags> = TextBaseProps<T> & {
  size?: "xl" | "lg" | "default" | "sm";
};

function Display<T extends Tags>({
  className,
  size: display = "default",
  as: Tag,
  ...props
}: DisplayProps<T>) {
  return createElement(Tag || "span", {
    className: cn(textVariants({ display, className })),
    ...props,
  });
}

type TitleProps<T extends Tags> = TextBaseProps<T> & {
  size?: "xl" | "lg" | "default" | "sm";
};

function Title<T extends Tags>({
  className,
  size: title = "default",
  as: Tag,
  ...props
}: TitleProps<T>) {
  return createElement(Tag || "h2", {
    className: cn(textVariants({ title, bold: true, className })),
    ...props,
  });
}

type BodyProps<T extends Tags> = TextBaseProps<T> & {
  size?: "lg" | "default" | "sm";
  bold?: boolean;
};

function Body<T extends Tags>({
  className,
  size: body = "default",
  bold = false,
  as: Tag,
  ...props
}: BodyProps<T>) {
  return createElement(Tag || "span", {
    className: cn(textVariants({ body, bold, className })),
    ...props,
  });
}

type CaptionProps<T extends Tags> = TextBaseProps<T> & {
  size?: "lg" | "default" | "sm";
};

function Caption<T extends Tags>({
  className,
  size: caption = "default",
  as: Tag,
  ...props
}: CaptionProps<T>) {
  return createElement(Tag || "span", {
    className: cn(textVariants({ caption, className })),
    ...props,
  });
}

type TextProps<T extends Tags> = {
  display: DisplayProps<T>;
  title: TitleProps<T>;
  body: BodyProps<T>;
  caption: CaptionProps<T>;
};

function Text<TT extends keyof TextProps<T>, T extends Tags = "span">({
  type = "body" as TT,
  ...props
}: TextProps<T>[TT] & { type: TT }) {
  if (type === "display") return Display(props as TextProps<T>["display"]);
  if (type === "title") return Title(props as TextProps<T>["title"]);
  if (type === "body") return Body(props as TextProps<T>["body"]);
  if (type === "caption") return Caption(props as TextProps<T>["caption"]);
}

export { Text, TextProps, TextBaseProps, textVariants, textConfig };
