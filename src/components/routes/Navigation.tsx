import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { navigationIcons } from '../../icons/navigationIcons';
import { IconWrap, NavWrap } from '../../styles/navigation/navigation.styles';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/meditation');
    }
  }, [location, navigate]);
  return (
    <NavWrap>
      {navigationIcons.map(({ name, icon, isActive, link }) => (
        <Link to={link} key={name}>
          <IconWrap>
            {location.pathname === link ? <div>{isActive}</div> : <div>{icon}</div>}
            <p>{name}</p>
          </IconWrap>
        </Link>
      ))}
    </NavWrap>
  );
}

export default Navigation;
