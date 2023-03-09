import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import DoughnutCard from "./index";

export default {
  component: DoughnutCard,
} as ComponentMeta<typeof DoughnutCard>;

const Template: ComponentStory<typeof DoughnutCard> = (args) => (
  <div style={{ backgroundColor: "#323232", width: "200px" }}>
    <DoughnutCard {...args} />
  </div>
);
export const Peak = Template.bind({});
Peak.args = {
  percentage: 100,
};

export const Strong = Template.bind({});
Strong.args = {
  percentage: 75,
};

export const Primed = Template.bind({});
Primed.args = {
  percentage: 65,
};

export const Baseline = Template.bind({});
Baseline.args = {
  percentage: 50,
};

export const Compromised = Template.bind({});
Compromised.args = {
  percentage: 35,
};

export const Fatigued = Template.bind({});
Fatigued.args = {
  percentage: 20,
};

export const Drained = Template.bind({});
Drained.args = {
  percentage: 0,
};
