import React, { useContext } from 'react'
import doneSVg from '../assets/images/done-icon.svg'
import IsDoneNotSvg from '../assets/images/is-not-done.svg'
import { Context } from '../context/Context'

function List() {
    const {todo, deleteTodo, isCompleteFunc} = useContext(Context)

    console.log(todo);
    
  return (
    <ul className='h-[160px] overflow-y-scroll '>
        {todo.length ? todo.map((item, index) => (
            <li key={index} className="flex items-center justify-between border-b-[1px] border-b-[#DFE0EB] px-[32px]">
                <div className="flex items-center gap-4">
                    <div className='mt-1'>
                        {
                            item.isComplete ? <button onClick={() => isCompleteFunc(item.id)} className={`cursor-pointer`}><img src={IsDoneNotSvg} alt="done-img" width={30} height={30}/></button> : <button onClick={() => isCompleteFunc(item.id)} className={`cursor-pointer`}><img src={doneSVg} alt="done-img" width={30} height={30}/></button>
                        }
                    </div>
                    <div className="flex items-center gap-1">
                        <span className='text-2xl font-bold mb-1'>{index + 1}.</span>
                        <p className={`py-[20px] font-semibold text-[18px] leading-[20px] text-[#252733]`}>{item.title}</p>
                    </div>
                </div>
                <button onClick={() => deleteTodo(item.id)} className='w-[78px] font-bold text-[15px] leading-[13px] bg-red-500 py-[8px] text-white rounded-[8px] hover:scale-[1.3] duration-300 cursor-pointer'>delete</button>
            </li>
        )) : <li className='w-full  text-center py-[68px]'><p className='text-[25px]'>there is no task </p></li>}
    </ul>
  )
}

export default List
