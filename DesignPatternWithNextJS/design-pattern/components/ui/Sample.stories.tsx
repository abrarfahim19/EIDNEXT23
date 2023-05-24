import { Meta, StoryFn } from "@storybook/react";

interface SampleProps {
  text: string;
  color: string;
}

const Sample = ({ text, color }: SampleProps) => {
  return <div style={{ color }}>{text}</div>;
};

export default {
  title: "Sample",
  component: Sample,
} as Meta<typeof Sample>;

type Story = StoryFn<typeof Sample>;
const Template: Story = (args: SampleProps) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Sample",
  color: "blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Sample",
  color: "green",
};
