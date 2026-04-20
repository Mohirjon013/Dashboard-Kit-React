import React from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from '../assets/images/site-logo.svg'
import NavbarLink from './NavbarLink'
import {OverviewIcon, TicketsIcon, IdeasIcon, ContactsIcon, AgentsIcon, ArticlesIcon, SettingsIcon, SubscriptionIcon} from '../assets/images/icons'

function Navbar() {
  let navbarList = [
    {
      id:1,
      icon:<OverviewIcon/>,
      title:"Overview",
      path:"/"
    },
    {
      id:2,
      icon:<TicketsIcon/>,
      title:"Tickets",
      path:"/tickets"
    },
    {
      id:3,
      icon:<IdeasIcon/>,
      title:"Ideas",
      path:"/ideas"
    },
    {
      id:4,
      icon:<ContactsIcon/>,
      title:"Contacts",
      path:"/contacts"
    },
    {
      id:5,
      icon:<AgentsIcon/>,
      title:"Agents",
      path:"/agents"
    },
    {
      id:6,
      icon:<SettingsIcon/>,
      title:"Settings",
      path:"/settings"
    },
    {
      id:7,
      icon:<SubscriptionIcon/>,
      title:"Subscription",
      path:"/subscription"
    }
  ]

  
  return (
    <div className='w-[20%] h-[100vh] bg-[#363748]'>
      <div className="pt-[37px] pl-[32px] pb-[59px]">
        <Link className='flex items-center space-x-3' to={"/"}>
          <img src={SiteLogo} alt="Site Logo" width={32} height={32} />
          <strong className='font-bol text-white text-[19px] leading-[32px]'>Dashboard kit</strong>
        </Link>
      </div>
      <nav className="">
        {navbarList.map(item => <NavbarLink key={item.id} item={item} />)}
      </nav>
    </div>
  )
}

export default Navbar
