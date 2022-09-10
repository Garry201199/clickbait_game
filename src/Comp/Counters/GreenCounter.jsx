import React from "react";

import { useContext } from "react";
import CounterContext from "../../Context/CounterContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { memo } from "react";

const GreenCounter = () => {
  const { count, setCount, decrementCount, setDecrementCount } =
    useContext(CounterContext);

  const handleDecrement = () => {
    setDecrementCount({
      ...decrementCount,
      greenDecrementCount: decrementCount.greenDecrementCount + 1,
    });
    setCount({ ...count, greenCount: count.greenCount - 1 });
  };

  return (
    <div className="flex items-center relative ">
      <button
        className={`w-8 absolute  -left-5 border-2 border-green-400 hover:bg-green-800 h-8 text-3xl flex justify-center items-end rounded-full bg-green-600 transition-all duration-300 ease-in-out text-white `}
        onClick={() => {
          count.greenCount > 0 ? handleDecrement() : setCount((count) => count);
        }}
      >
        -
      </button>
      <div className=" h-20 w-20 text-3xl ">
        <CircularProgressbar
          value={count.greenCount}
          text={`${count.greenCount}`}
          background
          maxValue={20}
          strokeWidth={5}
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#4ade80",
            textColor: "#166534",
            pathColor: "#fff",
            trailColor: "transparent",
            textSize: "2.5rem",
          })}
        />
      </div>
      {/* <div
        className={`text-3xl border-4 border-green-200 p-4 h-20 w-20 flex justify-center items-center bg-green-400 rounded-full text-white`}
      >
        {count.greenCount}
      </div> */}
      <button
        className={`w-8 absolute flex   justify-center items-end -right-5 border-2 border-green-400 hover:bg-green-800 h-8 text-3xl  rounded-full bg-green-600 transition-all duration-300 ease-in-out text-white `}
        onClick={() => setCount({ ...count, greenCount: count.greenCount + 1 })}
      >
        +
      </button>
    </div>
  );
};

export default memo(GreenCounter);
