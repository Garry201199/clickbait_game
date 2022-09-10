import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import first from "../Assets/first.png";
import second from "../Assets/second.png";
import third from "../Assets/third.png";

const Table = ({ sortedScore }) => {
  
  return (
    <>
      {sortedScore.length > 0 && (
        <div className="overflow-x-auto  mx-2 md:mx-24  font-openSans relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left  text-gray-400">
            <thead className="text-xs   uppercase   bg-gray-700/20  text-gray-400">
              <tr>
                <th scope="col" className="py-3 text-white px-6">
                  Rank
                </th>
                <th scope="col" className="py-3 px-2 md:px-6 ">
                  Player name
                </th>
                <th scope="col" className="py-3 px-2 md:px-6">
                  <div className="flex items-center">Score <span className="lowercase">(min:sec)</span></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedScore?.slice(0,10).map((i , index) => (
                <tr
                  key={i.id}
                  className="  border-b  bg-gray-800/50  border-gray-700"
                >
                  <th
                    scope="row"
                    className="   py-3 px-6 text-white font-medium text-lg  whitespace-nowrap  "
                  >
                    {index+1 === 1 ? (
                      <LazyLoadImage
                        effect="blur"
                        alt={"none"}
                        height={35}
                        src={first}
                        width={35}
                      />
                    ) : index+1 === 2 ? (
                      <LazyLoadImage
                        effect="blur"
                        alt={"none"}
                        height={35}
                        src={second}
                        width={35}
                      />
                    ) : index+1 === 3 ? (
                      <LazyLoadImage
                        effect="blur"
                        alt={"none"}
                        height={35}
                        src={third}
                        width={35}
                      />
                    ) : (
                      index+1
                    )}
                  </th>
                  <th
                    scope="row"
                    className=" px-1 md:py-4 md:px-6 font-medium   whitespace-nowrap  text-white/50"
                  >
                    {i.name}
                  </th>
                  <td className="py-4 px-6">{i?.scoreInTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default  memo(Table) ;
