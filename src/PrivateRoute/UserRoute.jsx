import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Apis, AuthgetUrl } from '../Components/Utility/Apis'
import { dispatchUser } from '../app/reducer'

const UserRoute = ({children}) => {
    const [active, setActive] = useState(false)
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const getUserAccount = useCallback(async () => {
        const res = await AuthgetUrl(Apis.user.get_info)
        if (res.status === 200) {
            Dispatch(dispatchUser(res.msg))
            // Dispatch(dispatchisLogin(true))
            return setActive(true)
        }
        else {
            console.log(res, 'error')
            return navigate('/login')
        }
    }, [Dispatch, navigate])
    useEffect(() => { getUserAccount() }, [getUserAccount])
    if (active) {
        return <>{children}</>
    }

}
export default UserRoute
