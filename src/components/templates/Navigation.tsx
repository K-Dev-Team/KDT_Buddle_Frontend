import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
        <div>Navigation</div>
        <Link to={'/'}>Home</Link>
        <Link to={'/testPage'}>go testPage</Link>
    </>
  )
}

export default Navigation