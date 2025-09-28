import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function ServicePage() {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
            {/* header */}
            <div className="servicePage-bg">
                {/* top Content */}
                <div className="absolute inset-0 pt-5 sm:pt-10 xl:pt-8 px-4 sm:px-5 md:px-10 flex justify-between z-20">
                    {/* logo */}
                    <div className='bg-white w-10 sm:w-16 h-10 sm:h-16 rounded-full flex justify-center items-center -mt-2 sm:-mt-5'>
                        <img src="/images/logo.png" alt="Logo" className='w-8 sm:w-14 h-6 sm:h-12 rounded-full' />
                    </div>
                    {/* texts */}
                    <div className={`font-semibold cursor-pointer text-xs hidden sm:flex md:gap-10 lg:gap-15 z-10`}>
                        <span className={`text-gray-400 text-font`}>Home</span>
                        <span className={`text-gray-400 text-font`}><a href='#about'>About Us</a></span>
                        <span className={`text-white text-font`}><a href='#service'>Services</a></span>
                    </div>
                    {/* contact */}
                    <a href="#contact">
                        <div className='text-xs cursor-pointer font-bold'>
                            <span className='hidden sm:block orange px-5 py-2 contact-round text-font'>Contact Us</span>
                            {/* mobile menu */}
                            <div className='block sm:hidden'>
                                <HiOutlineMenu color='white' size={30} onClick={handleMenu} />
                            </div>
                        </div>
                    </a>
                </div>

                {/* page texts */}

                <div className='absolute inset-0 flex flex-col justify-center items-center mx-8 sm:mx-28 text-white -mt-52 sm:-mt-96 xl:-mt-7'>
                    {/* big text */}
                    <div>
                        <p className='text-font text-4xl tracking-wide leading-14 sm:leading-16 sm:text-3xl xl:text-[42px] text-center font-medium sm:font-semibold'>Your trusted partner in real estate, auto export, and logistics</p>
                    </div>
                    {/* small text */}
                    <div className='mt-3 mb-10'>
                        <p className='text-font text-gray-400 font-medium text-center'>Global reach, reliable service, and a commitment to excellence.</p>
                    </div>
                    {/*  explore service button */}


                    {/* <div className='text-lg sm:text-xs cursor-pointer font-semibold text-black'> */}
                    <button className='orange px-8 sm:px-6 py-4 sm:py-2.5 contact-round text-font pointer-events-auto'>Explore Services</button>
                    {/* </div> */}
                </div>
            </div>

            {/* mobile menu view */}
            {
                menu && (
                    <div className="fixed inset-0 bg-black/90 z-30 flex flex-col justify-center items-center text-white">
                        {/* cancel */}
                        <div className="absolute top-5 right-5">
                            <AiOutlineClose size={40} onClick={handleMenu} />
                        </div>

                        {/* menu texts */}
                        <div className="flex flex-col items-center gap-20 font-semibold cursor-pointer text-3xl">
                            <span onClick={handleMenu}>Home</span>
                            <span onClick={handleMenu}><a href='#about'>About Us</a></span>
                            <span onClick={handleMenu}><a href='#service'>Services</a></span>
                        </div>

                        {/* contact */}
                        <a href="#contact">
                            <div className="flex justify-center text-2xl cursor-pointer font-bold mt-32">
                                <span onClick={handleMenu} className="orange px-8 py-3 contact-round text-white">Contact Us</span>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    );
}
