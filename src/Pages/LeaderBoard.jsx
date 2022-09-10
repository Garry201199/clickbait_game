import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CounterContext from "../Context/CounterContext";
// import loop from "../Assets/infinity-loop.gif";
import Table from "../Comp/Table";

const LeaderBoard = () => {
  const { callNotification } = useContext(CounterContext);
  const [sortedScore, setSortedScore] = useState([]);
  const [scoreLoaded, setScoreLoaded] = useState(false);

  const fetchScore = () => {
    setScoreLoaded(false);
    axios
      .get("https://623971b363fdd477ac12bbe2.mockapi.io/scores")
      .then((res) => sortScore(res.data))
      .catch((error) => callNotification(error, "error"));
  };
  const sortScore = (list) => {
    setSortedScore(
      list.sort(
        (a, b) => (a.score > b.score ? 1 : -1)
        // (a.score === b.score ? (a.size > b.size ? 1 : -1) : -1))
      )
    );
    setScoreLoaded(true);
  };

  useEffect(() => {
    fetchScore();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {scoreLoaded ? (
        <div className="flex flex-col  select-none">
          <h1 className="self-center font-openSans text-[1.5rem] md:text-[3rem] mb-2 ">
            Overall Standing's
          </h1>
          <Table sortedScore={sortedScore} />
        </div>
      ) : (
        <div className="h-fit flex  flex-col justify-center items-center">
          <h1 className="md:text-7xl  text-3xl animate-pulse opacity-70 ">
            Loading...
          </h1>
          {/* <LazyLoadImage
            effect="blur"
            alt={"none"}
            height={400}
            src={loop}
            width={400}
          /> */}
        </div>
      )}
    </>
  );
};
export default memo(LeaderBoard);
