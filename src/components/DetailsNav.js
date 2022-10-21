import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { BsFillMicFill } from 'react-icons/bs';

const DetailsNav = ({name}) => {
  return (
        <nav className="flex justify-between items-center w-full
        h-20 text-white fixed bg-nav py-2 px-4">
            <ul className="md:hidden flex flex-row justify-between w-screen pt-4">
                <li><FaAngleLeft size={35}/></li>
                <li className="font-lato">{name}</li>
                <Link to="../../home"><BsFillMicFill /></Link>
            </ul>
        </nav>
  )
}

export default DetailsNav