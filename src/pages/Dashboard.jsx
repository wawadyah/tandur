import React from 'react'
import Navbar from '../components/Dashboard/Navbar'
import FieldDashboard from '../components/Dashboard/FieldDashboard'
import Product from './Product'
import Benefit from './Benefit'
import Contact from './Contact'
import Description from './Description'
import Talk from './Talk'

function Dashboard() {
  return (
    <div >
      <div className='px-16'>
      <Navbar  />
      </div>
      <div className='px-16 '>
      
      <FieldDashboard />
      <Product />
      </div>
      <Benefit />
      <Contact />
      <div className='px-16'>
      <Description />
      </div>
      <Talk />
    </div>
  )
}

export default Dashboard
