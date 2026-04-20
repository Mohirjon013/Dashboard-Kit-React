import React from 'react'
import { NavLink } from 'react-router-dom'
import { OverviewIcon } from '../assets/images/icons'

function NavbarLink({item}) {
  return (
    <div>
      <NavLink className={"flex gap-[24px] items-center p-[18px] pl-[32px] border-l-3 border-transparent text-[#A4A6B3]"} to={`${item.path}`} >
        {item.icon}
        <span className='font-normal text-[16px] leading-5 '>{item.title}</span>
      </NavLink>
    </div>
  )
}

export default NavbarLink
