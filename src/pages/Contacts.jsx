import React from 'react'
import process from '../assets/images/process.svg'


function Contacts() {
  return (
    <div className='w-full border border-[#DFE0EB] rounded-[16px] bg-white mt-[54px] flex items-center justify-center min-h-[400px]'>
      <div className='text-center'>
        <div className='w-16 h-16 rounded-[16px] bg-[#E8EEFF] flex items-center justify-center mx-auto mb-5'>
          <img src={process} alt="process-img" width={25} height={25} />
        </div>
        <p className='text-[18px] font-semibold text-[#252733]'>Working on it</p>
        <p className='text-[14px] text-[#9FA2B4] mt-2'>This page is coming soon. Check back later.</p>
      </div>
    </div>
  )
}

export default Contacts
