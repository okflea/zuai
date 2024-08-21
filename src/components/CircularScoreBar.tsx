import React from 'react';

interface CircularScoreProps {
  score: number;
  maxScore?: number;
  size?: 'large' | 'small';
}

const CircularScore: React.FC<CircularScoreProps> = ({
  score,
  maxScore = 20,
  size = 'large',
}) => {
  const percentage = (score / maxScore) * 100;
  const strokeDashoffset = 440 - (440 * percentage) / 100;

  const getColor = () => {
    if (percentage >= 75) return 'text-green-500 stroke-green-500';
    if (percentage >= 50) return 'text-orange-400 stroke-orange-400';
    return 'text-red-500 stroke-red-500';
  };

  const getSize = () => {
    if (size === 'small') {
      return {
        svgSize: 'w-20 h-20',
        textSize: 'text-lg',
        circleSize: 60,
        offset: 'w-16 h-16',
      };
    }
    return {
      svgSize: 'w-32 h-32',
      textSize: 'text-xl',
      circleSize: 70,
      offset: 'w-28 h-28',
    };
  };

  const { svgSize, textSize, circleSize, offset } = getSize();

  return (
    <div className="flex items-center justify-center">
      <svg
        className={`${svgSize} transform -rotate-90`}
        viewBox="0 0 160 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="80"
          cy="80"
          r={circleSize}
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          className="text-gray-300"
        />
        <circle
          cx="80"
          cy="80"
          r={circleSize}
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray="440"
          strokeDashoffset={strokeDashoffset}
          className={getColor()}
        />
      </svg>
      <div
        className={`absolute ${textSize} font-bold ${getColor()} flex items-center justify-center`}
        style={{ width: offset, height: offset }}
      >
        {score}/{maxScore}
      </div>
    </div>
  );
};

export default CircularScore;
