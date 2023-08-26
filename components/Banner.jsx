import React from 'react'
import Form from './Form'

function Banner() {
  return (
<div className='w-full h-[650px] md:h-auto bg-banner-bg bg-cover bg-center flex flex-col md:flex-row justify-center items-center md:justify-between z-0 '>
  <div className='w-full md:w-1/2 h-80 p-4 md:p-8 lg:p-12 flex flex-col justify-center items-center md:items-start'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left md:w-full md:max-w-lg'>
      A Creator Paradise
    </h1>
    <p className='text-white text-center md:text-left'>
      Where Creativity Meets Success
    </p>
  </div>
  <Form/>
</div>


  
  

  )
}

export default Banner