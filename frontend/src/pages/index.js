import React from 'react'

//widgets
import NavBar from '../widgets/NavBar/NavBar'
import Layout from '../widgets/Layout'
import LoadingButton from '@/widgets/LoadingButton'
import Form from '@/widgets/Form/Form'

const home = () => {
  return (
    <>
    <NavBar></NavBar>

    <article>
        <section style={{backgroundImage: "url('/assets/Cover.png')"}} className="h-[min(100dvh,800px)] min-w-[100vw] bg-cover flex items-center">
            <Layout>
                <div className='max-md:flex flex-col items-center'>
                    <h1 className='text-white text-[24px] md:text-[48px] lg:text-[70px] MontserratBold md:leading-[50px] lg:leading-[70px] text-justify mb-7 max-md:text-center'>EPIC MUSIC<br/>EXPERIENCE</h1>
                    <p className='text-white max-w-[285px] md:max-w-[422px] mb-5 max-md:text-center'>We have the perfect music with free licensing for your creativity. Discover the possibilities now!</p>
                    <LoadingButton></LoadingButton>
                </div>
            </Layout>
            <Form></Form>
        </section>
    </article>
    </>
  )
}

export default home