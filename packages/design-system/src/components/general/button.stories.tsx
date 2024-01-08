import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { defaultParameters, getArgTypes } from "../../utils";
import { Button, buttonConfig } from "./button";

type Story = StoryObj<typeof Button>;

/**
- ButtonHTMLAttributes（ \<button/\> に指定可能な属性、イベント）は全て指定できます。
*/
const meta: Meta<typeof Button> = {
  title: "Atoms/<Button>",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    componentSubtitle: "<button> のラッパーコンポーネント",
  },
};

/** size, color を指定しないと size="default" color="default" となる */
export const Default: Story = {
  args: {
    disabled: false,
    children: "ボタン",
    ...buttonConfig.defaultVariants,
  },
  argTypes: {
    ...getArgTypes(buttonConfig),
  },
  parameters: {
    ...defaultParameters,
  },
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

/**
 - 最も優先されるアクション(破壊的ではない)
 */
export const Primary: Story = {
  render: (args) => (
    <>
      <Button>ボタン</Button>
      <Button disabled>無効化</Button>
      <Button size="sm">小ボタン</Button>
      <Button size="sm" disabled>
        小ボタン
      </Button>
    </>
  ),
};

/**
 - 最も優先されるアクションに対として存在する（例としてキャンセルなど）
 - 特に優先的ではないが導線として重要であるとき
 */

export const Secondary: Story = {
  render: (args) => (
    <>
      <Button variant="secondary">ボタン</Button>
      <Button variant="secondary" disabled>
        無効化
      </Button>
      <Button variant="secondary" size="sm">
        小ボタン
      </Button>
      <Button variant="secondary" size="sm" disabled>
        小ボタン
      </Button>
    </>
  ),
};

/**
 - 破壊的なアクションとなる場合のみに用いる（例として削除など）
 - 注意を引くために用いることはしない
*/
export const Alert: Story = {
  render: (args) => (
    <>
      <Button variant="destructive">ボタン</Button>
      <Button variant="destructive" disabled>
        無効化
      </Button>
      <Button variant="destructive" size="sm">
        小ボタン
      </Button>
      <Button variant="destructive" size="sm" disabled>
        小ボタン
      </Button>
    </>
  ),
};

export default meta;
