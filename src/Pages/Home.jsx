import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import CounterContext from "../Context/CounterContext";
// import astro from "../Assets/astronot.gif";
import astro_replace from "../Assets/atro-replace-removebg-preview.png";
const Home = () => {
  const { name, setName, callNotification } = useContext(CounterContext);
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      callNotification("Please enter valid name...", "error");
    } else if (name.trim().length <= 4) {
      callNotification("Please enter recognizable name...", "warning");
    } else if (name.trim().length >= 15) {
      callNotification("Please enter short name...", "warning");
    } else {
      navigate("/playground");
    }
  };
  return (
    <div className="select-none mx-12 flex font-openSans flex-col relative gap-y-8 justify-center items-center">
      <p className="tracking-wider flex self-center justify-center items-center backdrop-blur-sm drop-shadow-sm font-bold  text-slate-100  text-[1.5rem] md:text-[3rem]">
        Welcome to <span className="text-black">.</span>
        <span className="text-violet-600 ">Click Baiter's Game</span>
      </p>
      <div className="absolute top-10 -z-10">
        <LazyLoadImage
          effect="blur"
          alt={"none"}
          height={350}
          placeholderSrc={astro_replace}
          // src={astro}
          width={350}
        />
      </div>

      <p className="tracking-wider mt-32 backdrop-blur-sm drop-shadow-sm  font-thin  text-slate-100  text-[1.1rem] md:text-3xl">
        Hi Qt,🤩Please enter your name to participate ..
      </p>
      <form
        className="flex mx-10 flex-col  flex-wrap"
        onSubmit={onSubmitHandler}
      >
        <div className="flex items-center flex-wrap  ">
          <label className="mr-2">Name : </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="max-w-full text-white backdrop-blur-sm drop-shadow-sm md:w-96 ml-2 rounded-md border border-gray-400 py-2 px-5 bg-[#fcfdfe08] text-base text-body-color placeholder-[#8d8e8f]
                    outline-none focus-visible:shadow-none focus:border-blue-400 "
          />
        </div>
        <button
          className=" m-2 w-32 self-center mt-10  px-3 py-2 font-semibold tracking-widest bg-teal-300 hover:bg-teal-600 rounded-xl text-gray-900  "
          type="submit"
        >
          Enter{" "}
        </button>
      </form>
    </div>
  );
};

export default React.memo(Home);
