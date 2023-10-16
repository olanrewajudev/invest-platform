import React from 'react'
import logo from '../../assets/logo.svg'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const UserHead = () => {
  return (
    <div>
      <div className="bg-gray-100 py-5 z-50 px-10 fixed w-full">
        <div className="flex items-center justify-between">
          <div className=""> <img src={logo} alt="" className="w-32" /> </div>
          <div className="gap-10 flex items-center ">
            <Link to='' className='hover:text-teal-400 font-semibold'>Trading</Link>
            <Link to='' className='hover:text-teal-400 font-semibold'>Transaction</Link>
            <Link to='' className='hover:text-teal-400 font-semibold'>Deposit</Link>
            <Link to='' className='hover:text-teal-400 font-semibold'>Withdraw</Link>
            <Link to='' className='hover:text-teal-400 font-semibold'>Plans</Link>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-blue-900 text-white text-2xl rounded-full p-3"> <FaUser /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHead
