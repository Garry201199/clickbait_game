import { createContext, useState } from "react";
import { useStopwatch } from 'react-timer-hook';
import { UilTimesCircle,} from "@iconscout/react-unicons";
import { useSnackbar } from "notistack";
const CounterContext = createContext()

export const CounterContextProvider = ({children})=>{
    const [count , setCount] =useState({ redCount:0, blueCount:0, greenCount:0})
    const [name, setName] = useState("");
    const [decrementCount , setDecrementCount] =useState({ redDecrementCount:0, blueDecrementCount:0, greenDecrementCount:0})
    const [gameStarted , setGameStarted] = useState(false)
    const [score , setScore] = useState(0)
    const { seconds, minutes, hours,days,isRunning,  start, pause, reset} = useStopwatch({ autoStart: false });
    // this is required for reset function not to auto restart after reset 
    const stopwatchOffset = new Date();
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds());
    // 
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const action = (snackbarId) => (
      <>
        <button
          className="text-slate-800"
          onClick={() => {
            closeSnackbar(snackbarId);
          }}
        >
          <UilTimesCircle />
        </button>
      </>
    );

    const callNotification =(msg,variant)=>{
      enqueueSnackbar(msg, {
        variant: variant,
        persist: false,
        action,
      })
    }
// reset Count 
const resetCount =()=>{
  setCount({ redCount:0,  blueCount:0,  greenCount:0  })
  setDecrementCount({ redDecrementCount:0, blueDecrementCount:0, greenDecrementCount:0})
}
  // reset Game
  const resetGame = ()=>{
    callNotification("Your timer had reset...", 'success') 
    reset(stopwatchOffset,false)
    resetCount()
    setGameStarted((gameStarted)=> false)
  }
  return (<CounterContext.Provider value={{callNotification,score ,name, setName, setScore, count,resetCount, setCount,gameStarted , setGameStarted ,decrementCount,setDecrementCount, resetGame,seconds, minutes, hours,days,isRunning,  start, pause, reset }} >
    {children}
  </CounterContext.Provider>)
    
}

export default CounterContext;
