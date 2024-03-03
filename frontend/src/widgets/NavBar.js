import React, { useEffect, useState } from 'react'

//widgets
import Layout from './Layout'

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(()=>{
    if(window.scrollY > 20){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
    
  },[window.scrollY])
  
  return (
    <nav className={`${isScroll ? 'bg-white' : 'bg-none fixed top-0 left-[50%] -translate-x-[50%] w-full'}`}>
      <Layout>
        Hello
      </Layout>
    </nav>
  )
}

export default NavBar