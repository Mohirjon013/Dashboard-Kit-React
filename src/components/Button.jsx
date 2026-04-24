import React from 'react'

function Button({title, onClick, exrtaStyle, type}) {
  return (
    <button type={type} onClick={onClick} className={`${exrtaStyle} bg-white border border-[#DFE0EB] text-[#252733] font-semibold text-[18px] rounded-lg p-2 cursor-pointer duration-300`}>{title}</button>
  )
}

export default Button
