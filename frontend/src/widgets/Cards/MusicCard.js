import React from 'react'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faPlay } from '@fortawesome/free-solid-svg-icons'

//components

const MusicCard = ({className,audio,image,artist,songName}) => {

  return (
    <div className={`relative rounded-[20px] drop-shadow-md bg-[#ffffff59] overflow-hidden group aspect-[1/1] flex justify-end flex-col ${className?? ''}`}>
      {image ? <Image src={image} className='w-full absolute' alt="coverframe"></Image> : '' }

      <FontAwesomeIcon icon={faCompactDisc} className='absolute top-5 left-5 animate-spin z-[100]' ></FontAwesomeIcon>
      <div className='absolute w-full h-full bg-[#ffffff59] group-hover:top-[0] duration-[300ms] top-full left-0 z-10'></div>
      <div className='p-2 bg-[#ffffff59] z-[200] opacity-[.1] group-hover:opacity-[1] duration-[500ms ]'>
        {audio ? <div className='w-full h-[5px] bg-[white] rounded-[12px] relative '>
        <FontAwesomeIcon icon={faCompactDisc} className='absolute top-1/2 left-5 -translate-y-[50%] z-[100] text-[#152131]' ></FontAwesomeIcon>
        </div> : '' }
        {audio?<div className='flex w-full items-center justify-end max-md:hidden'>3:24</div> : ''}
        <h1>{songName}</h1>
        <p className='max-md:hidden'>{artist}</p>
      </div>

      <FontAwesomeIcon icon={faPlay} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] opacity-0 group-hover:opacity-[100%] duration-[500ms] z-[250]'></FontAwesomeIcon>
    </div>
  )
}

export default MusicCard