import React from "react";
import { UilPlay, UilRocket, UilSquareShape } from "@iconscout/react-unicons";
import { useContext } from "react";
import CounterContext from "../Context/CounterContext";
import { useState } from "react";
import SubmitModal from "./SubmitModal";
import { memo } from "react";
const ButtonPanel = () => {
  const [trueSubmit, setTrueSubmit] = useState(false);

  const {
    resetGame,setScore,
    callNotification,
    seconds,
    minutes,
    start,
    pause,
    count,
    resetCount,
    reset,
    gameStarted,
    setGameStarted, decrementCount
  } = useContext(CounterContext)


  const handleGameStart = () => {
    callNotification('Game Started...','success')
    resetCount();
    reset();
    setGameStarted((gameStarted) => !gameStarted);
    start();
  };

  const handleSubmitGame = () => {
    if (Object.values(count).every((i) => i === 20)) {
      if(minutes >=2){
        callNotification('Time Limit exceeded' , 'error')
      }
      setScore ((minutes * 60 + seconds) +  ((decrementCount.redDecrementCount +decrementCount.blueDecrementCount+decrementCount.greenDecrementCount) * 5)  );
      
      setTrueSubmit((trueSubmit) => !trueSubmit);
      setGameStarted((gameStarted) => !gameStarted);
      pause();
    } else {
      callNotification("Your counter are not matched to 20", "info");
    }
  };
  const handleFalseSubmit = () => {
    callNotification("Please start your game first..!!", "info");
  };
  return (
    <>
      <div className="flex flex-wrap mt-4 ">
        <div className="flex flex-1 gap-x-4 md:gap-8">
          <label
            onClick={() =>
              !gameStarted
                ? handleGameStart()
                : callNotification("Game is already started..!!", "success")
            }
            disabled={gameStarted}
            htmlFor="my-modal-5"
            className={`modal-button ${
              gameStarted
                ? "  flex max-w-fit  duration-200 cursor-pointer justify-end items-end font-mono text-slate-300  px-3  py-2 border bg-gray-500 border-slate-400  mt-4 "
                : "  hover:text-blue-100 hover:border-blue-400 hover:bg-blue-700 bg-blue-600 flex max-w-fit duration-200 cursor-pointer justify-end items-end font-mono text-blue-100  px-3 py-2 border   mt-4"
            }`}
          >
            <UilPlay className="mr-2 hover:text-blue-400 hover:animate-ping " />{" "}
            Start
          </label>
          
          <button
            onClick={() => resetGame()}
            className="hover:text-rose-100 hover:border-rose-400 hover:bg-rose-700 bg-rose-600 flex max-w-fit duration-200 cursor-pointer justify-end items-end font-mono text-rose-100  px-3  py-2 border   mt-4"
          >
            <UilSquareShape className="mr-2 hover:text-rose-400 hover:animate-ping " />{" "}
            Reset
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <label
            htmlFor="my-modal-6"
            onClick={() =>
              gameStarted ? handleSubmitGame() : handleFalseSubmit()
            }
            className={` ${
              !gameStarted
                ? "  flex max-w-fit  duration-200 cursor-pointer justify-end items-end font-mono text-slate-300   px-3  py-2 border bg-gray-500 border-slate-400  mt-4 "
                : "   hover:text-green-100 hover:border-green-400 hover:bg-green-700 bg-green-600 flex max-w-fit duration-200 cursor-pointer justify-end items-end font-mono text-green-100  px-3 py-2 border   mt-4"
            } `}
          >
            <UilRocket className="md:mr-4 mr-2 hover:text-green-400 hover:animate-ping " />{" "}
            Submit
          </label>
        </div>
      </div>
      

      {trueSubmit && (
        <SubmitModal setTrueSubmit={setTrueSubmit} trueSubmit={trueSubmit}  />
        
      )}
    </>
  );
};

export default memo(ButtonPanel) ;
