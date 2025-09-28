import React, { useState } from 'react'
import '../styles/Styles.css'
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineEye } from "react-icons/hi2";
import { MdOutlineHandshake } from "react-icons/md";
import { Slide } from 'react-awesome-reveal';
import Service from '../components/Service';
import Contact from '../components/Contact';
import homePage from '../images/homeImage.png'
import Logo from '../images/logo.png'
import Alamin from '../images/Alamin.jpg'
import Mission from '../images/Mission.jpg'
import Footer from '../components/Footer';

export default function HomePage() {

  const [clicked, setClicked] = useState("home");
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div>
      {/* top */}
      <div className={` relative`}>
        {/* Background image */}
        <img
          className="w-full h-[90vh] sm:h-screen object-cover"
          src={homePage}
          alt="Home"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* top Content */}
        <div className="absolute inset-0 pt-5 sm:pt-10 xl:pt-8 px-4 sm:px-5 md:px-10 flex justify-between z-20">
          {/* logo */}
          <div className='bg-white w-10 sm:w-16 h-10 sm:h-16 rounded-full flex justify-center items-center -mt-2 sm:-mt-5'>
            <img src={Logo} alt="Logo" className='w-8 sm:w-14 h-6 sm:h-12 rounded-full' />
          </div>
          {/* texts */}
          <div className={`font-semibold cursor-pointer text-xs hidden sm:flex gap-6 md:gap-10 lg:gap-15 z-10`}>
            <span onClick={() => setClicked("home")} className={`${clicked === "home" ? "text-white" : "text-gray-400"} text-font`}>Home</span>
            <span onClick={() => setClicked("about")} className={`${clicked === "about" ? "text-white" : "text-gray-400"} text-font`}><a href='#about'>About Us</a></span>
            <span onClick={() => setClicked("services")} className={`${clicked === "services" ? "text-white" : "text-gray-400"} text-font`}><a href='#service'>Services</a></span>
          </div>
          {/* contact */}
          <a href="#contact">
            <div className='text-xs cursor-pointer font-bold'>
              <span className='hidden sm:block orange px-5 py-2 contact-round text-font'>Contact Us</span>
            </div>
          </a>
          {/* mobile menu */}
          <div className='block sm:hidden'>
            <HiOutlineMenu color='white' size={30} onClick={handleMenu} />
          </div>
        </div>

        {/* page texts */}

        <div className='absolute inset-0 flex flex-col justify-center items-center mx-7 sm:mx-28 text-white -mt-52 sm:-mt-96 xl:-mt-7'>
          {/* big text */}
          <Slide direction='up' duration={1500} triggerOnce>
            <div className='mt-64 sm:mt-0'>
              <p className='text-font text-4xl tracking-wide leading-relaxed sm:leading-normal sm:text-3xl xl:text-[42px] text-center font-medium sm:font-semibold'>Your trusted partner in real estate, auto export, and logistics</p>
            </div>
            {/* small text */}
            <div className='mt-5 sm:mt-3 mb-20 sm:mb-10'>
              <p className='text-font text-gray-400 font-medium text-center leading-relaxed sm:leading-none'>Global reach, reliable service, and a commitment to excellence.</p>
            </div>
            {/*  explore service button */}
            <a href="#service">
              <div className='text-lg sm:text-xs cursor-pointer font-semibold text-black'>
                <span className='orange px-8 sm:px-6 py-4 sm:py-2.5 contact-round text-font'>Explore Services</span>
              </div>
            </a>
          </Slide>
        </div>
      </div>

      {/* mobile menu view */}
      {
        menu && (
          <div className="fixed inset-0 bg-black z-30 flex flex-col justify-center items-center text-white">
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

      {/* about us */}
      <div className='mt-10 mb-10' id='about'>
        <h1 className='text-font font-medium text-center text-4xl mb-4'>About us</h1>
        <p className='text-sm lg:text-[16px] text-font text-justify sm:text-center mx-5 sm:mx-24 xl:mx-52 leading-6'>Sledge Beanie Allied Services is a U.S. registered firm with global operations,
          specializing in real estate investments, auto exports, and logistics solutions.
          We connect markets seamlessly by investing in strategic properties, facilitating
          international vehicle trade, and delivering reliable supply chain services.
          With a focus on efficiency and integrity, we help businesses and clients succeed
          in an increasingly interconnected world.</p>
      </div>

      {/* Mission, Vision, Value */}
      <div>

        {/* Mission */}
        <div>
          {/* image */}
          <div>
            <div className={` relative`}>
              {/* Background image */}
              <img
                className="w-dvw h-[60vh] object-cover"
                src={Mission}
                alt="Mission"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/70"></div>
              {/* Mission text */}
              <div className="absolute inset-0 z-20 sm:flex justify-center items-center">
                {/* div text */}
                <div className='sm:border-[1.5px] sm:border-white sm:rounded-2xl sm:w-1/2 pt-16 pb-0 sm:pt-7 sm:pb-7 px-7 sm:px-10'>
                  {/* top */}
                  <div className='sm:flex items-center gap-3'>
                    {/* icon */}
                    <div className='icon-bg w-16 sm:w-14 h-16 sm:h-14 icon-border flex justify-center items-center'>
                      <TbTargetArrow className="transform -scale-x-100" color={"white"} size={33} />
                    </div>
                    {/* text */}
                    <div className='mt-5 sm:mt-0 text-left'>
                      <span className='text-white font-semibold text-font text-2xl tracking-wide sm:tracking-normal'>Mission</span>
                    </div>
                  </div>
                  {/* bottom text */}
                  <div className='mt-5 text-left'>
                    <span className='text-white text-font text-lg sm:text-xs lg:text-lg leading-8 sm:leading-5 lg:leading-8 tracking-wide'>We aim to provide exceptional services across real estate, auto export,
                      and logistics, building strong connections between markets with integrity and innovation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* vision & value */}
        <div className='sm:grid grid-cols-2'>
          {/* vision */}
          <Slide direction='left' duration={1500} triggerOnce>
            <div className='vision-bg py-14 sm:py-20 px-7 sm:px-16 lg:px-24 xl:px-32'>
              {/* top */}
              <div className='sm:flex items-center gap-3'>
                {/* icon */}
                <div className='icon-bg w-16 sm:w-14 h-16 sm:h-14 icon-border flex justify-center items-center'>
                  <HiOutlineEye className="" color={"white"} size={28} />
                </div>
                {/* text */}
                <div className='mt-5 sm:mb-5 text-left'>
                  <span className='text-white font-semibold text-font text-2xl tracking-wide sm:tracking-normal'>Vision</span>
                </div>
              </div>
              {/* bottom text */}
              <div className='mt-5 text-left'>
                <span className='text-white text-font text-lg sm:text-xs lg:text-lg leading-8 sm:leading-5 lg:leading-8 tracking-wide'>We aim to provide exceptional services across real estate, auto export,
                  and logistics, building strong connections between markets with integrity and innovation.</span>
              </div>
            </div>
          </Slide>
          {/* value */}
          <Slide direction='right' duration={1500} triggerOnce>
            <div className='value-bg py-14 sm:py-20 px-7 sm:px-16 lg:px-24 xl:px-32'>
              {/* top */}
              <div className='sm:flex items-center gap-3'>
                {/* icon */}
                <div className='icon-bg w-16 sm:w-14 h-16 sm:h-14 icon-border flex justify-center items-center'>
                  <MdOutlineHandshake className="" color={"white"} size={28} />
                </div>
                {/* text */}
                <div className='mt-5 sm:mb-5 text-left'>
                  <span className='font-semibold text-font text-2xl tracking-wide sm:tracking-normal'>Value</span>
                </div>
              </div>
              {/* bottom text */}
              <div className='mt-5 text-left'>
                <span className='text-font text-lg sm:text-xs lg:text-lg leading-8 sm:leading-5 lg:leading-8 tracking-wide'>We value integrity in every decision,
                  transparency in our work, growth through learning, and global partnerships that make a lasting impact.</span>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      {/* meet the owner */}
      <div className='my-10 lg:my-14 mx-0 sm:mx-7 lg:mx-10 value-bg sm:grid grid-cols-2'>
        {/* image */}
        <Slide direction='left' duration={1500} triggerOnce>
          <div className='py-16 px-14 sm:px-5 lg:px-16'>
            <img src={Alamin} alt="Al-amin Dabo" className='rounded-full border-r-5 border-b-2 border-black shadow-xl' />
          </div>
        </Slide>
        {/* texts */}
        <div className='pt-1 sm:pt-10 pb-10 sm:pr-8 lg:pr-16 px-5 sm:px-0'>
          {/* first */}
          <div className='text-left'>
            <span className='text-font font-medium text-xl sm:text-lg lg:text-2xl'>MEET THE OWNER</span>
          </div>
          {/* name */}
          <div className='mb-1 mt-4 text-left'>
            <span className='text-font font-semibold text-[22px] sm:text-[20px] lg:text-[26px]'>AL-AMEEN IBRAHIM DABO</span>
          </div>
          {/* small text */}
          <div className='text-left'>
            <span className='text-font font-medium text-[13px] lg:text-[15px] owner-text'>Founder Of Sledge Beanie Allied Services LLC</span>
          </div>
          {/* info text */}
          <div>
            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>A Bachelor's degree in Civil Engineering and recognition
              as a Registered Civil Engineer, he has hands-on experience across structural construction, hydraulic structures,
              and road works. His technical foundation ensures that every project is approached with precision, safety, and long-term
              durability.
            </p>
            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>He also brings specialized knowledge in real estate
              investment, particularly fix and flip strategies, retrofits, and foreclosure analysis. This insight allows him to
              identify value-driven opportunities, transform properties, and maximize returns.
            </p>
            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>Beyond engineering and real estate, he has built
              extensive experience in logistics, procurement, and global supply chain management. This combination of skills enables
              him to understand not just how to design and build, but also how to source, move, and deliver efficiently across
              international markets.
            </p>
            <p className='text-font font-normal text-[13px] sm:text-xs lg:text-sm owner-text mt-4 leading-6 text-left'>At Sledge Beanie Allied Services, his vision is to
              merge engineering excellence, real estate innovation, and global logistics expertise into reliable, forward-thinking
              solutions for clients in construction, property, trucking, and international trade.
            </p>
          </div>
          {/* discover button */}
          <Slide direction='down' duration={1500} triggerOnce>
            <div className='mt-5 text-lg sm:text-xs cursor-pointer font-semibold text-black orange px-8 sm:px-6 py-4 sm:py-2.5 contact-round w-full sm:w-60 text-center'>
              <span className='text-font'>Discover Our Work</span>
            </div>
          </Slide>
        </div>
      </div>

      {/* service section */}
      <div id='service' className='mx-5 sm:mx-10'>
        <Service />
      </div>

      {/* contact section */}
      <div id='contact' className='mx-5 sm:mx-10 mt-20 mb-10'>
        <Contact />
      </div>

      {/* footer section */}
      <div id='contact'>
        <Footer />
      </div>

    </div >

  );
}
