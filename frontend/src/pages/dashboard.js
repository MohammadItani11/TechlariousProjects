import React from 'react'

//components 
import NavBar from '@/widgets/NavBar/NavBar'
import Label from '@/widgets/Label'
import Layout from '@/widgets/Layout'
import Carousel from '@/widgets/Carousel/Carousel.js'

//assets
import LaptopAsset from '../../public/assets/Laptop.png'
import MusicCard from '@/widgets/Cards/MusicCard'
import SearchBar from '@/widgets/SearchBar'



const dashboard = () => {
  return (
    <main className='bg-[#152131]'>
    <NavBar></NavBar>

    <Carousel>
      <div className={`bg-[url("../../public/assets/Slider/Creativity.png")] w-full h-full bg-cover`}>
        <Layout className={'justify-center flex flex-col h-full'}>
          <h1 className='text-[clamp(24px,5vw,70px)]'>MusicPich</h1>
          <h2 className='text-[18px] md:text-[24px]'>Where creativity meets talent</h2>
        </Layout>
      </div>
      <div className={`bg-[url("../../public/assets/Slider/Festival.jpg")] w-full h-full bg-cover`}></div>
      <div className={`bg-[url("../../public/assets/Slider/Festival2.jpg")] w-full h-full bg-cover`}></div>
          </Carousel>

<Layout className={'py-10'}>
<Label className={'mb-10'} img={LaptopAsset} label={'Hello, User!'}>Welcome Back User</Label>
<SearchBar className='mb-10 max-w-[500px]'></SearchBar>
<div className={'grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10'}>
  <MusicCard></MusicCard>
  <MusicCard></MusicCard>
  <MusicCard></MusicCard>
  <MusicCard></MusicCard>
  </div>
</Layout>
    <article>
        
    </article>
    </main>
  )
}

export default dashboard