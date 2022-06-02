import React from 'react';

const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center" style={{color: color}}>
      {message}
    </h2>
  );
};

export default Header;
