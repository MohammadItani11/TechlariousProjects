import React from 'react'

const Layout = ({children, className}) => {
  return (
    <section className={`w-[min(90%,1180px)] mx-auto ${className ?? ''}`}>
        {children}
    </section>
  )
}

export default Layout