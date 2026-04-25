import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import Button from '../components/Button'
import docIcon from '../assets/images/doc-icon.svg'

function SingleUser() {
  const {id} = useParams()
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const finededObj = user.find((item) => item.id === id)
  
  return (
    <div>
      <div className="pt-[32px]  flex items-center justify-between mb-5">
        <button className='border-2 p-2 px-6 rounded-lg bg-white border-[#DFE0EB] text-lg text-[#252733] cursor-pointer' onClick={() => navigate(-1)}>Back</button>
        <Button onClick={() => navigate('update')} type={'button'} title={'Update Users'} exrtaStyle={'px-5 border-2'}/>
      </div>

      <div className="w-[500px] pt-[32px] px-[32px] bg-white pb-3 rounded-xl shadow-md">
        <div className="mt-5 flex items-center gap-3  pb-5 border-b-2 border-b-[#DFE0EB]">
          <div className="p-3 bg-[#EAF1FB] rounded-lg">
            <img src={docIcon} alt="doc-icon" width={25} height={25} />
          </div>

          <div className="">
            <h3 className='text-[18px] font-semibold'>{finededObj.detail}</h3>
            <p>
              <span className='text-[16px] font-medium'>Ticket # {Math.random() * (10) | 0} </span>
              <button className={`${Number(finededObj.priority) === 1 ? 'bg-[#FEC400]' : (Number(finededObj.priority) === 2 ? 'bg-[#29CC97]' : 'bg-[#F12B2C]' )} px-[12px] py-[2px] ml-3  text-[12px] text-white rounded-[16px]`}>
                {Number(finededObj.priority) === 1 ? 'LOW' : (Number(finededObj.priority) === 2 ? 'NORMAL' : 'HIGH' )}
              </button>
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="w-[75%] space-y-6">
            <ul className="flex items-center justify-between">
              <li>
                <strong className='text-gray-400'>Customer name:</strong>
                <p className='text-gray-800'>{finededObj.name}</p>
              </li>

              <li>
                <strong className='text-gray-400'>Date created:</strong>
                <p className='text-gray-800'>{finededObj.date}</p>
              </li>
            </ul>

            <ul className="flex items-center justify-between">
              <li>
                <strong className='text-gray-400'>Status:</strong>
                <p className='text-gray-800'>Open</p>
              </li>

              <li>
                <strong className='text-gray-400'>Assigned agent:</strong>
                <p className='text-gray-800'>___</p>
              </li>
            </ul>
          </div>

          <div className="mt-7">
            <strong className='text-stone-700 uppercase'>Description</strong>
            <div className="p-3 bg-olive-300 rounded-lg mt-2">
              <p>No description provided for this ticket.</p>
            </div>
          </div>

          <div className="mt-6">
            <strong className='text-slate-600 uppercase'>Activity</strong>

            <ul className='mt-2'>
              <li className='flex items-center gap-4'>
                <div className="w-[8px] h-[8px] rounded-full bg-[#378add]"></div>
                <p className='text-[15px] font-semibold'>Ticket created</p>
              </li>
              <li className='ml-6 text-[12px] text-gray-400 font-semibold'>{finededObj.date} by {finededObj.name}</li>
            </ul>

            <ul className='mt-2'>
              <li className='flex items-center gap-4'>
                <div className="w-[8px] h-[8px] rounded-full bg-[#52A843]"></div>
                <p className='text-[15px] font-semibold'>Priority set to {finededObj.priority == '1' ? 'LOW' : (finededObj.priority == '2' ? 'NORMAL' : 'HARD')}</p>
              </li>
              <li className='ml-6 text-[12px] text-gray-400 font-semibold'>{finededObj.date} · system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
