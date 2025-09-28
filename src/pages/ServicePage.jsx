import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../images/logo.png';
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Estate from '../images/house.png';
import Export from '../images/auto.png';
import Truck from '../images/truck.png';
import Footer from "../components/Footer";

export default function ServicePage() {

    const [menu, setMenu] = useState(false);
    const history = useHistory();

    const handleService = () => {
        history.push('/')
    }


    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div>
            {/* header */}
            <div className="servicePage-bg">
                {/* top Content */}
                <div className="pt-5 sm:pt-10 xl:pt-8 px-4 sm:px-5 md:px-10 flex justify-between">
                    {/* logo */}
                    <div className='bg-white w-10 sm:w-16 h-10 sm:h-16 rounded-full flex justify-center items-center -mt-2 sm:-mt-5 mb-2'>
                        <img src={Logo} alt="Logo" className='w-8 sm:w-14 h-6 sm:h-12 rounded-full' />
                    </div>
                    {/* texts */}
                    <div className={`font-semibold cursor-pointer text-xs hidden sm:flex md:gap-10 lg:gap-15 z-10`}>
                        <span className={`text-gray-400 text-font`}>Home</span>
                        <span className={`text-gray-400 text-font`}><a href='#about'>About Us</a></span>
                        <span className={`text-white text-font`}><a href='#service'>Services</a></span>
                    </div>
                    {/* contact */}
                    <a href="#footer">
                        <div className='text-xs cursor-pointer font-bold'>
                            <span className='hidden sm:block orange px-5 py-2 contact-round text-font'>Contact Us</span>
                            {/* mobile menu */}
                        </div>
                    </a>
                    <div className='block sm:hidden'>
                        <HiOutlineMenu color='white' size={30} onClick={handleMenu} />
                    </div>
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
                        <a href="#footer">
                            <div className="flex justify-center text-2xl cursor-pointer font-bold mt-32">
                                <span onClick={handleMenu} className="orange px-8 py-3 contact-round text-white">Contact Us</span>
                            </div>
                        </a>
                    </div>
                )
            }

            <div className="mt-14 sm:mx-10">
                {/* text and back */}
                <div className="sm:grid grid-cols-3">
                    {/* back */}
                    <div onClick={handleService} className="ml-4 sm:ml-0 mb-5 sm:mb-0 bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                        <IoIosArrowBack size={25} color="black" />
                    </div>
                    <div className="mx-10 sm:mx-0">
                        <p className="text-font text-3xl font-medium leading-snug">Our Excellent Services</p>
                    </div>
                </div>
            </div>

            {/* services */}
            <div>
                {/* real estate */}
                <div className='my-10 lg:my-14 mx-0 sm:mx-7 lg:mx-16 border-2 border-gray-100 sm:grid grid-cols-2'>
                    {/* image */}
                    <div className='px-14 sm:px-5 lg:px-16'>
                        <img src={Estate} alt="House" className='' />
                    </div>
                    {/* texts */}
                    <div className='pt-1 sm:pt-10 pb-10 sm:pr-8 lg:pr-16 px-5 sm:px-0'>
                        {/* text */}
                        <div className='mb-1 mt-4 text-left'>
                            <span className='text-font font-semibold text-[22px] sm:text-[20px] lg:text-[26px]'>Real Estate - Fix & Flip,
                                Retrofits, and Foreclosure Analysis</span>
                        </div>
                        {/* info text */}
                        <div>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>Sledge
                                Beanie leverages civil engineering and construction expertise to identify undervalued residential properties,
                                renovate them, and resell for profit.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Fix & Flip:
                                Acquiring distressed or outdated homes at below-market value, carrying out cost-efficient renovations (structural fixes,
                                cosmetic upgrades, energy retrofits), and reselling at market-aligned pricing.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Retrofits:
                                Modernizing older buildings with updated electrical, plumbing, and energy systems to increase value and meet current
                                housing codes.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Foreclosure
                                analysis: Studying foreclosure listings to identify opportunities with clear titles, minimal legal risk, and strong resale margins.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'><b className="text-black">Business Value: </b> Generates
                                high returns on capital, builds a property portfolio, and offers opportunities for rental conversions if flipping margins are
                                compressed.
                            </p>
                        </div>
                    </div>
                </div>
                {/* export */}
                <div className='my-10 lg:my-14 mx-0 sm:mx-7 lg:mx-16 border-2 border-gray-100 sm:grid grid-cols-2'>
                    {/* image */}
                    <div className='px-14 sm:px-5 lg:px-16'>
                        <img src={Export} alt="Export" className='sm:h-3/4 mt-8' />
                    </div>
                    {/* texts */}
                    <div className='pt-1 pb-10 sm:pr-8 lg:pr-16 px-5 sm:px-0'>
                        {/* text */}
                        <div className='mb-1 mt-4 text-left'>
                            <span className='text-font font-semibold text-[22px] sm:text-[20px] lg:text-[26px]'>Auto Auctions & Export</span>
                        </div>
                        {/* info text */}
                        <div>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>Focused on vehicle
                                acquisition in U.S. auto auctions (Copart, IAAI, Manheim) and exporting to markets in Africa (Nigeria, Benin, Ghana, etc.) and beyond.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>  • Sourcing: Salvage, nearly new,
                                or repossessed cars bought below retail market price.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Export Logistics: Handling
                                container shipping, RORO (Roll-On/Roll-Off), customs clearance, and delivery to West African ports like Cotonou or Lagos.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Value Add: Bundling vehicles
                                with construction materials or consumer goods in containers to maximize CBM usage and reduce per-unit shipping cost.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'><b className="text-black">Business Value: </b>
                                Consistent demand in emerging markets, arbitrage between U.S. prices and African resale values, and synergy with logistics/trucking
                                expertise.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Logistics */}
                <div className='my-10 lg:my-14 mx-0 sm:mx-7 lg:mx-16 border-2 border-gray-100 sm:grid grid-cols-2'>
                    {/* image */}
                    <div className='px-14 sm:px-5 lg:px-16'>
                        <img src={Truck} alt="House" className='sm:h-3/4 mt-8' />
                    </div>
                    {/* texts */}
                    <div className='pt-1 pb-10 sm:pr-8 lg:pr-16 px-5 sm:px-0'>
                        {/* text */}
                        <div className='mb-1 mt-4 text-left'>
                            <span className='text-font font-semibold text-[22px] sm:text-[20px] lg:text-[26px]'>Trucking & Logistics</span>
                        </div>
                        {/* info text */}
                        <div>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>A service arm
                                dedicated to ground freight, drayage (port to warehouse), and last-mile delivery.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Domestic U.S. Trucking:
                                Linking foreign freight forwarders and shippers to U.S. truckers via load boards (DAT, Truckstop.com) and direct contracts.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>  • Container Drayage: Moving cargo
                                containers from ports (Houston, Newark, Savannah, etc.) to warehouses or distribution hubs.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'> • Global Supply Chain Support:
                                Coordinating shipments, warehousing, procurement, and end-to-end delivery solutions for clients.
                            </p>
                            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'><b className="text-black">Business Value: </b> Reliable income flow from logistics contracts, scalability via owner-operator partnerships, and alignment with auto export and import supply chain services.x
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div id="footer">
                <Footer />
            </div>

        </div >
    );
}
