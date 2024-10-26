import React from 'react'
import NavbarBenefit from '../components/Benefit/NavbarBenefit'
import BenefitBody from '../components/Benefit/BenefitBody'
import BenefitCard from '../components/Benefit/BenefitCard'

function Benefit() {
  return (
    <div className='bg-[#2A2A2A] w-full py-20 px-16'>
      <NavbarBenefit />
      <BenefitBody />
      <BenefitCard />
    </div>
  )
}

export default Benefit
