import React, { useState } from "react";
import ResultDisplay from "./componants/Results.tsx";
import "./App.css";

const App: React.FC = () => {
  const [currentInput, setCurrentInput] = useState<string>(""); 
  const [result, setResult] = useState<string | number>("0");  

  const handleClick = (value: string) => {
    if (value === "=") {
      if (currentInput) {
        try {
          const calcResult = eval(currentInput); 
          setResult(calcResult);
        } catch {
          setResult("Error");
        }
      }
    } else if (value === "C") {
      setCurrentInput("");
      setResult("0");
    } else {
      setCurrentInput(currentInput + value);
    }
  };

  return (
    <div className="calculator">
      
      <div className="input-display">
<div>
{currentInput || "0"}
</div>
        <div>
        <ResultDisplay result={result} />

        </div>
      </div>

      <div className="buttons">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-"].map((btn) => (
          <button
            className={isNaN(Number(btn)) ? "operator" : "number"}
            key={btn}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

    
      <div className="equals-clear">
      <button className="equals" onClick={() => handleClick("=")}>
        =
      </button>

      <button className="clear" onClick={() => handleClick("C")}>
        C
      </button>
      </div>
   
    </div>
  );
};

export default App;
