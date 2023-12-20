import React from "react"
import axios from "axios"
import Cookies from "universal-cookie"

export default function RefreshTokenAPI(){
    const cookies = new Cookies()
    axios.post('http://localhost:5000/token', {refreshToken: cookies.get('refreshToken')})
    .then(res => {
        cookies.set('accessToken', res.data.accessToken, {path: '/'})
        cookies.set('refreshToken', res.data.refreshToken, {path: '/'})
    })
    .catch(err => {
        console.log(err)
    })
}