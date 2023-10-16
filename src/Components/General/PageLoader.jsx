import { useEffect, useState } from "react"
import spin from '../../assets/spins.gif'
// eslint-disable-next-line react/prop-types
const PageLoader = ({ children }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])

    if (loading) return <div className="flex items-center justify-center w-full h-screen bg-white"> <img src={spin} alt="" /> </div>

    return <>{children}</>
}

export default PageLoader
