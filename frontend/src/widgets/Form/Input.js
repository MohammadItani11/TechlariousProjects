import React from 'react'

const Input = ({type,name,ref, placeholder}) => {
  return (
    <div>
                      <label for={name} class="block mb-2 text-sm font-medium text-white MontserratBold">{name? name.toUpperCase() : ''}</label>
                      <input ref={ref} type={type} name={name} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={placeholder ? placeholder.toUpperCase() : name.toString().toUppercase} required=""/>
    </div>
  )
}

export default Input