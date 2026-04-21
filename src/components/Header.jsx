import React, { useContext } from 'react'
import { Context } from '../context/Context'
import searchIcon from'../assets/images/search-icon.svg'
import noticeIcon from'../assets/images/notice.svg'
import personImg from'../assets/images/person-img.png'



function Header() {
   
    const {path} = useContext(Context)
    
    
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-[24px] leading-[30px] font-bold'>{path}</h2> 
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[24px]">
                        <img src={searchIcon} alt="search-icon" width={16} height={16} />
                        <img src={noticeIcon} alt="search-icon" width={16} height={16} />
                    </div>
                    <span className='bg-[#DFE0EB] w-[1px] h-[32px] block mx-[32px]'></span>
                    <div className="flex items-center gap-[14px]">
                        <p className='font-semibold text-[14px] leading-4 text-[#252733]'>Jones Ferdinand</p>
                        <img src={personImg} alt="person-img" width={44} height={44} />
                    </div>
                </div>
            </div>
        </>

    )
} 

export default Header
