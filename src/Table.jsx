import React from "react";

const Table = ({ sortedScore }) => {
  return (
    <>
      {sortedScore.length > 0 && (
        <div className="overflow-x-auto mx-24 font-openSans relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left    text-gray-400">
            <thead className="text-xs   uppercase   bg-gray-700  text-gray-400">
              <tr>
                <th scope="col" className="py-3 text-white px-6">
                  Rank
                </th>
                <th scope="col" className="py-3 px-6">
                  Player name
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Score</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedScore?.map((i) => (
                <tr
                  key={i.id}
                  className="  border-b  bg-gray-800  border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 text-white font-medium text-lg  whitespace-nowrap  "
                  >
                    {i.id == 1 ? "Gold Medal " : i.id}
                  </th>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium    whitespace-nowrap  text-white/50"
                  >
                    {i.name}
                  </th>
                  <td className="py-4 px-6">{i.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
