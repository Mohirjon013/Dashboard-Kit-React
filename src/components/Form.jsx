import React, { useContext, useRef } from 'react'
import plusIcon from '../assets/images/plus.svg'
import { Context } from '../context/Context'

function Form() {
    const {setTodo, todo} = useContext(Context)
    const inputValue = useRef("")
    
    function handleSubmitBtn(e){
        e.preventDefault()
        const data = {
            id:crypto.randomUUID(),
            title:inputValue.current.value,
            isComplete:false
        }
        
        setTodo(prev => [...prev, data])
        inputValue.current.value = ""
    }
  return (
    <div>
        <div className='flex justify-between mb-[16px] px-[32px]'>
            <div>
              <p className='font-bold text-[19px] leading-[23px] pb-[8px] text-[#252733]'>Tasks</p>
              <p className='font-semibold text-[12px] leading-[15px] text-[#9FA2B4]'>Today</p>
            </div>
            <p className='font-semibold text-[14px] leading-[20px] text-[#3751FF]'>View all</p>
        </div>

        <form onSubmit={handleSubmitBtn} className='px-[32px] flex items-center justify-between'>
            <input className='w-[85%] text-2xl py-[20px] outline-none space-x-8 placeholder:text-lg' ref={inputValue} type="text" placeholder='Create new task' required/>

            <button type='submit' className='w-[8%] cursor-pointer py-[20px]'>
                <div className="w-[44px] mx-auto py-[10px] bg-[#F0F1F7] rounded-[8px] hover:scale-[1.3] duration-300">
                    <img className='mx-auto' src={plusIcon} alt="plus- img" width={20} height={20} />
                </div>
            </button>
        </form>
    </div>
  )
}

export default Form
