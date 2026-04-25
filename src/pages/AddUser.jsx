import React, { useContext } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

function AddUser() {
  const navigate = useNavigate()
  const options = ['LOW', 'NORMAL', 'HIGH']
  const {setUser} = useContext(Context)

  function handleSubmit(e){
    e.preventDefault()
    const data = {
      id:crypto.randomUUID(),
      detail:e.target.details.value,
      name:e.target.name.value,
      date:e.target.date.value,
      priority:e.target.priority.value
    }
    
    setUser(prev => [...prev, data])
    setTimeout(() => {
      navigate(-1)
    }, 500);

  }
  return (
    <form onSubmit={handleSubmit} className='w-full border border-[#DFE0EB] rounded-[16px] bg-white mt-[54px]'>
      <div className="pt-[32px] px-[32px] flex items-center justify-between mb-5">
        <button className='border-2 p-2 px-6 rounded-lg bg-white border-[#DFE0EB] text-lg text-[#252733] cursor-pointer' onClick={() => navigate(-1)}>Back</button>
        <Button type={'submit'} title={'Add Users'} exrtaStyle={'px-5 border-2'}/>
      </div>


      <div className='w-full flex items-start gap-6 justify-between pt-[32px] px-[32px]'>
        <div className="w-[95%] flex flex-col">
          <input className='border w-full p-3 rounded-xl outline-none mb-5 duration-300 focus:shadow-md focus:shadow-[#DFE0EB]' type="text" placeholder='Enter Ticket details' name='details' required autoComplete='off' />
          <input className='border w-full p-3 rounded-xl outline-none mb-5 duration-300 focus:shadow-md focus:shadow-[#DFE0EB]' type="text" placeholder='Enter Your Name' name='name' required autoComplete='off' /> 
        </div>
        <div className="w-[95%] flex flex-col">
          <input className='border w-full p-3 rounded-xl outline-none mb-5 duration-300 focus:shadow-md focus:shadow-[#DFE0EB]' type="date" placeholder='Enter Date' name='date' required  />
          <select className='border w-full p-3 rounded-xl outline-none mb-5 duration-300 focus:shadow-md focus:shadow-[#DFE0EB]' name='priority' required>
            {options.map((item, index) => <option value={index+1} key={index} >{item}</option>)}
          </select>
        </div>
        
      </div>
    </form>
  )
}

export default AddUser
