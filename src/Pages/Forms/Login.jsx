import React, { useState } from 'react'
import Layouts from '../../Components/General/Layouts'
import { Link } from 'react-router-dom';
import Navbar from '../../Components/General/Navbar';
import logo from '../../assets/logo.svg'
import { FaBars, FaEye, FaEyeSlash } from 'react-icons/fa'
import { HotAlert } from '../../Components/Utility/Functions';

const Login = () => {
  const Cs = 'text-blue-800 font-sembold hover:text-gray-400 py-2 text-sm'
  const [scroll, setScroll] = useState(false);
  const [pass1, setPass1] = useState(false)
  const [pass2, setPass2] = useState(false)
  const Icon1 = pass1 ? FaEye : FaEyeSlash
  const Icon2 = pass2 ? FaEye : FaEyeSlash
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.username) return HotAlert('username is required')
    if (!form.password) return HotAlert('password is required')
    if (form.confirm_password !== form.password) return HotAlert('The password you typed-in is incorrect')
  }

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Layouts>
      <div className="">
        {view && <Navbar closeView={() => setView(!view)} />}
        <div className=''>
          <div className=''>
            <div className={`fixed w-full z-10 top-0 ${scroll ? "bg-gray-100 shadow-lg border-b" : " "}`}>
              <div className="flex items-center z-50 bg-gray-100 w-full justify-between mx-auto px-10 py-5">
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
        </div><br /><br /><br /><br /><br /><br />

        <div className="">
          <div className="bg-gradient-to-r from-blue-800 to-cyan-500 w-fit px-5 rounded-xl mx-auto flex items-center justify-center py-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <h1 className="text-center text-3xl font-semibold text-cyan-200">Login</h1>
              </div>

              <div className="mb-2">
                <div className="text-end text-white font-medium">Username</div>
                <input type="text" name='username' value={form.username} onChange={handleForm} className='input' />
              </div>

              <div className="mb-2 relative">
                <div onClick={() => setPass1(!pass1)} className="absolute top-10 right-7 cursor-pointer text-2xl text-gray-600"> <Icon1 /> </div>
                <div className="text-end text-white font-medium">Password</div>
                <input type={pass1 ? 'text' : "password"} name='password' value={form.password} onChange={handleForm} className='input' />
              </div>

              <div className="border py-4 w-[10rem] text-center mt-6 text-white font-semibold rounded-full bg-gradient-to-l from-cyan-500 to-blue-500  transition duration-300 ease-in-out transform hover:scale-105 text-lg shadow-xl capitalize ">
                <button type="submit">Sign Up</button>
              </div>

              <div className="mt-7">
                <div className="text-center text-white">Already have an account? <Link to='/register' className='text-blue-900'>Sign Up</Link> </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default Login
