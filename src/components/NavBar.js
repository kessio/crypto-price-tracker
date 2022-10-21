/* eslint-disable */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillMicFill } from 'react-icons/bs';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: 'home',
    },
    {
      id: 2,
      name: 'Details',
    },
  ];
  return (
    <nav className="flex justify-between items-center w-full
     h-20 text-white fixed bg-nav py-2 px-8"
    >
      <ul className="hidden md:flex">
           {links.map(({ id, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white
                hover:scale-150 duration-200">
            {name}
          </li>

        ))}
      </ul>
      <ul className="md:hidden flex flex-row justify-between w-screen pt-4">
        <li onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-white">
          {nav ? <FaTimes size={30} /> : <FaBars size={20} />}
        </li>
        <li className="font-lato"> 
        Live Prices
        </li>
        <li className="">
          <BsFillMicFill size={20} />
        </li>
      </ul>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0
            left-0 w-full h-screen bg-gradient-to-b from-light to-primary text-white"
        >
          {links.map(({ id, name }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{name}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default NavBar;
