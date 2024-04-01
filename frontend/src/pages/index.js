import {React,useState} from 'react'

//widgets
import NavBar from '../widgets/NavBar/NavBar'
import Layout from '../widgets/Layout'
import LoadingButton from '@/widgets/LoadingButton'

import SignupForm from '@/widgets/Form/SignupForm'
import LoginForm from '@/widgets/Form/LoginForm'

const home = () => {
      //state variables
      const [isSignup,setIsSignup] = useState(false)
      const [isLogin,setIsLogin] = useState(false)

      const setLogin = (state) =>{
        setIsLogin(state)
        setIsSignup(!state)
      }

      const setSignup = (state) =>{
        setIsSignup(state)
        setLogin(!state)
      }

  return (
    <main className='bg-[#152131]'>
    <NavBar></NavBar>

    <article>
        <section style={{backgroundImage: "url('/assets/Cover.png')"}} className="h-[min(100dvh,800px)] min-w-[100vw] bg-cover flex items-center">
            <Layout>
                <div className='max-md:flex flex-col items-center h-full'>
                    <h1 className='text-white  text-[clamp(24px,5vw,70px)]  MontserratBold md:leading-[50px] lg:leading-[70px] text-justify mb-7 max-md:text-center'>EPIC MUSIC<br/>EXPERIENCE</h1>
                    <p className='text-white max-w-[285px] md:max-w-[422px] mb-7 max-md:text-center'>We have the perfect music with free licensing for your creativity. Discover the possibilities now!</p>
                    <div className='flex max-md:flx-col gap-3'>
                    <LoadingButton onClick={()=>setLogin(true)}>Login</LoadingButton>
                    <LoadingButton onClick={()=>setSignup(true)} bgColor='#50428d'>Signup</LoadingButton>
                    </div>
                    
                </div>
            </Layout>
            {isSignup ? <SignupForm onClose={setIsSignup}></SignupForm> : '' }
            {isLogin ? <LoginForm onClose={setIsLogin}></LoginForm> : ''}
        </section>
    </article>
    <article className='py-10'>
      <Layout>
        <h1 className='md:text-center text-[clamp(22px,5vw,32px)] MontserratBold'>Revitalize Your Music Experience</h1>
        <section className='grid md:grid-cols-2'>
          <div>
            <p className='text-white'>

            </p>
          </div>
          <div>
            
          </div>

        </section>
      </Layout>

    </article>
    </main>
  )
}

export default home