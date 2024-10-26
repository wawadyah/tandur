import React from 'react'
import Navbar from '../components/Dashboard/Navbar'
import FieldDashboard from '../components/Dashboard/FieldDashboard'
import Product from './Product'
import Benefit from './Benefit'
import Contact from './Contact'
import Description from './Description'

function Dashboard() {
  return (
    <div >
      <div className='px-16 '>
      <Navbar  />
      <FieldDashboard />
      <Product />
      </div>
      <Benefit />
      <Contact />
      <div className='px-16'>
      <Description />
      </div>
    </div>
  )
}

export default Dashboard
