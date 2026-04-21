import React from 'react'
import TredsItem from './TredsItem'

function Treds() {
    const tredsNum = [
        {
        id:1,
        title:"Resolved",
        number:"449"
        },
        {
        id:2,
        title:"Received",
        number:"426"
        },
        {
        id:3,
        title:"Average first response time",
        number:"33m"
        },
        {
        id:4,
        title:"Average response time",
        number:"3h 8m"
        },
        {
        id:5,
        title:"Resolution within SLA",
        number:"94%"
        }
    ]

  return (
    <div className="flex items-start bg-white border border-[#DFE0EB] rounded-[16px] mt-[30px]">
        <div className="w-[75%] flex items-end pb-[400px] justify-between pt-[32px] px-[32px]">
          <div>
            <p className='font-bold text-[19px] leading-[23px] pb-[8px] '>Today’s trends</p>
            <span className='font-normal text-[12px] leading-[16px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</span>
          </div>
          <div className="flex items-center gap-[32px]">
            <p className='font-semibold flex text-[12px] leading-[15px] text-[#9FA2B4]'>
              <span className='w-[16px] h-[2px] my-1.5 mr-2 bg-[#3751FF]'></span>
              Today
            </p>
            <p className='flex font-semibold text-[12px] leading-[15px] text-[#9FA2B4]'>
              <span className='w-[16px] h-[2px] my-1.5 mr-2 bg-[#DFE0EB]'></span>
              Yesterday
            </p>
          </div>
        </div>

        <div className="w-[25%]">
            {tredsNum.map(item => <TredsItem key={item.id} item={item} />)}
        </div>
    </div>
  )
}

export default Treds
