import React, { useContext } from "react";
import { memo } from "react";
import CounterContext from "../Context/CounterContext";
const Timer = () => {
  const { seconds, minutes } = useContext(CounterContext);

  return (
    <div className="flex justify-center mt-4 mb-6 md:mb-8">
      <div className="grid font-mono font-bold grid-flow-col gap-5 text-center place-self-center auto-cols-max">
        <div className="flex flex-col  p-2 bg-slate-200 bg-opacity-20  backdrop-blur-lg  drop-shadow-lg rounded-xl text-slate-200">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col  p-2 bg-slate-200 bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-xl text-slate-200">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default memo(Timer);
