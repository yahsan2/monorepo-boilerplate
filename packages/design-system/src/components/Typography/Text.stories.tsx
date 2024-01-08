import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { defaultParameters, getArgTypes } from "../../utils";
import { TEXT_TAGs, Text, TextBaseProps, TextProps, textConfig } from "./Text";

type Story = StoryObj<typeof Text>;

/**
- TextHTMLAttributes（ \<Text/\> に指定可能な属性、イベント）は全て指定できます。
*/
const meta: Meta<typeof Text> = {
  title: "Atoms/<Text>",
  tags: ["autodocs"],
  component: Text,
  parameters: {
    componentSubtitle: "<Text> のラッパーコンポーネント",
  },
};

/** size を指定しないと size="default"  となる */
export const Default: Story = {
  args: {
    type: "body",
    size: "default",
    children: "Text テキスト",
    as: "span",
  },
  argTypes: {
    type: {
      control: {
        type: "radio",
      },
      options: ["display", "title", "body", "caption"],
    },
    as: {
      control: {
        type: "select",
      },
      options: TEXT_TAGs,
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["sm", "default", "lg", "xl"],
    },
    bold: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    ...defaultParameters,
  },
  render: ({ children, ...args }: any) => <Text {...args}>{children}</Text>,
};

/**
 * 特別なあしらいのテキスト。
 * font-normal 固定で指定できない
 **/
export const Display: Story = {
  args: {
    children: "Display テキスト",
  },
  render: ({ children }: any) => <Text type="display">{children}</Text>,
};

/**
 * タイトル用のテキスト。
 * font-bold 固定で指定できない
 **/
export const Title: Story = {
  args: {
    children: "Title テキスト",
  },
  render: ({ children }: any) => <Text type="title">{children}</Text>,
};

/**
 * 基本のテキスト。
 * bold が指定できる
 **/
export const Body: Story = {
  args: {
    children: "Title テキスト",
  },
  render: ({ children }: any) => <Text type="body">{children}</Text>,
};

/**
 * キャプション用のテキスト。
 * line-height が小さいので１行に収まるテキストに使用する
 **/
export const Caption: Story = {
  args: {
    children: "Caption テキスト",
  },
  render: ({ children }: any) => <Text type="caption">{children}</Text>,
};

export default meta;
