import React from 'react'
import NumItem from '../components/NumItem'
import Treds from '../components/Treds'
import TicketsTable from '../components/ticketsTable'


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

  return (
    <div>
      <div className="flex items-center justify-between mt-[54px]">
        {numData.map(item => <NumItem key={item.id} item={item}/>)}
      </div>
      <Treds/>
      <div className="flex items-center justify-between mt-[30px]">
        <TicketsTable/>
      </div>
    </div>
  )
}

export default Overview
