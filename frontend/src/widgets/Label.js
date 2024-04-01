import React from 'react'

//components
import Image from 'next/image'

const Label = ({label,children,img,color,className}) => {
  return (
    <article className={`rounded-[20px] p-5 md:px-20 ${className??''} ${color? `bg-[${color}]` : 'bg-[#8774f9]'} flex justify-between items-center gap-10 max-md:flex-col`}>
        <div>
            <h2 className='text-[white] text-[32px] max-md:text-center'>{label?? 'Title'}</h2>
            <h3 className='text-[white] text-[24px] max-md:text-center'>{children ?? 'Text'}</h3>
        </div>
        <div>
            <Image className={'h-full max-w-[250px]'} src={img} alt="bg"></Image>
        </div>
    </article>
  )
}

export default Label