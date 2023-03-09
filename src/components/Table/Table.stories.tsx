import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "./index";

export default {
  component: Table,
  argTypes: {
    selectedDay: {
      control: { type: "number", min: 0, max: 3 },
    },
  },
} as ComponentMeta<typeof Table>;

const users = [
  {
    username: "Johnathan",
    day: [
      { timestamp: 1686448800, score: 82 },
      { timestamp: 1686565800, score: 47 },
      { timestamp: 1686602700, score: 95 },
    ],
  },
  {
    username: "Sarah",
    day: [
      { timestamp: 1686448800, score: 24 },
      { timestamp: 1686565800, score: 59 },
      { timestamp: 1686602700, score: 78 },
    ],
  },
  {
    username: "Emily",
    day: [
      { timestamp: 1686448800, score: 36 },
      { timestamp: 1686565800, score: 81 },
      { timestamp: 1686602700, score: 42 },
    ],
  },
  {
    username: "Michael",
    day: [
      { timestamp: 1686448800, score: 53 },
      { timestamp: 1686565800, score: 17 },
      { timestamp: 1686602700, score: 95 },
    ],
  },
  {
    username: "David",
    day: [
      { timestamp: 1686448800, score: 9 },
      { timestamp: 1686565800, score: 68 },
      { timestamp: 1686602700, score: 45 },
    ],
  },
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  users,
  selectedDay: 0,
};

export const LongList = Template.bind({});
LongList.args = {
  users: users.concat(users),
  selectedDay: 0,
};

export const OneEntry = Template.bind({});
OneEntry.args = {
  users: [users[0]],
  selectedDay: 0,
};
