import { Meta, Story } from "@storybook/react/types-6-0";
import { useEffect } from "react";
import useState from "storybook-addon-state";
import DateContainer from "./DateContainer";

interface DateContainerStoryProps {
  days: number[];
  selectedDay: number;
}

export default {
  title: "Components/DateContainer",
  component: DateContainer,
  argTypes: {
    days: { control: { type: "array" } },
    selectedDay: { control: { type: "number", min: 0 } },
  },
} as Meta;

export const Default: Story<DateContainerStoryProps> = ({
  days,
  selectedDay,
}) => {
  const [currentDay, setCurrentDay] = useState("currentDay", selectedDay);

  useEffect(() => {
    if (selectedDay > days.length - 1) {
      setCurrentDay(days.length - 1);
    }
    setCurrentDay(selectedDay);
  }, [selectedDay, days.length]);

  const switchDay = (direction: "previous" | "next") => {
    if (direction === "previous") {
      if (currentDay === 0) {
        return;
      }
      return setCurrentDay(currentDay - 1);
    } else {
      if (days && currentDay === days.length - 1) {
        return;
      }
      setCurrentDay(currentDay + 1);
    }
  };

  return (
    <DateContainer days={days} selectedDay={currentDay} switchDay={switchDay} />
  );
};

Default.args = {
  days: [1677658893169, 1677749826815, 1677840221239],
  selectedDay: 0,
};
