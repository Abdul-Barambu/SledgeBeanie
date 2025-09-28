import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Alamin from '../images/Alamin.jpg'

const Contact = () => {
    return (
        <div>
            <div className='mb-10'>
                <p className='text-font text-3xl font-medium text-center'>Contact us</p>
            </div>
            {/* infos */}
            <div className='sm:grid grid-cols-2 sm:bg-white sm:p-5 rounded-2xl sm:shadow-2xl'>
                {/* contact */}
                <div className='service-bg h-[470px] sm:h-[500px] w-full rounded-3xl px-5 py-7 shadow-xl mx-auto'>
                    {/* text */}
                    <div className='mt-1 mb-14 mx-4 text-left'>
                        <p className='text-white text-font font-semibold text-2xl tracking-wide'>Contact Information</p>
                        <p className='text-gray-400 text-font text-sm tracking-wider mt-1'>Say something to start a live chat!</p>
                    </div>
                    {/* contact infos */}
                    <div>
                        {/* phone */}
                        <div className='text-white text-font tracking-wide mx-4 font-normal text-sm lg:text-[16px] mt-5 flex items-center gap-5'>
                            <PiPhoneCallFill size={20} />
                            <span>+2348031816006</span>
                        </div>
                        {/* email */}
                        <div className='text-white text-font tracking-wide mx-4 font-normal text-sm lg:text-[16px] mt-10 flex items-center gap-5'>
                            <IoMdMail size={20} />
                            <span>info@sledgebeanie.com</span>
                        </div>
                        {/* phone */}
                        <div className='text-white text-font tracking-wide mx-4 font-normal text-sm lg:text-[16px] mt-10 flex items-center gap-5'>
                            <FaWhatsapp size={20} />
                            <span>+2348031816006</span>
                        </div>
                    </div>

                    {/* socials */}
                    <div className='mt-24 sm:mt-32 flex gap-4 mx-4'>
                        <a href="https://wa.me/+2348031816006" target='_blank' rel="noopener noreferrer">
                            <div className='orange w-7 h-7 flex justify-center items-center rounded-full cursor-pointer text-white social-icons'>
                                <FaWhatsapp size={15} />
                            </div>
                        </a>
                        <a href="https://instagram.com/lmndabo" target='_blank' rel="noopener noreferrer">
                            <div className='orange w-7 h-7 flex justify-center items-center rounded-full cursor-pointer text-white social-icons'>
                                <FaInstagram size={15} />
                            </div>
                        </a>
                        <a href="https://twitter.com/lmndabo" target='_blank' rel="noopener noreferrer">
                            <div className='orange w-7 h-7 flex justify-center items-center rounded-full cursor-pointer text-white social-icons'>
                                <FaXTwitter size={15} />
                            </div>
                        </a>
                    </div>
                </div>
                {/* logo */}
                <div className='hidden sm:block'>
                    <div className='py-16 px-14 sm:px-5 lg:px-16'>
                        <img src={Alamin} alt="Al-amin Dabo" className='rounded-full border-r-5 border-b-2 border-black shadow-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
