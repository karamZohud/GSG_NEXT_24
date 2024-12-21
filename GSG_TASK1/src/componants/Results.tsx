import React from 'react';

interface ResultDisplayProps {
  result: string | number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div style={{display:result!=0?"inline-block":"none"}} >
     = {result}
    </div>
  );
};

export default ResultDisplay;
