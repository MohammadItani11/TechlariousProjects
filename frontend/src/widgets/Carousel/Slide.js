import React from 'react'

const Slide = ({className,children}) => {
  return (
    <div className={`${className?? ''}`}>{children ?? 'Slide'}</div>
  )
}

export default Slide