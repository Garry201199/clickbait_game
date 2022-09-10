import React from "react";
import { useContext } from "react";
import CounterContext from '../../Context/CounterContext'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { memo } from "react";

const BlueCounter
 = () => {
  const { count , setCount ,decrementCount,setDecrementCount, } = useContext(CounterContext)
  const handleDecrement = () => {
    setDecrementCount({...decrementCount , blueDecrementCount : decrementCount.blueDecrementCount+1 });
    setCount({...count , blueCount: count.blueCount - 1})
  };
  return (
    <div className="flex items-center relative ">
      <button
        className={`w-8 absolute -left-5 border-2 border-blue-400 hover:bg-blue-800 h-8 text-3xl flex justify-center items-end rounded-full bg-blue-600 transition-all duration-300 ease-in-out text-white `}
        onClick={() => {
          count.blueCount > 0 ? handleDecrement() : setCount((count)=> count)
        }}
      >
        -
      </button>
      <div className="    h-20 w-20 text-3xl ">
     <CircularProgressbar
        value={count.blueCount}
        text={`${count.blueCount}`}
        background
        maxValue={20}
        strokeWidth={5}
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#60a5fa",
          textColor: "#1e3a8a",
          pathColor: "#fff",
          trailColor: "transparent",
          textSize:'2.5rem'
        })}
      />
     </div>
      
      <button
        className={`w-8 absolute -right-5 border-2 border-blue-400 hover:bg-blue-800 h-8 text-3xl flex justify-center items-end rounded-full bg-blue-600 transition-all duration-300 ease-in-out text-white `}
        onClick={() => setCount({...count , blueCount: count.blueCount + 1})}
      >
        +
      </button>
    </div>
  );
};

export default memo(BlueCounter)
;
