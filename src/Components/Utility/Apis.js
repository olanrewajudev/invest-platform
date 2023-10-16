import axios from 'axios'
import Cookies from 'js-cookie'
import { tokenName } from './Functions'

const url = 'http://localhost:4001/invest/'

const user_urls = {
    signup: `user/signup`,
    login: `user/login`,
    get_info: `user/get-info`,
}

export const Apis = {
    user: user_urls
}

export const postUrl = async (endpoint, data) => {
    const res = await axios.post(`${url}${endpoint}`, data)
    return res.data
}

export const AuthpostUrl = async (endpoint, data) => {
    const res = await axios.post(`${url}${endpoint}`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get(tokenName)}`
        }
    })
    return res.data
}

export const getUrl = async (endpoint) => {
    const res = await axios.get(`${url}${endpoint}`)
    return res.data
}

export const AuthgetUrl = async (endpoint) => {
    const res = await axios.get(`${url}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get(tokenName)}`
        }
    })
    return res.data
}