import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <NavLink to='/'>homepage</NavLink>
        <NavLink to='/app'>books</NavLink>
    </div>
  )
}
