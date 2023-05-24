import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

type Story = StoryFn<typeof Button>;
const Template: Story = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //   text: "Sample",
  intent: "primary",
  label: "Primary",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  label: "Secondary",
  size: "medium",
};

export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
  label: "Danger",
  size: "medium",
};

export const Medium = Template.bind({});
Medium.args = {
  //   intent: "secondary",
  size: "medium",
  label: "Medium",
  intent: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  //   intent: "secondary",
  size: "small",
  label: "Small",
  intent: "secondary",
};
