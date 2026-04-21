import React from 'react'

function TredsItem({item}) {
    return (
        <div className=" border-l-[1px] border-l-[#DFE0EB] border-b-[1px] border-b-[#DFE0EB] px-[32px] pt-[32px] pb-[24px] text-center">
            <h2 className='font-semibold text-[16px] text-[#9FA2B4] mb-[6px]'>{item.title}</h2>
            <strong className='font-bold text-[24px] text-[#252733]'>{item.number}</strong>
        </div>
    )
}

export default TredsItem
