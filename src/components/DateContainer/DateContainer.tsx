import dayjs from "dayjs";
import { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export type DateContainerProps = {
  selectedDay: number;
  switchDay: (direction: "previous" | "next") => void;
  days: number[];
};

const DateContainer: FC<DateContainerProps> = ({
  selectedDay,
  switchDay,
  days,
}) => (
  <div className='date-container'>
    <button onClick={() => switchDay("previous")} disabled={selectedDay === 0}>
      <AiOutlineArrowLeft color={selectedDay === 0 ? "#9d9a9a" : "white"} />
    </button>
    <div>{dayjs(days[selectedDay]).format("YYYY MMMM DD")}</div>
    <button onClick={() => switchDay("next")}>
      <AiOutlineArrowRight
        color={selectedDay === days.length - 1 ? "#9d9a9a" : "white"}
      />
    </button>
  </div>
);

export default DateContainer;
