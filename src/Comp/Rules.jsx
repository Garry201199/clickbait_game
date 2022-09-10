import React from "react";
import { UilVolume, UilInfo } from "@iconscout/react-unicons";
import { useSpeechSynthesis } from "react-speech-kit";
import { useState } from "react";
import { memo } from "react";

const rules = `
   first .  you have to match all 3 counters by the exact count of 20 in minimum possible Time. Time limit is 2 minutes.
   second.  Timer will start only after you start the game , you can also reset the game.
   third. Each decrement count will result in addition of 5 seconds in effective score.
   fourth. Score beyond 2 minutes won't be considered .
   fifth. you can publish your result to check your standings in leader board .  `;
const Rules = () => {
  const [value] = useState(rules);
  const { speak, speaking, voices, cancel } = useSpeechSynthesis();

  return (
    <>
      <label
        htmlFor="my-modal-4"
        className=" modal-button hover:text-teal-100 hover:border-teal-400 hover:bg-teal-700 bg-teal-600 flex max-w-fit duration-200 cursor-pointer justify-end items-end font-mono text-white  px-2 py-1 md:px-3 md:py-2 border   mt-4"
      >
        <UilInfo className="md:mr-2 mr-1  hover:text-teal-400 hover:animate-ping" />{" "}
        Rules
      </label>

      <input
        type="checkbox"
        onClick={() => {
          console.log("clicked");
          cancel();
        }}
        id="my-modal-4"
        className="modal-toggle"
      />

      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box  relative text-slate-300 rounded-2xl font-openSans">
          <h3 className="text-base  flex items-center  font-bold">
            Please read following rules.
            <span>
              <UilVolume
                onClick={() => {
                  speak({ text: value, voice: voices[2] });
                  console.log(speaking);
                }}
                className={` ${
                  speaking
                    ? "text-green-400 animate-pulse  "
                    : "  text-slate-400"
                }  cursor-pointer ml-4 px-1 py-1 h-10  w-10 rounded-lg   `}
                size="30"
              />
            </span>
          </h3>
          <div className="flex flex-col">
            <p className="py-2  text-slate-400 text-sm">
              1) you have to match all 3 counters by the exact count of 20 in
              minimum possible Time. Time limit is 2 minutes.
            </p>

            <p className="py-2  text-slate-400 text-sm">
              2) Timer will start only after you start the game , you can also
              reset the game
            </p>
            <p className="py-2  text-slate-400 text-sm">
              3) Each decrement count will result in addition of 5 seconds in
              effective score.
            </p>
            <p className="py-2  text-slate-400 text-sm">
              4) Score beyond 2 minutes won't be considered.
            </p>
            <p className="py-2  text-slate-400 text-sm">
              5) You can publish your result to check your standings in leader
              board
            </p>
          </div>
        </label>
      </label>
    </>
  );
};

export default memo(Rules);
