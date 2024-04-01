import React from 'react'

//Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight,faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'

const Controls = ({onPrevSlide,onNextSlide}) => {
  return (
    <>
        <div onClick={onPrevSlide} className='absolute left-5 top-1/2 -translate-y-[50%] rounded-[12px] hover:bg-[white] duration-[300ms] group'><FontAwesomeIcon className='duration-[300ms] group-hover:text-[#152131] text-[white] px-3 py-2' icon={faArrowLeft}></FontAwesomeIcon></div>
        <div onClick={onNextSlide} className='absolute right-5 top-1/2 -translate-y-[50%] rounded-[12px] hover:bg-[white] duration-[300ms] group'><FontAwesomeIcon className='duration-[300ms] group-hover:text-[#152131] text-[white] px-3 py-2' icon={faArrowRight}></FontAwesomeIcon></div>

    </>
  )
}

export default Controls