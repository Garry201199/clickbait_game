import React, {  useContext } from "react";
import "../App.css";
import RedCounter from "../Comp/Counters/RedCounter";
import BlueCounter from "../Comp/Counters/BlueCounter";
import GreenCounter from "../Comp/Counters/GreenCounter";
import Rules from "../Comp/Rules";
import ButtonPanel from "../Comp/ButtonPanel";
import Timer from "../Comp/Timer";
import CounterContext from "../Context/CounterContext";
import { memo } from "react";
const PlayGround = () => {
  const { name } = useContext(CounterContext);
  return (
    <div>
      <div className=" App select-none mt-5 text-gray-500 ">
        <div className="flex justify-center align-center">
          <h1 className="text-[1.5rem] font-bold md:text-4xl text-slate-300 tracking-widest font-mono">
            <span className="text-purple-500">{name}</span>'s arena
          </h1>
        </div>
        <div className="panel border-2 border-slate-600 py-2 px-2 md:p-8 m-2 md:m-12 bg-transparent w-80% ">
          {/* MOdal for Rules */}
          <Rules />
          <Timer></Timer>
          <div className=" flex gap-x-12 md:gap-16 flex-wrap   justify-center self-center items-center ">
            <RedCounter />
            <BlueCounter />
            <GreenCounter />
          </div>
          {/* Button Panel */}
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
};

export default memo(PlayGround);
