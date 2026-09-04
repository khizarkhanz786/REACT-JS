import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import Input from '../components/Input'

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] =useState({
        email: "",
        password : "",
    })
    const handleChange = (value,field)=>{
        
        setForm((prev)=>({...prev ,[field]:value}))
    }
    const loginHandle = ()=>{
        const {email , password} = form
        if(!email || !password){
            alert("please fillout your form")
            return
        }else{
            alert("login succsessfull !.. redirecting to dashboard")
            setForm({
                email: "",
                password: "",}
            )
        }
        navigate("/dashboard");
    }
  return (
   <>
   <div className="all">
   <div className="container">
    <h1>login form</h1>
   <Input 
    handler={handleChange}
    placeholder={"Enter your email"}
    type={"email"} 
    name={"email"}
    value={form.email}
    />

   <Input 
   handler={handleChange}
   placeholder={"Enter your password"}
   type={"password"}
   name={"password"}
       value={form.password}

       />
   
   <button onClick={loginHandle}>login</button>
<p>If you want to sign up, <Link to="/register">signup here</Link></p>   
   </div>
   </div>
   </>
  )
}

export default Login