import { FC } from "react";
import { useScoreStatus } from "../../hooks/useScore";
import DoughnutChart from "../DoughnutChart";

export type DoughnutCardProps = {
  percentage: number;
};

const DoughnutCard: FC<DoughnutCardProps> = ({ percentage }) => {
  return (
    <div className='doughnut-card'>
      <DoughnutChart percentage={percentage} strokeWidth={12} radius={40} />
      <p>{useScoreStatus(percentage).status}</p>
    </div>
  );
};

export default DoughnutCard;
