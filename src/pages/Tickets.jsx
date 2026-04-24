import React from 'react'
import filterImg from '../assets/images/filter.svg'
import searchAdd from '../assets/images/search-add.svg'
import filterIcon from '../assets/images/filter-user.svg'
import AddUsers from '../assets/images/add-user.svg'


import Tables from "../components/Tables";

import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


function Tickets() {
  const navigate = useNavigate()
  return (
    <div className='w-full border border-[#DFE0EB] rounded-[16px] bg-white mt-[54px]'>
      <div className="pt-[32px] px-[32px] flex items-center justify-between mb-5">
        <h2 className='font-bold text-[22px] text-[#252733]'>All tickets</h2>
        <h3 className='font-semibold text-[19px] text-[#252733]'>Users</h3>
      </div>

      <div className="pt-[32px] px-[32px] flex items-center justify-between mb-5">
        <div className="flex space-x-3">
          <button className='w-[100px] cursor-pointer border-[1px] border-[#D0D5DD] bg-[#F5F5F9] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
            <img src={filterIcon} alt="filter img" width={20} height={20} />
            <span>Filters</span>
          </button>
          <button onClick={() => navigate("/tickets/add")} className='w-[118px] cursor-pointer border-[1px] border-[#7784fa] bg-[#3751FF] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
            <img src={AddUsers} alt="filter img" width={20} height={20} />
            <span className='text-white'>Add Users</span>
          </button> 
        </div>


        <label className='w-[320px] flex border-[1px] border-[#D0D5DD] bg-[#F5F5F9] rounded-md px-[14px]'>
          <img src={searchAdd} alt="search img" width={20} height={20} />
          <input className='py-[10px] w-[80%] ml-[8px] bg-[#F5F5F9] outline-none' type="text" placeholder='Search' />
        </label>
      </div>

      <Tables/>
    </div>
  )
}

export default Tickets
