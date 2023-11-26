import React from 'react';
import { FaBatteryFull } from 'react-icons/fa';
import { IoWifi } from 'react-icons/io5';

const Menu = ({ gamesList, currentGame, handleGameChange }) => {
  return (
    <div className='control' id='control'>
      <div className='navbar'>
        <div className='logo'>R.Games</div>
        <div className='battery'>
          <FaBatteryFull />
          <IoWifi />
        </div>
      </div>
      <div className='screen'>
        <img src={currentGame.image} alt={currentGame.name} />
      </div>
      <div className='menu'>
        {gamesList.map((game) => (
          <div
            className={`card ${currentGame.id === game.id ? 'selected' : ''}`}
            key={game.id}
            onClick={() => handleGameChange(game)}
          >
            <img src={game.image} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
