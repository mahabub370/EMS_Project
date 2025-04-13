import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("form is submitted")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-400 px-20 py-28'>
        <form onSubmit={(e)=>{submitHandler(e)}} action="" className='flex flex-col items-center justify-center'>
          <input onChange={(e)=>{setEmail(e.target.value)}} value={email} required className='text-xl border-2 border-emerald-300 px-5 py-3 rounded-full bg-transparent outline-none placeholder: text-white' type="email" placeholder='Enter your email here' />
          <input onChange={(e)=>{setPassword(e.target.value)}} value={password} required className='text-xl border-2 border-emerald-300 px-5 py-3 mt-3 rounded-full bg-transparent outline-none placeholder: text-white' type="password" placeholder='Enter your password here' />
          <button className='text-xl text-center bg-emerald-300 px-7 py-3 mt-5 rounded-xl outline-none'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login