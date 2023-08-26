import React from 'react'

function CustomButton({style,title}) {
  return (
    <button className={` rounded-2xl bg-gradient-to-r from-blue-500 to-fuchsia-900 text-white py-2 px-4 ${style}`}>
   {title}
  </button>
  

  

  )
}

export default CustomButton