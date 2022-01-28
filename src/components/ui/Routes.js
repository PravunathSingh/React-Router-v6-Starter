import React from 'react';
import { NavLink } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h4>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </h4>
          </li>
          <li>
            <h4>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
            </h4>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Routes;
