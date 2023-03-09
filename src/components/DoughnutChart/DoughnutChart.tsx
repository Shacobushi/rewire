import { FC, useEffect, useState } from "react";
import { useScoreStatus } from "../../hooks/useScore";

type DoughnutChartProps = {
  percentage: number;
  radius: number;
  strokeWidth: number;
};

const DoughnutChart: FC<DoughnutChartProps> = ({
  percentage,
  radius,
  strokeWidth,
}) => {
  const [percent, setPercent] = useState(0);
  const viewBoxSize = radius * 2 + strokeWidth * 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let currentPercent = 0;
    if (percentage === 0) {
      setPercent(currentPercent);
    } else {
      //This interval it's required for the animation of the chart
      const interval = setInterval(() => {
        currentPercent += 1;
        if (currentPercent === 100 || currentPercent >= percentage) {
          clearInterval(interval);
        }
        setPercent(currentPercent);
      }, 1);
    }
  }, [percentage]);
  return (
    <div
      className='doughnut'
      style={{ width: viewBoxSize, height: viewBoxSize }}
    >
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill='none'
          stroke='#353536'
          strokeWidth={strokeWidth}
        />
        <circle
          id='#circle'
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill='none'
          stroke={useScoreStatus(percentage).color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - (circumference * percent) / 100}
          transform={`rotate(-90 ${radius + strokeWidth} ${
            radius + strokeWidth
          })`}
        />
        <text
          x={radius + strokeWidth}
          y={radius + strokeWidth * 1.9}
          textAnchor='middle'
          fontSize={"2rem"}
          fill='white'
        >
          {`${percent}`}
        </text>
      </svg>
    </div>
  );
};

export default DoughnutChart;
