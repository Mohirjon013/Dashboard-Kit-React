import React, { useContext } from 'react'

import moreIcon from '../assets/images/more-icon.svg'
import deleteIcon from '../assets/images/delete-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

function Tables() {
  const {user, deleteUser} = useContext(Context)
  const navigate = useNavigate()
  return (
    <div className='py-3'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-[14px] font-bold text-[#9FA2B4] text-start w-[25%] p-2 pb-[12px] pl-5 border-b-1 border-b-[#DFE0EB]'>Ticket details</th>
              <th className='text-[14px] font-bold text-[#9FA2B4] w-[25%] p-2 pb-[12px] border-b-1 border-b-[#DFE0EB]'>Customer name</th>
              <th className='text-[14px] font-bold text-[#9FA2B4] w-[15%] p-2 pb-[12px] border-b-1 border-b-[#DFE0EB]'>Date</th>
              <th className='text-[14px] font-bold text-[#9FA2B4] w-[10%] p-2 pb-[12px] border-b-1 border-b-[#DFE0EB]'>Priority</th>
              <th className='text-[14px] font-bold text-[#9FA2B4] p-2 pb-[12px] border-b-1 border-b-[#DFE0EB]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((item) => (
                <tr key={item.id}>
                  <td className='text-[14px] font-semibold text-[#252733] border-b-1 border-b-[#DFE0EB] text-start p-2 py-[16px] pl-5'>{item.detail}</td>
                  <td className='text-[14px] font-semibold text-[#252733] border-b-1 border-b-[#DFE0EB] text-center p-2 py-[16px]'> {item.name} </td>
                  <td className='text-[14px] font-semibold text-[#252733] border-b-1 border-b-[#DFE0EB] text-center p-2 py-[16px]'>{item.date}</td>
                  <td className=' text-[14px] font-semibold border-b-1 border-b-[#DFE0EB] text-center p-2 py-[16px] ' >
                    <button className={`${Number(item.priority) === 1 ? 'bg-[#FEC400]' : (Number(item.priority) === 2 ? 'bg-[#29CC97]' : 'bg-[#F12B2C]' )} px-[12px] py-[5px] text-white rounded-[16px]`}>
                      {Number(item.priority) === 1 ? 'LOW' : (Number(item.priority) === 2 ? 'NORMAL' : 'HIGH' )}
                    </button>
                  </td>
                  <td className='text-[14px] font-semibold text-[#252733] border-b-1 border-b-[#DFE0EB] text-center p-2 py-[16px] space-x-3'>
                    <button onClick={() => navigate(`/tickets/${item.id}`)} className='cursor-pointer'>
                      <img src={moreIcon} alt="more-icon" width={28} height={28} />
                    </button>
                    <button className='cursor-pointer'>
                      <img onClick={() => deleteUser(item.id)} src={deleteIcon} alt="delete-icon" width={28} height={28} />
                    </button>
                    <button className='cursor-pointer'>
                      <img src={editIcon} alt="edit-icon" width={28} height={28} />
                    </button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default Tables
