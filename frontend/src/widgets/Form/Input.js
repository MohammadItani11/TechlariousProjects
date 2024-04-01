import React from 'react'

const Input = React.forwardRef(({ type="", name="", placeholder="",onChange="" }, ref) =>  {
  return (
    <div>
                      <label className="block mb-2 text-[clamp(14px,3vw,20px)] font-medium text-white MontserratBold">{name? name.toUpperCase() : ''}</label>
                      <input onChange={onChange} ref={ref} type={type} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full md:p-2.5 px-2.5 py-1 text-[clamp(12px,3vw,16px)]" placeholder={placeholder ?? name.toString().toUppercase} required=""/>
    </div>
  )
})

export default Input