import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { defaultParameters, getArgTypes } from "../../utils";
import { Input, inputConfig } from "./input";

type Story = StoryObj<typeof Input>;

/**
- InputHTMLAttributes（ \<Input/\> に指定可能な属性、イベント）は全て指定できます。
*/
const meta: Meta<typeof Input> = {
  title: "Atoms/<Input>",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    componentSubtitle: "<Input> のラッパーコンポーネント",
  },
};

/** size を指定しないと size="default"  となる */
export const Default: Story = {
  args: {
    disabled: false,
    ...inputConfig.defaultVariants,
  },
  argTypes: {
    ...getArgTypes(inputConfig),
  },
  parameters: {
    ...defaultParameters,
  },
  render: ({ children, ...args }) => <Input {...args}>{children}</Input>,
};

export default meta;
