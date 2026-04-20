import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Agents, Articles, Contacts, Ideas, NotFound, Overview, Settings, Subscription, Tickets } from '../pages'

function Routers() {
  return (
    <div className='w-[80%]'>
        <Routes>
          <Route path='/' element={<Overview/>} />
          <Route path='/tickets' element={<Tickets/>} />
          <Route path='/ideas' element={<Ideas/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/agents' element={<Agents/>} />
          <Route path='/articles' element={<Articles/>} />

          <Route path='/settings' element={<Settings/>} />
          <Route path='/subscription' element={<Subscription/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default Routers
