"use client"
import axios from "axios"
import { useState } from "react"

export default function User () {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSignup () {
        console.log(username)
        console.log(password)
        await axios.post("http://localhost:3000/api/v1/signup",{
            username,
            password
        })
    }

    return (
        <div className="text-black grid gap-5 w-72 ml-96 mt-60 bg-blue-600 p-5">
            <input placeholder="username" className="h-8 rounded-lg pl-2" onChange={(e)=>{setUsername(e.target.value)}} />
            <input placeholder="password" className="h-8 rounded-lg pl-2" onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handleSignup} className="bg-white rounded-lg h-8">Signup</button>
        </div>
    )
}