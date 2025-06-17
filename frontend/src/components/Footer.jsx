import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm pb-0 md:pb-10'>
        {/*-----------LeftSection--------------*/}
        <div>
          <img
            className='mb-2 w-25 p-0'
            src={assets.XMedikaLogo1}
            alt=''
            style={{ width: '100px', height: 'auto' }}
          />
          <p className='w-full md:w-2/3 text-gray-600 leading-5 mt-2 pb-10'>
            <strong>Welcome to our website !</strong> <br />
            We are dedicated to providing the best service possible.Our team is always there for
          </p>
        </div>

        {/*-----------CenterSection--------------*/}
        <div>
          <p className='text-xl font-medium mb-5'>
            <strong>COMPANY</strong>
          </p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold' : ''}>
              <li className='cursor-pointer hover:text-black'>Home</li>
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'font-bold' : ''}>
              <li className='cursor-pointer hover:text-black'>About us</li>
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-bold' : ''}>
              <li className='cursor-pointer hover:text-black'>Contact us</li>
            </NavLink>
          </ul>
        </div>

        {/*-----------RightSection--------------*/}
        <div>
          <p className='text-xl font-medium mb-5'>
            <strong>GET IN TOUCH</strong>
          </p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+38977-447-774</li>
            <li>kolevska.sandra@uklo.edu.mk</li>
          </ul>
        </div>
      </div>

      {/*-----------Copyright Text--------------*/}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2025 @ Sandra Kolevska - All Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

