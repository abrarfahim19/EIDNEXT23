import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    // children: "Click Me",
  },
  argTypes: {
    intent: { control: "select" },
    size: { control: "select" },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    //   text: "Sample",
    intent: "primary",
    size: "medium",
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    size: "medium",
    label: "Secondary",
  },
};

export const Danger: Story = {
  args: {
    intent: "danger",
    label: "Danger",
    size: "medium",
  },
};

export const Medium: Story = {
  args: {
    //   intent: "secondary",
    intent: "secondary",
    size: "medium",
    label: "Medium",
  },
};

export const Small: Story = {
  args: {
    intent: "secondary",
    size: "small",
    label: "Small",
  },
};
