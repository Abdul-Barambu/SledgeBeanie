import React from 'react'
import Logo from '../images/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='footer-bg'>
                {/* footer info */}
                <div className='sm:grid grid-cols-3 pt-10 pb-10 sm:pb-20'>
                    {/* first */}
                    <div className='px-4'>
                        {/* image and name */}
                        <div className='sm:flex items-center gap-6'>
                            <div className='bg-white w-16 sm:w-10 lg:w-20 h-16 sm:h-10 lg:h-20 rounded-full flex justify-center items-center -mt-2 sm:-mt-5'>
                                <img src={Logo} alt="logo" className='w-14 sm:w-8 lg:w-16 h-10 sm:h-6 lg:h-14 rounded-full' />
                            </div>
                            <div className='mb-4'>
                                <p className='text-white font-semibold text-font text-4xl sm:text-lg lg:text-3xl text-left tracking-wide mt-5 block sm:hidden'>Sledge Beanie</p>
                                <p className='hidden sm:block text-white font-semibold text-font text-lg lg:text-3xl'>Sledge</p>
                                <p className='hidden sm:block text-white font-semibold text-font text-lg lg:text-3xl'>Beanie</p>
                            </div>
                        </div>
                        {/* small text */}
                        <div className='mt-4 sm:mt-2'>
                            <p className='text-white font-normal sm:font-medium text-font text-left sm:text-xs lg:text-lg'>Your Trusted Partner In Real Estate, Auto Export And Logistics</p>
                        </div>
                        {/* socails */}
                        <div className='mt-3 sm:mt-4 flex gap-4'>
                            <a href="https://wa.me/+2348031816006" target='_blank' rel="noopener noreferrer">
                                <div className='bg-white w-9 h-9 flex justify-center items-center rounded-md cursor-pointer text-white social-icons'>
                                    <FaWhatsapp size={20} color='black' />
                                </div>
                            </a>
                            <a href="https://instagram.com/lmndabo" target='_blank' rel="noopener noreferrer">
                                <div className='bg-white w-9 h-9 flex justify-center items-center rounded-md cursor-pointer text-white social-icons'>
                                    <FaInstagram size={20} color='black' />
                                </div>
                            </a>
                            <a href="https://twitter.com/lmndabo" target='_blank' rel="noopener noreferrer">
                                <div className='bg-white w-9 h-9 flex justify-center items-center rounded-md cursor-pointer text-white social-icons'>
                                    <FaXTwitter size={20} color='black' />
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* middle */}
                    <div className='flex mt-10 sm:mt-0'>
                        <hr className="hidden sm:block w-px h-56 bg-gray-400 mx-4 border-0" />
                        <div className='px-4 sm:px-0'>
                            <div className='mb-4'>
                                <h1 className='text-white text-font text-xl sm:text-lg lg:text-2xl font-semibold tracking-wide'>Quick Links</h1>
                            </div>
                            <div className='text-left'>
                                <p className="text-white text-font text-[13px] sm:text-xs lg:text-sm  font-normal sm:font-medium mb-3 tracking-wide">Home</p>
                                <p className="text-white text-font text-[13px] sm:text-xs lg:text-sm  font-normal sm:font-medium mb-3 tracking-wide">About us</p>
                                <p className="text-white text-font text-[13px] sm:text-xs lg:text-sm  font-normal sm:font-medium mb-3 tracking-wide">Service</p>
                                <p className="text-white text-font text-[13px] sm:text-xs lg:text-sm  font-normal sm:font-medium mb-3 tracking-wide">Contact</p>
                            </div>
                        </div>
                    </div>
                    {/* left */}
                    <div className='flex mt-10 sm:mt-0'>
                        <hr className="hidden sm:block w-px h-56 bg-gray-400 mx-4 border-0" />
                        <div className='px-4 sm:px-0'>
                            <div className='mb-2 text-left'>
                                <h1 className='text-white text-font text-xl sm:text-sm lg:text-2xl font-semibold tracking-wide'>Contact Address</h1>
                            </div>
                            {/* US */}
                            <div className='text-left'>
                                <p className="text-white text-font text-[13px] sm:text-[10px] lg:text-xs font-normal tracking-wide mb-1">US Office:</p>
                                <p className="text-white text-font text-[13px] sm:text-[10px] lg:text-xs font-normal mb-2 tracking-wide">Sledge Beanie Allied Service LLC</p>
                                <p className="text-white text-font text-[13px] sm:text-[10px] lg:text-xs font-normal tracking-wide mb-0">102A Stage Run Loop, Deadwood, <br />South Dakota, 57732.</p>
                            </div>
                            {/* Nigeria */}
                            <div className='text-left mt-4'>
                                <p className="text-white text-font text-[13px] sm:text-[10px] lg:text-xs font-normal tracking-wide mb-1">Nigeria Operations Contact<b> :</b></p>
                                <p className="text-white text-font text-[13px] sm:text-[10px] lg:text-xs font-normal mb-2 tracking-wide">Sledge Beanie Allied Service LTD</p>
                                <p className="text-white text-font text-[13px] sm:text-[10px] lg:text-xs font-normal tracking-wide mb-0">Suite CO2, SHM Complex Mabushi, <br />Abuja, Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div>
                    <hr className='mx-6' />
                    <p className='text-white py-3 text-font text-[10px] sm:text-xs font-light'>2025 Sledge Beanie Allied Service. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
