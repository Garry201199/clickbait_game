import React from "react";
import { useContext } from "react";
import { UilRocket } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import CounterContext from "../Context/CounterContext";
import axios from "axios";
const SubmitModal = ({ setTrueSubmit, trueSubmit }) => {
  const {
    minutes,
    seconds,
    resetGame,
    name,
    decrementCount,
    callNotification,
    score,
  } = useContext(CounterContext);
  const navigate = useNavigate();

  const secToMin = (score) => {
    return `${padTo2Digits(Math.floor(score / 60))} : ${padTo2Digits(
      score % 60
    )} `;
  };
  const padTo2Digits = (num) => num.toString().padStart(2, "0");

  const publishScore = () => {
    if (score >= 120) {
      callNotification(`Score exceeded the limit, play again..!`, "warning");
    } else {
      axios
        .post("https://623971b363fdd477ac12bbe2.mockapi.io/scores", {
          name,
          scoreInTime: secToMin(score),
          score,
        })
        .catch((err) => callNotification(err, "error"));

      navigate("/leaderboard");
      resetGame();
    }
  };
  return (
    <div
      className=" overflow-y-auto bg-gray-900/20 backdrop-blur-sm font-openSans
         flex justify-center items-center overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 min-h-screen md:h-screen "
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-screen">
        <div className="relative text-white rounded-lg shadow bg-gray-800">
          <button
            onClick={() => setTrueSubmit((trueSubmit) => !trueSubmit)}
            type="button"
            className="absolute top-3 border border-slate-400 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <div className="mb-5 align-middle  flex gap-x-2 items-center self-start text-lg font-semibold text-gray-100">
              Your Score is{" "}
              <div className="flex   gap-5 justify-center items-center">
                <div>
                  <span className="countdown font-mono  text-4xl">
                    <span
                      className="text-slate-400"
                      style={{ "--value": minutes }}
                    ></span>
                  </span>
                  min
                </div>
                <div>
                  <span className="countdown  font-mono text-4xl">
                    <span
                      className="text-slate-400"
                      style={{ "--value": seconds }}
                    ></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
            {/* Table  */}
            <div className="overflow-x-auto flex justify-center relative">
              <table className="w-fit text-sm  border border-gray-400  text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="py-2 px-6 ">
                      Decrement Count
                    </th>
                    <th scope="col" className="py-2  px-6">
                      count
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-800">
                    <th
                      scope="row"
                      className="py-2 px-6 font-medium  whitespace-nowrap text-slate-300"
                    >
                      Red
                    </th>
                    <td className="py-2 px-6 text-slate-300  ">
                      {decrementCount.redDecrementCount}
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <th
                      scope="row"
                      className="py-2 px-6 font-medium  whitespace-nowrap text-slate-300"
                    >
                      Blue
                    </th>
                    <td className="py-2 px-6 text-slate-300">
                      {decrementCount.blueDecrementCount}
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <th
                      scope="row"
                      className="py-2 px-6  border-b font-medium  whitespace-nowrap text-slate-300"
                    >
                      Green
                    </th>
                    <td className="py-2 px-6 border-b text-slate-300">
                      {decrementCount.greenDecrementCount}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-500 dark:text-white">
                    <th scope="row" className="py-2 px-6 text-red-500">
                      Total
                    </th>

                    <td className="py-2 px-6  text-red-500">
                      {decrementCount.redDecrementCount +
                        decrementCount.blueDecrementCount +
                        decrementCount.greenDecrementCount}{" "}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <h2 className="mt-2">
              So your effective score is{" "}
              <span className="text-green-300 text-xl">
                {" "}
                {minutes * 60 + seconds}{" "}
              </span>{" "}
              sec -{" "}
              <span className="text-xl text-red-400">
                {" "}
                {decrementCount.redDecrementCount +
                  decrementCount.blueDecrementCount +
                  decrementCount.greenDecrementCount}{" "}
              </span>{" "}
              <span>* 5 (+5 sec per count🤦‍♂️)</span> ={" "}
              <span className="text-sky-500 text-2xl bg-sky-500/20 px-2  rounded-full">
                {score} sec
              </span>{" "}
            </h2>
            {score >= 120 && (
              <h2 className="px-2 font-semibold py-1 m-1 bg-red-500/20 text-red-500 rounded-xl">
                Sorry ,You exceeded time limit(2 min), try again!!🙃{" "}
              </h2>
            )}
            <div className="flex justify-center items-center">
              <button
                className={`${
                  score >= 120
                    ? `flex w-32 self-center mt-8  px-3 py-2 font-semibold tracking-widest 
              bg-slate-300 rounded-xl text-gray-900  duration-300 transition-all`
                    : `flex w-32 self-center mt-8  px-3 py-2 font-semibold tracking-widest 
              bg-teal-300 hover:bg-teal-600 rounded-xl text-gray-900 duration-300 transition-all`
                } `}
                onClick={publishScore}
              >
                <UilRocket className="mr-2" /> Publish{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
