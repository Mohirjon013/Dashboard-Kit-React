import React, { useContext } from 'react'
import { Checked } from '../assets/images/icons'
import { Context } from '../context/Context'

function List() {
    const {todo, deleteTodo} = useContext(Context)
  return (
    <ul className='h-[160px] overflow-y-scroll '>
        {todo.length ? todo.map((item, index) => (
            <li key={index} className="flex items-center justify-between border-b-[1px] border-b-[#DFE0EB] px-[32px]">
                <div className="flex items-center gap-4">
                    <div>
                        <button className={`cursor-pointer w-[20px] rounded-full h-[20px] border-[2px] border-[#C5C7CD] `}>
                            <Checked/>
                        </button>
                    </div>
                            
                    <p className={`py-[20px] font-semibold text-[14px] leading-[20px] text-[#252733]`}>{item.title}</p>
                </div>
                <button onClick={() => deleteTodo(item.id)} className='w-[78px] font-bold text-[15px] leading-[13px] bg-red-500 py-[8px] text-white rounded-[8px] hover:scale-[1.3] duration-300 cursor-pointer'>delete</button>
            </li>
        )) : <li className='w-full  text-center py-[68px]'><p className='text-[25px]'>there is no task </p></li>}
    </ul>
  )
}

export default List
