import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="information">
      <h2 className= "logo">PeopleConnect</h2>

        <ul className='mynav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/people'>People</Link></li>
            <li><Link to='/request'>RequestConnect</Link></li>                   
        </ul>
    </nav>
  );
};

export default Navbar;