import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {UilEstate } from '@iconscout/react-unicons'
const NavBar = () => {
  return (
    
      <div className="flex  w-full  px-5 md:px-20 justify-between items-center">
        <div className= " text-[1.5rem] md:text-[2.5rem]">
          <Link to="/ " className="flex justify-center items-center " >
          <UilEstate className='mr-1  font-bold ' size={40} /> <h1 className="item ">Home </h1>
          </Link>
        </div>
        <div className=" justify-end  items-end align-middle ">
          <ul className="flex flex-wrap text-[1rem] md:text-[1.5rem]  text-2xl lg:gap-8  sm:gap-16 ">
            <Link to="/leaderboard">
              <li className="item tracking-wide  ">LeaderBoard</li>
            </Link>
          </ul>
        </div>
      </div>
  
  );
};

export default NavBar;
