import React from 'react'
import { useState } from 'react'

//components
import Layout from '@/widgets/Layout'
import NavBar from '@/widgets/NavBar/NavBar'
import MusicCard from '@/widgets/Cards/MusicCard'
import Input from '@/widgets/Form/Input'

const musicUpload = () => {
    //state variables
    const [songName,setSongName] = useState(null);
    const [artist,setArtist] = useState(null)
  return (
    <main className='bg-[#152131]'>
    <NavBar></NavBar>

    <Layout>
        <MusicCard artist={artist} songName={songName} className='max-w-[250px] mx-auto '></MusicCard>

        <article className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10'>
            <Input name="Song Name" onChange={(e)=> {setSongName(e.target.value)}} placeholder="Song Name" type="text"></Input>
            <Input onChange={(e)=> {setArtist(e.target.value)}} placeholder='Artist Name' name="Artist Name" type="text"></Input>
            <Input type="text"></Input>
        </article>
    </Layout>
    </main>
  )
}

export default musicUpload