import React, { useState } from 'react'
import Layouts from '../../Components/General/Layouts'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/General/Navbar';
import logo from '../../assets/logo.svg'
import { FaBars, FaEye, FaEyeSlash } from 'react-icons/fa'
import { ErrorAlert, HotAlert, Roles, tokenName } from '../../Components/Utility/Functions';
import { Apis, postUrl } from '../../Components/Utility/Apis';
import { decodeToken } from 'react-jwt'
import cookies from 'js-cookie'
import Loading from '../../Components/Utility/Loading';

const Login = () => {
  const Cs = 'text-blue-800 font-sembold hover:text-gray-400 py-2 text-sm'
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass1, setPass1] = useState(false)
  const Icon1 = pass1 ? FaEye : FaEyeSlash
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [view, setView] = useState(false)
  const navigate = useNavigate()
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.username) return ErrorAlert('username is required')
    if (!form.email) return ErrorAlert('email is required')
    if (!form.password) return ErrorAlert('password is required')
    const data = {
      ...form
    }
    setLoading(true)
    const res = await postUrl(Apis.user.login, data)
    setLoading(false)
    if (res.status === 200) {
      HotAlert(res.msg)
      const value = decodeToken(res.token)
      const user = Roles.find(i => i.user === value.role)
      if (user) {
        cookies.set(tokenName, res.token)
        setTimeout(() => {
          navigate(`${user.url}`)
        }, 1000);
      }
    } else {
      return ErrorAlert(res.msg)
    }
  }

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Layouts>
      {loading && <Loading />}
      <div className="">
        {view && <Navbar closeView={() => setView(!view)} />}
        <div className=''>
          <div className=''>
            <div className={`fixed w-full z-10 top-0 ${scroll ? "bg-gray-100 shadow-lg border-b" : " "}`}>
              <div className="flex items-center z-50 bg-gray-100 w-full justify-between mx-auto px-10 py-5">
                <Link to='/' className=''> <img src={logo} alt="" className="lg:w-[12rem] w-32 " /> </Link>
                <div className="lg:flex hidden gap-5">
                  <Link onClick={() => scrollTo(0, 0)} to='/' className={`${Cs}`}>Home</Link>
                  <Link onClick={() => scrollTo(0, 0)} to='/team' className={`${Cs}`}>Team</Link>
                  <Link onClick={() => scrollTo(0, 0)} to='/plan' className={`${Cs}`}>Investment Plans</Link>
                  <Link onClick={() => scrollTo(0, 0)} to='/contact' className={`${Cs}`}>Contact Us</Link>
                  <Link onClick={() => scrollTo(0, 0)} to='/login' className={`${Cs}`}>Login</Link>
                  <Link onClick={() => scrollTo(0, 0)} to='/register' className={`${Cs} border border-blue-300 w-20 rounded-xl text-center h-10 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105`}>Sign Up</Link>
                </div>
                <div className="text-4xl text-blue-800 lg:hidden cursor-pointer"> <FaBars className='' onClick={() => handleView(!view)} /> </div>
              </div>
            </div>
          </div>
        </div><br /><br /><br /><br /><br /><br />

        <div className="">
          <div className="bg-gradient-to-r from-blue-800 to-cyan-500 w-[26rem] px-5 rounded-xl mx-auto flex items-center justify-center py-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <h1 className="text-center text-3xl font-semibold text-cyan-200">Login</h1>
              </div>

              <div className="mb-2">
                <div className="text-end text-white font-medium">Username</div>
                <input type="text" name='username' value={form.username} onChange={handleForm} className='input' />
              </div>

              <div className="mb-2">
                <div className="text-end text-white font-medium">Email</div>
                <input type="email" name='email' value={form.email} onChange={handleForm} className='input' />
              </div>

              <div className="mb-2 relative">
                <div onClick={() => setPass1(!pass1)} className="absolute top-10 right-7 cursor-pointer text-2xl text-gray-600"> <Icon1 /> </div>
                <div className="text-end text-white font-medium">Password</div>
                <input type={pass1 ? 'text' : "password"} name='password' value={form.password} onChange={handleForm} className='input' />
              </div>

              <div className="border py-4 w-[10rem] text-center mt-6 text-white font-semibold rounded-full bg-gradient-to-l from-cyan-500 to-blue-500  transition duration-300 ease-in-out transform hover:scale-105 text-lg shadow-xl capitalize ">
                <button type="submit">Login</button>
              </div>

              <div className="mt-7">
                <div className="text-center text-white">Already have an account? <Link onClick={() => scrollTo(0, 0)} to='/register' className='text-blue-900'>Sign Up</Link> </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default Login
