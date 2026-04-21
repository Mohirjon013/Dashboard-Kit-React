import React from 'react'

function TicketsTable({item}) {
  return (
    <li className='table-item flex items-center justify-between py-[20px] border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
      <p className='font-semibold text-[14px] leading-[20px] text-[#252733]'>{item.title} on Feature Request</p> 
      <p className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>{item.number}</p>
    </li>
  )
}

export default TicketsTable
