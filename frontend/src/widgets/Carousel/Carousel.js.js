import React, { useEffect, useState } from 'react'
import Slide from './Slide';
import Controls from './Controls';

const Carousel = ({interval,children}) => {
  const [currentSlide,setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateSlide(1);
    }, interval ?? 5000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);

    const updateSlide = (value) => {
      //updating slide index
      const newSlideIndex = (currentSlide+value)%children.length
      setCurrentSlide(newSlideIndex < 0 ? 0 : newSlideIndex);
    }

  
  return (
    <article className='w-full aspect-[16/9] max-h-[700px] relative z-0'>
      {React.Children.toArray(children).map((child, index) => (
        <Slide className={`${index!== currentSlide ? '-translate-x-[100%] opacity-0' : ''} absolute h-full w-full duration-[1000ms]`} key={index}>{child}</Slide>
      ))}

      <Controls onPrevSlide = {()=> {updateSlide(-1)}} onNextSlide = {()=> {updateSlide(1)}}></Controls>
    </article>
  )
}

export default Carousel