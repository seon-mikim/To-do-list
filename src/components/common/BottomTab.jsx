import React from 'react'
import { NavLink } from 'react-router-dom'

function BottomTab() {
  return (
    <div>
      <span>
        <NavLink to='/'>all to do</NavLink>
      </span>
      {" "}
      <span>
        <NavLink to ='/priority'>priorty todo</NavLink>
      </span>
      {" "}
      <span>
        <NavLink to='/complete'>done </NavLink>
      </span>
    </div>
  )
}

export default BottomTab