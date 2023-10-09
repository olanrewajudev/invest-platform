import React, { useState } from 'react'
import Layouts from '../../Components/General/Layouts'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import laptop from '../../assets/laptop1.png'
import { FaBars } from 'react-icons/fa'
import Navbar from '../../Components/General/Navbar'
import { ErrorAlert, HotAlert } from '../../Components/Utility/Functions';

const Contact = () => {
  const [scroll, setScroll] = useState(false);
  const [count, setCount] = useState(false)
  const [view, setView] = useState(false)
  const [form, setForm] = useState({
    email: '',
    subject: '',
    text: ''
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

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
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email) return HotAlert('Email Address is required')
    if (!form.subject) return HotAlert('Email Address is required')
    if (!form.message) return HotAlert('message Address is required')
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
            <div className="lg:text-[3rem] text-4xl mb-8 leading-tight text-[#fff]"> Meet <span className=' text-cyan-400 '>our customer support team.</span></div>
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
      <div className="my-10">
        <div className="my-10">
          <div className="text-center">
            <h1 className="text-4xl text-blue-800">Contact Us</h1>
            <p className="text-gray-600"></p>
          </div>
        </div>
        <div className="bg-gray-100 py-20">
          <div className="lg:flex items-start gap-10 justify-between mx-20">
            <div className="">
              <h1 className="mb-7 text-2xl font-semibold ">Our 24/5 multilingual customer support team, is ready to provide you with an unsurpassed level of support!</h1>
              <p className="">The [sitename] support team comprises of industry professionals who are available to help clients round the clock. Our clients are of paramount importance, which is why everything we do is always with the goal of improving their overall experience.</p>
              <div className="mt-16">Email Us Directly @: support@example.com</div>
            </div>
            <div className="my-10 lg:my-0 px-10  rounded-xl flex items-center justify-center py-10 bg-gradient-to-r from-blue-800 to-cyan-500">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <h1 className="mb-2 text-white">Enter Your Email Address</h1>
                  <input type="email" className='input' name='email' value={form.email} onChange={handleForm} placeholder='Email Address' />
                </div>
                <div className="">
                  <h1 className="my-2 text-white">Subject</h1>
                  <input type="text" className='input' name='subject' value={form.subject} onChange={handleForm} placeholder='Subject' />
                </div>
                <div className="">
                  <h1 className="my-2 text-white">Message</h1>
                  <textarea name="text" value={form.text} placeholder='Message' onChange={handleForm} id="" cols="50" className='inputs' rows="10"></textarea>
                </div>
                <div className="flex items-center justify-center"> <button type="submit" className='border py-4 w-[10rem] mt-10 text-center text-white font-semibold rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Send Feedback</button> </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default Contact
