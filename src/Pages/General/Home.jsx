import laptop from '../../assets/laptop1.png'
import about from '../../assets/about1.png'
import line from '../../assets/process-line.png'
// import btc1 from '../../assets/btc1.png'
// import btc2 from '../../assets/btc2.png'
// import btc3 from '../../assets/btc3.png'
import { GiClassicalKnowledge } from 'react-icons/gi'
import { TfiShield } from 'react-icons/tfi'
import { PiArrowsCounterClockwise, PiClock } from 'react-icons/pi'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Layouts from '../../Components/General/Layouts'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { BsGraphUpArrow } from 'react-icons/bs'
import { AiOutlineTransaction } from 'react-icons/ai'
import Navbar from '../../Components/General/Navbar'
import member2 from '../../assets/member2.jpg'
import member3 from '../../assets/member3.jpg'
import member4 from '../../assets/member4.jpg'
import member5 from '../../assets/member1.jpg'

const links = [
    {
        icon: <TfiShield />,
        title: 'Safe & Secured',
        details: "Your safety is our priority. Our website employs cutting-edge security measures, utilizing advanced encryption, real-time monitoring, and proactive defense strategies."
    },
    {
        icon: <PiArrowsCounterClockwise />,
        title: 'Instant Exchange',
        details: "Revolutionize your online transactions with us! Experience the speed of instant payments that redefine convenience. Our platform is engineered for swift financial interactions, "
    },
    {
        icon: <PiClock />,
        title: '24/7 Customer Service',
        details: "Trust in our unwavering customer support, available around the clock. With a dedicated team ready to assist, we redefine reliability, ensuring your queries are met with prompt solutions."
    },
    {
        icon: <GiClassicalKnowledge />,
        title: 'Educational Resources',
        details: "Explore the world of Bitcoin confidently with our platform's comprehensive educational resources. From insightful tutorials on navigating the cryptocurrency landscape to in-depth guides on secure wallet management."
    },
]
const achieve = [
    {
        icon: <BiSupport />,
        title: '60 Support Country',
    },
    {
        icon: <AiOutlineTransaction />,
        title: '12k Transaction per hour',
    },
    {
        icon: <BsGraphUpArrow />,
        title: '5B largest transaction',
    },
    {
        icon: <GiClassicalKnowledge />,
        title: '240 years of experience',
    },
]
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

