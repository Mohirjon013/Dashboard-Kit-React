import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import Button from '../components/Button'

function SingleUser() {
  const {id} = useParams()
  const {user} = useContext(Context)
  const navigate = useNavigate()

  console.log(user);
  console.log(id);
  const finededObj = user.find(item => item.id === id)
    
  
  return (
    <div>
      <div className="pt-[32px] px-[32px] flex items-center justify-between mb-5">
        <span onClick={() => navigate(-1)} className='border'>Back</span>
        <h3 className='font-semibold text-[19px] text-[#252733]'>Users</h3>
        <Button onClick={() => navigate('update')} type={'button'} title={'Update user'} exrtaStyle={'px-5 border-2'}/>
      </div>

     
      
    </div>
  )
}

export default SingleUser
