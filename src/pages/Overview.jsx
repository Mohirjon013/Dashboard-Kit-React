import React from 'react'
import NumItem from '../components/NumItem'
import Treds from '../components/Treds'
import TicketsTable from "../components/TicketsTable"
import Form from '../components/Form'
import List from '../components/List'


function Overview() {
  const numData = [
    {
      id:1,
      title:"Unresolved",
      number:"60"
    },
    {
      id:2,
      title:"Overdue",
      number:"16"
    },
    {
      id:3,
      title:"Open",
      number:"43"
    },
    {
      id:4,
      title:"On hold",
      number:"63"
    }
  ]

  const tableList = [
    {
      id:1,
      title:"Waiting on Feature Request",
      number:"4238"
    },
    {
      id:2,
      title:"Awaiting Customer Response",
      number:"1005"
    },
    {
      id:3,
      title:"Awaiting Developer Fix",
      number:"914"
    },
    {
      id:4,
      title:"PendingOpen",
      number:"281"
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mt-[54px]">
        {numData.map(item => <NumItem key={item.id} item={item}/>)}
      </div>
      <Treds/>

      <div className="flex items-center justify-between mt-[30px]">
        <ul className='w-[48%] bg-white   pt-[32px] pb-[8px] border border-[#DFE0EB] rounded-[16px]' >
          <li className='flex items-center justify-between px-[32px] mb-[16px]'>
            <div className="">
              <h2 className='font-bold text-[19px] text-[#252733] mb-[8px] '>Unresolved tickets</h2>
              <p className='font-semibold text-[12px] '>Group: <span className='leading-[16px]'>Support</span></p>
            </div>
            <a className='font-semibold text-[14px] text-[#3751FF]' href='#'>View details</a>
          </li>

          {tableList.map(item => <TicketsTable key={item.id} item={item} />)}
        </ul>
        <div className="w-[48%]  pt-[32px] bg-white border-[1px] border-[#DFE0EB] rounded-[8px]">
          <Form/>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Overview
