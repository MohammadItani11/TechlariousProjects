import React from 'react'

const NavBarItem = ({textColor,children}) => {
  return (
    <div className={`${textColor??''}`}>{children ?? 'NavBar'}</div>
  )
}

export default NavBarItem