const start = [
    {
        icon: 'https://www.cryptosville.org/asset2/img/process-icons/1.png',
        title: 'Create Your Account',
        details: "xcepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        icon: 'https://www.cryptosville.org/asset2/img/process-icons/2.png',
        title: 'Fund your Account',
        details: " xcepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        icon: 'https://www.cryptosville.org/asset2/img/process-icons/3.png',
        title: 'Purchase your preferred Plan',
        details: "xcepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

const Home = () => {
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
    const [typeEffect] = useTypewriter({
        words: [`Unlock Wealth. `, 'Financial Privacy.', 'Inflation Hedge.', 'Store of Value.'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50
    })
    return (
        <Layouts>
            {view && <Navbar closeView={() => setView(!view)} />}

            <div className=''>
                <div className="grid grid-cols-1 w-full bg-gradient-to-r from-blue-800 to-cyan-500">
                    <div className=''>
                        <div className='bg-gradient-to-r from-blue-800 to-cyan-500'>
                            <div className={`fixed w-full z-10 top-0 ${scroll ? "bg-gray-100 shadow-lg border-b" : " "}`}>
                                <div className="flex items-center z-50 justify-between mx-10 py-5">
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
                    </div><br /><br /><br /><br />
                    <div className="lg:flex items-start mx-5 my-20 justify-between">
                        <div className="">
                            <div className="lg:text-[3rem] text-4xl mb- leading-tight text-[#fff]">Invest In Bitcoin. <br /> <span className=' '>Bitcoin Trading.</span></div>
                            <div className="lg:text-[3rem] text-4xl mb-8 leading-tight text-[#fff]"><span className=' text-cyan-400 '>Helps In, <br /> {typeEffect} <Cursor /> </span></div>
                            <p className="lg:text-xl text-gray-100">Use modern progressive technologies of Bitcoin to earn money</p>
                            <div className="lg:flex items-center md:flex xl:flex  justify-start mt-10 gap-3">
                                <input type="email" placeholder=' Email address' className=' outline-none border rounded-full mb-2 lg:mb-0 py-4 px-5 lg:w-[20rem] w-[15rem] shadow-md' />
                                <div className="border py-4 w-[10rem] text-center text-white font-semibold rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">Get Started</div>
                            </div>
                        </div>
                        <div className="">
                            <img src={laptop} alt="" className="lg:w-[36rem] mt-8 lg:mt-0 w-[40rem]" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-7 lg:p-10">
                    <div className="lg:flex items-start justify-between gap-5">
                        <div className="">
                            <h1 className="text-[#20509e] mb-7 text-5xl">What is Bitcoin ?</h1>
                            <p className="text-[#20509e] mb-5 text-xl">Bitcoin is an innovative payment network and a new kind of money.</p>
                            <p className="text-xl lg:mb-20 mb-10 text-slate-600">Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                            <div className="bg-white over:bg-blue-700 mt-5 text-cyan-600 font-semibold py-4  w-[10rem] text-center rounded-full border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">Get Started</div>
                        </div>
                        <img src={about} alt="" className="w-[40rem] h-[20rem] mb-10 mt-10 lg:mt-0  lg:h-[22rem]" />
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 w-full bg-gradient-to-r pb-10 from-blue-800 to-cyan-200">
                        <div className="pt-24 pb-10">
                            <div className="text-center m-5 text-white">
                                <h1 className="text-5xl mb-5">Our Features</h1>
                                <p className="font-medium">Bitcoin is the simplest way to exchange money at very low cost.</p>
                            </div>
                            <div className="">
                                <div className="lg:flex items-center justify-center mx-10 my-6 gap-3 grid md:grid-cols-2">
                                    {links.map((item, i) => (
                                        <div key={i} className="bg-white over:bg-blue-700 mt-5 lg:w-[22rem] rounded-lg py-4 h-[24rem] border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                            <div className="text-cyan-900">
                                                <div className="text-6xl flex items-center justify-center py-3 "> {item.icon} </div>
                                                <div className="">
                                                    <h1 className="text-[1.1rem] font-semibold text-center mb-3"> {item.title} </h1>
                                                    <p className="px-4 text-slate-400 text-center"> {item.details} </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 mb-10 pb-24">
                    <div className="text-center mx-5 py-10 pt-20">
                        <div className="text-cyan-900 lg:text-6xl text-3xl my-3">Get Started With Bitcoin</div>
                        <p className=" text-xl text-zinc-400">Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes!</p>
                    </div>
                    <div className="mt-16 hidden">
                        <div className=" z-10 -mr-80 flex items-end justify-center -mb-20"><img src={line} alt="" className=" w-[22rem]" /></div>
                        <div className=" z-10 mx-60 "><img src={line} alt="" className="w-[22rem] " /></div>
                    </div>
                    <div className="">
                        <div className="lg:flex items-center justify-center mx-10 my-6 gap-10 grid md:grid-cols-2">
                            {start.map((item, i) => (
                                <div key={i} className="bg-white over:bg-blue-700 rounded-xl mt-5 lg:w-[20rem] py-4 h-[21rem] shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                                    <div className="text-cyan-900 ">
                                        <div className="flex items-center my-5 justify-center"><img src={item.icon} alt="" className="w-16" /></div>
                                        <div className="">
                                            <h1 className="text-xl text-center mb-3"> {item.title} </h1>
                                            <p className="px-4 text-center text-slate-400"> {item.details} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-[95%] flex items-center justify-center mx-auto rounded-lg bg-gradient-to-r from-blue-800 to-cyan-200">
                        <div className="lg:flex items-center justify-center mx-10 my-6 gap-10 grid md:grid-cols-2">
                            {achieve.map((item, i) => (
                                <div key={i} className="bg-white rounded-xl my-5 w-[16rem] py-4 h-[10rem] shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                                    <div className="text-cyan-900 ">
                                        <div className="flex items-center my-5 text-4xl justify-center">{item.icon}</div>
                                        <div className="">
                                            <h1 className="text-xl text-center mb-3"> {item.title} </h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </Layouts>
    )
}

export default Home
