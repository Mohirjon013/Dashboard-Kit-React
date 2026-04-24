import React, { useContext } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

function AddUser() {
  const navigate = useNavigate()
  const options = ['LOW', 'NORMAL', 'HIGH']
  const {user, setUser} = useContext(Context)

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
        <span onClick={() => navigate(-1)}>Back</span>
        <h3 className='font-semibold text-[19px] text-[#252733]'>Users</h3>
        <Button type={'Submit'} title={'Add Users'} exrtaStyle={'px-5 border-2'}/>
      </div>

      

      <div>
        <input className='border' type="text" placeholder='Enter Ticket details' name='details' required  />
        <input className='border' type="text" placeholder='Enter Your Name' name='name' required  /> 
        <input className='border' type="date" placeholder='Enter Date' name='date' required  />
        <select className='border p-3' name='priority'>
          {options.map((item, index) => <option value={index+1} key={index} >{item}</option>)}
        </select>
      </div>

    </form>
  )
}

export default AddUser
