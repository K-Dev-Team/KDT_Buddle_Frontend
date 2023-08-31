import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Linked } from '../common/Link';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/meditation');
    }
  }, [location, navigate]);
  return (
    <div style={{ height: '100px', position: 'fixed', bottom: 120 }}>
      <div>Navigation</div>
      <Link to="/meditation">
        <Linked>한줄사색</Linked>
      </Link>
      <Link to="/channel">
        <Linked>채널</Linked>
      </Link>
      <Link to="/activity">
        <Linked>추천활동</Linked>
      </Link>
      <Link to="/mypage">
        <Linked>마이페이지</Linked>
      </Link>
    </div>
  );
}

export default Navigation;
