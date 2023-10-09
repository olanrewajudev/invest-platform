import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'

const Layouts = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-center'/> 
            <ToastContainer />
        </div>
    )
}

export default Layouts
