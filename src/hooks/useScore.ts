import { useState, useEffect } from 'react';

type ScoreStatus = {
  color: string
  status: string,
}

/**
 * Calculates the color and percentage based on a score.
 * @param {number} score - The score to calculate the color and percentage for.
 * @returns {{color: string, percentage: number}} An object containing the color and percentage.
 */
export const useScoreStatus = (score: number): ScoreStatus => {
  const [scoreStatus, setScoreStatus] = useState<ScoreStatus>({ color: "#71FF00", status: 'Peak' });
  useEffect(() => {
    if (score <= 16.9) { setScoreStatus({ color: "#F43B2B", status: 'Drained' }) }
    else if (score <= 29.9) { setScoreStatus({ color: "#EF780A", status: 'Fatigued' }) }
    else if (score <= 39.9) { setScoreStatus({ color: "#EFB50A", status: 'Compromised' }) }
    else if (score <= 59.9) { setScoreStatus({ color: "#BBD1AA", status: 'Baseline' }) }
    else if (score <= 69.9) { setScoreStatus({ color: "#94CA69", status: 'Primed' }) }
    else if (score <= 83.9) { setScoreStatus({ color: "#7BDB2E", status: 'Strong' }) }
    else if (score > 84) {
      setScoreStatus({ color: "#71FF00", status: 'Peak' })
    }
  }, [score]);

  return scoreStatus;
}