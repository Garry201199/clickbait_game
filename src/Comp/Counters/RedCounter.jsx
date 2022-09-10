import React from "react";
import { useContext } from "react";
import CounterContext from '../../Context/CounterContext'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { memo } from "react";

const RedCounter = () => {
  const { count , setCount ,decrementCount,setDecrementCount, } = useContext(CounterContext)

  const handleDecrement = () => {
    setDecrementCount({...decrementCount , redDecrementCount : decrementCount.redDecrementCount+1 });
    setCount({...count , redCount: count.redCount - 1})
  };
  return (
    <div className="flex items-center relative ">
      <button
        className={`w-8 absolute -left-5 border-2 border-red-400 hover:bg-red-800 h-8 text-3xl flex justify-center items-end rounded-full bg-red-600 transition-all duration-300 ease-in-out text-white `}
        onClick={() => {
          count.redCount > 0 ? handleDecrement() : setCount((count)=> count)
        }}
      >
        -
      </button>
      <div className=" h-20 w-20 text-3xl ">
     <CircularProgressbar
        value={count.redCount}
        text={`${count.redCount}`}
        background
        maxValue={20}
        strokeWidth={5}
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#f87171",
          textColor: "#7f1d1d",
          pathColor: "#fff",
          trailColor: "transparent",
          textSize:'2.5rem'
        })}
      />
     </div>
      {/* <div
        className={`text-3xl border-4 border-red-200 p-4 h-20 w-20 flex justify-center items-center bg-red-400 rounded-full text-white`}
      >
        {count.redCount}
      </div> */}
      <button
        className={`w-8 absolute -right-5 border-2 border-red-400 hover:bg-red-800 h-8 text-3xl flex justify-center items-end rounded-full bg-red-600 transition-all duration-300 ease-in-out text-white `}
        onClick={() => setCount({...count , redCount: count.redCount + 1})}
      >
        +
      </button>
    </div>
  );
};

export default memo(RedCounter);
