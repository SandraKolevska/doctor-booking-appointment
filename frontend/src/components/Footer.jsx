import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
        <div className='md:mx-10'>
                        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm pb-0 md:pb-10'>
                                        
                                        {/*-----------LeftSection--------------*/}
                                        <div>
                                                        <img className='mb-2 w-25 p-0' src={assets.FilipLogo} alt="" style={{ width: '100px', height: 'auto' }} />
                                                        <p className='w-full md:w-2/3 text-gray-600 leading-5 mt-2 pb-10'>
                                                           <strong>Welcome to our website !</strong> <br></br> We are dedicated to providing the best service possible.Our team is always there for
                                                        </p>
                                        </div>

                                        {/*-----------CenterSection--------------*/}
                                         <div>
                                                        <p className='text-xl font-medium mb-5'><strong>COMPANY</strong></p>
                                                        <ul className='flex flex-col gap-2 text-gray-600' >
                                                                        <li>Home</li>
                                                                        <li>About us</li>
                                                                        <li>Contact us</li>
                                                                        <li>Privacy Policy</li>
                                                        </ul>
                                         </div>

                                                {/*-----------RightSection--------------*/}
                                        <div>
                                                        <p className='text-xl font-medium mb-5'><strong>GET IN TOUCH</strong></p>
                                                        <ul className='flex flex-col gap-2 text-gray-600'>
                                                                        <li>+38972-223-350</li>
                                                                        <li>filipkuzmanoski386@gmail.com</li>
                                                        </ul>
                                        </div>
                        </div>

                                         {/*-----------Copyright Text--------------*/}
                        <div>
                                        <hr/>
                                         <p className='py-5 text-sm text-center'>Copyright 2025 @ Filip Kuzmanoski - All Reserved</p>
                        </div>
        </div>
)
}

export default Footer