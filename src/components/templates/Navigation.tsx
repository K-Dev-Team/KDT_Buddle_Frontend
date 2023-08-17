import React from 'react';
import { Link } from 'react-router-dom';

import { Linked } from '../atoms/Link';

function Navigation() {
  return (
    <>
      <div>Navigation</div>
      <Link to="/">
        <Linked>Home</Linked>
      </Link>
      <Link to="/testPage">
        <Linked>go testPage</Linked>
      </Link>
      <Link to="/testBear">
        <Linked>go testBear to SCJ</Linked>
      </Link>
      <Link to="/testButton">
        <Linked>go Button</Linked>
      </Link>
      <Link to="/testMobx">
        <Linked>go Mobx</Linked>
      </Link>
      <Link to="/testRedux">
        <Linked>go Redux</Linked>
      </Link>
    </>
  );
}

export default Navigation;
