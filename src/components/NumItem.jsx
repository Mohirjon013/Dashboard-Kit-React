import React from 'react'

function NumItem({item}) {
    return (
        <div className=''>
            <div className="w-[258px] py-[24px] text-center border-[1px] rounded-[8px] border-[#DFE0EB]">
                <h2 className='font-bold text-[19px] leading-[23px] pb-[12px] text-[#9FA2B4]'>{item.title}</h2>
                <strong className='font-bold text-[40px] leading-[50px] text-[#252733]'>{item.number}</strong>
            </div>
        </div>
    )
}

export default NumItem
