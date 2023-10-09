import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Layouts from '../../Components/General/Layouts'
import member2 from '../../assets/member2.jpg'
import member3 from '../../assets/member3.jpg'
import member4 from '../../assets/member4.jpg'
import member5 from '../../assets/member1.jpg'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import laptop from '../../assets/laptop1.png'
import Navbar from '../../Components/General/Navbar'

const team = [
  {
    icon: member2,
    title: 'Head of Design',
    name: 'Katy Abrams',
  },
  {
    icon: member3,
    title: 'Product Manager',
    name: 'Tom Binegar',
  },
  {
    icon: member5,
    title: 'Software Engineer',
    name: 'Jackson Alexander',
  },
  {
    icon: member4,
    title: 'Business Development',
    name: 'Austin Barth',
  },
]

const Team = () => {
  const [scroll, setScroll] = useState(false);
  const [count, setCount] = useState(false)
  const [view, setView] = useState(false)

  window.onscroll = function () {
    siteScroll();
  };
  function siteScroll() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  const handleView = () => {
    setView(!view)
  }
  const Cs = 'text-blue-800 font-sembold hover:text-gray-400 py-2 text-sm'

  return (
    <Layouts>

      {view && <Navbar closeView={() => setView(!view)} />}

      <div className="grid grid-cols-1 w-full bg-gradient-to-r from-blue-800 to-cyan-500">
        <div className=''>
          <div className='bg-gradient-to-r from-blue-800 to-cyan-500'>
            <div className={`fixed w-full z-10 top-0 ${scroll ? "bg-gray-100 shadow-lg border-b" : " "}`}>
              <div className="flex items-center z-50 justify-between mx-10 py-5">
                <Link to='/' className=''> <img src={logo} alt="" className="lg:w-[12rem] w-32 " /> </Link>
                <div className="lg:flex hidden gap-5">
                  <Link to='/' className={`${Cs}`}>Home</Link>
                  <Link to='/team' className={`${Cs}`}>Team</Link>
                  <Link to='/plan' className={`${Cs}`}>Investment Plans</Link>
                  <Link to='/contact' className={`${Cs}`}>Contact Us</Link>
                  <Link to='/login' className={`${Cs}`}>Login</Link>
                  <Link to='/register' className={`${Cs} border border-blue-300 w-20 rounded-xl text-center h-10 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105`}>Sign Up</Link>
                </div>
                <div className="text-4xl text-blue-800 lg:hidden cursor-pointer"> <FaBars className='' onClick={() => handleView(!view)} /> </div>
              </div>
            </div>
          </div>
        </div><br /><br /><br /><br />
        <div className="lg:flex items-start mx-10 my-20 justify-between">
          <div className="">
            <div className="lg:text-[3rem] text-4xl mb-8 leading-tight text-[#fff]">Get to Meet <span className=' text-cyan-400 '> with our tech experts</span></div>
            <p className="lg:text-xl text-gray-100">Use modern progressive technologies of Bitcoin to earn money</p>
            <div className="lg:flex items-center md:flex xl:flex  justify-start mt-10 gap-3">
              <input type="email" placeholder='Enter your email address' className=' outline-none border rounded-full mb-2 lg:mb-0 py-4 px-5 w-[20rem] shadow-md transition duration-300 ease-in-out transform hover:scale-105' />
              <div className="border py-4 w-[10rem] text-center text-white font-semibold rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">Get Started</div>
            </div>
          </div>
          <div className="">
            <img src={laptop} alt="" className="lg:w-[36rem] mt-8 lg:mt-0 w-[40rem]" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-gray-100 flex items-center mb-20 justify-center mt-10">
          <div className="lg:flex items-center justify-center mx-10 my-6 gap-10 grid md:grid-cols-2">
            {team.map((item, i) => (
              <div key={i} className="bg-white rounded-xl flex text-center items-start justify-center my-5 w-[16rem] py-4 h-[20rem] shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="">
                  <div className=" w-32 h-32 mb-6"> <img src={item.icon} alt="" className="rounded-full " /> </div>
                  <div className="text-center mb-5">
                    <h1 className="text-xl text-center"> {item.name} </h1>
                    <p className="text-sm text-center mb-3"> {item.title} </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Link to='' className="text-3xl bg-gray-300 p-2 hover:bg-gradient-to-r text-white from-blue-800 to-cyan-200 rounded-full"> <FaFacebook /> </Link>
                    <Link to='' className="text-3xl bg-gray-300 p-2 hover:bg-gradient-to-r text-white from-blue-800 to-cyan-200 rounded-full"> <FaInstagram /> </Link>
                    <Link to='' className="text-3xl bg-gray-300 p-2 hover:bg-gradient-to-r text-white from-blue-800 to-cyan-200 rounded-full"> <FaTwitter /> </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default Team
