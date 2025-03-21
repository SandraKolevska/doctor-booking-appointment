import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
    <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    
                    {/*-----------LeftSection--------------*/}
                    <div>
                            <img className='mb-2 w-40 p-25' src={assets.FilipLogo} alt="" />
                            <p className='w-full md:w-2/3 text-gray-600 leading-5 mt-2'><strong>Crafted with precision for healthcare heroes. Bridging the gap between doctors and patients, ensuring smooth and efficient appointment scheduling for a healthier tomorrow.</strong></p>
                    </div>

                    {/*-----------CenterSection--------------*/}
                     <div>
                            <p className='text-xl font-medium mb-5'><strong>COMPANY</strong></p>
                            <ul className='flex flex-col gap-2 text-gray-600' >
                                    <li><strong>Home</strong></li>
                                    <li><strong>About us</strong></li>
                                    <li><strong>Contact us</strong></li>
                                    <li><strong>Privacy Policy</strong></li>
                            </ul>
                     </div>

                        {/*-----------RightSection--------------*/}
                    <div>
                            <p className='text-xl font-medium mb-5'><strong>GET IN TOUCH</strong></p>
                            <ul className='flex flex-col gap-2 text-gray-600'>
                                    <li><strong>+38972-223-350</strong></li>
                                    <li><strong>filipkuzmanoski386@gmail.com</strong></li>
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