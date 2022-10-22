/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { BsFillMicFill } from 'react-icons/bs';

const DetailsNav = ({ name }) => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center w-full
        h-20 text-white fixed bg-nav py-2 px-4"
    >
      <ul className="flex flex-row justify-between w-screen pt-4">
        <li><FaAngleLeft size={35} onClick={() => navigate(-1)} /></li>
        <li className="font-lato">{name}</li>
        <BsFillMicFill />
      </ul>
    </nav>
  );
};

DetailsNav.prototype = {
  name: PropTypes.string,
};
export default DetailsNav;
