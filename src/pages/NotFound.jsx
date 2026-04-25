import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className='w-full border border-[#DFE0EB] rounded-[16px] bg-white mt-[54px] flex items-center justify-center min-h-[420px]'>
      <div className='text-center'>
        <p className='text-[80px] font-semibold text-[#3751FF] leading-none'>404</p>
        <p className='text-[20px] font-semibold text-[#252733] mt-3 mb-2'>Page not found</p>
        <p className='text-[14px] text-[#9FA2B4] mb-7'>The page you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => navigate('/')}
          className='bg-[#3751FF] text-white px-7 py-2.5 rounded-lg text-[14px] cursor-pointer'
        >
          Go back home
        </button>
      </div>
    </div>
  )
}

export default NotFound
