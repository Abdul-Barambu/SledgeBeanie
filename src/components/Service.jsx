import React from 'react'
import { TbBuildingEstate } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { Slide } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Service = () => {

    const history = useHistory();

    const handleService = () => {
        history.push('/service')
    }

    return (
        <div>
            {/* service text */}
            <div className='text-center mb-7'>
                <span className='text-font text-3xl service-text font-medium'>Our Excellent Services</span>
            </div>
            {/* services */}
            <div className='mb-10 flex flex-col sm:flex-row justify-between gap-5 xl:gap-0'>

                <Slide direction='left' duration={1500} triggerOnce className='w-full sm:w-1/3 xl:w-1/4'>
                    {/* real estate */}
                    <div className='service-bg h-80 rounded-3xl px-5 py-7'>
                        {/* icon */}
                        <div className='bg-white w-9 h-9 flex justify-center items-center rounded-md'>
                            <TbBuildingEstate color='#2387C0' size={25} />
                        </div>
                        {/* text */}
                        <div className='mt-3 mb-5 text-left'>
                            <p className='text-white text-font font-semibold text-2xl tracking-wide'>Real Estate</p>
                            <p className='text-gray-400 text-font text-sm tracking-wider mt-1'>Transform property for your benefit</p>
                        </div>
                        {/* lists */}
                        <div className='text-white text-font tracking-wide mx-4 font-medium text-sm lg:text-[16px] text-left'>
                            <li>
                                <ul>Fix and flip investment</ul>
                            </li>
                            <li className='mt-2'>
                                <ul>Property development</ul>
                            </li>
                        </div>
                    </div>

                </Slide>

                <Slide direction='down' duration={1500} triggerOnce className='w-full sm:w-1/3 xl:w-1/4'>
                    {/* Auto export */}
                    <div className='service-bg h-80 rounded-3xl px-5 py-7'>
                        {/* icon */}
                        <div className='bg-white w-9 h-9 flex justify-center items-center rounded-md'>
                            <FaCarSide color='#2387C0' size={25} />
                        </div>
                        {/* text */}
                        <div className='mt-3 mb-5 text-left'>
                            <p className='text-white text-font font-semibold text-2xl tracking-wide'>Auto Export</p>
                            <p className='text-gray-400 text-font text-sm tracking-wider mt-1'>Trade cars with confidence</p>
                        </div>
                        {/* lists */}
                        <div className='text-white text-font tracking-wide mx-4 font-medium text-sm lg:text-[16px] text-left'>
                            <li>
                                <ul>Vehicle sourcing </ul>
                            </li>
                            <li className='mt-2'>
                                <ul>Container shipping to Africa.</ul>
                            </li>
                            <li className='mt-2'>
                                <ul>Auction & dealership partnerships.</ul>
                            </li>
                        </div>
                    </div>
                </Slide>
                {/* Logistics */}

                <Slide direction='right' duration={1500} triggerOnce className='w-full sm:w-1/3 xl:w-1/4'>
                    <div className='service-bg h-80 rounded-3xl px-5 py-7'>
                        {/* icon */}
                        <div className='bg-white w-9 h-9 flex justify-center items-center rounded-md'>
                            <MdOutlineStackedLineChart color='#2387C0' size={25} />
                        </div>
                        {/* text */}
                        <div className='mt-3 mb-5 text-left'>
                            <p className='text-white text-font font-semibold text-2xl tracking-wide'>Logistics</p>
                            <p className='text-gray-400 text-font text-sm tracking-wider mt-1'>Move goods with certainty</p>
                        </div>
                        {/* lists */}
                        <div className='text-white text-font tracking-wide mx-4 font-medium text-sm lg:text-[16px] text-left'>
                            <li>
                                <ul>Inland trucking</ul>
                            </li>
                            <li className='mt-2'>
                                <ul>Freight forwarding & clearing.</ul>
                            </li>
                            <li className='mt-2'>
                                <ul>Import/export support.</ul>
                            </li>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* button */}
            <div onClick={handleService} className='mx-auto mt-5 mb-10 text-lg sm:text-xs cursor-pointer font-semibold text-black orange px-8 sm:px-6 py-4 sm:py-2.5 contact-round w-full sm:w-60 text-center'>
                <span className='text-font'>See More Information</span>
            </div>
        </div>
    )
}

export default Service
