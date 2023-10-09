import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 w-full mt-20 h-full">
        <div className="flex-cols lg:flex items-start justify-between pt-20 pb-16 mx-auto  ml-[7%] mr-[7%]">
          <div className=" pb-10">
            <div className="text-[#454545] text-1xl font-semibold">Lorem, ipsum.</div>
            <div className="text-[#454545] text-[0.8rem] leading-6">
              Dui vivamus arcu felis bibendum ut tristique et <br /> egestas. Dictum sit amet justo donec enim. <br /> Parturient montes nascetur ridiculus mus mauris
            </div>
          </div>
          <div className="pb-10">
            <div className="text-[#454545]  font-semibold">Quick Links</div>
            <div className="mb-3"><Link to='' className=''>Teams</Link></div>
            <div className="mb-3"><Link to='' className=''>Contact Us</Link></div>
            <div className="mb-3"><Link to='' className=''>Login Account</Link></div>
            <div className="mb-3"><Link to='' className=''>Create Account</Link></div>
          </div>
          <div className="">
            <div className="text-3xl font-medium mb-3">Follow Us</div>
            <div className="flex items-center">
              <Link className=' bg-white p-[0.9rem] ml-4 rounded-full'> <FaFacebookF /> </Link>
              <Link className=' bg-white p-[0.9rem] ml-4 rounded-full'> <FaTwitter /> </Link>
              <Link className=' bg-white p-[0.9rem] ml-4 rounded-full'> <FaInstagram /> </Link>
              <Link className=' bg-white p-[0.9rem] ml-4 rounded-full'> <FaGooglePlusG /> </Link>
            </div>
            <div className="pl-6  pt-6">
              <div className="text-[0.8rem]">Nam aliquam sem et tortor cons</div>
              <Link className='font-semibold text-[0.7rem]'>contact@example.com</Link>
            </div>
          </div>
        </div>
        <div className=" pb-10 text-center">Copyright © Olanrewaju</div>
      </div>
    </div>
  )
}

export default Footer
