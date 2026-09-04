import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from '../components/Input';

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] =useState({
        username: "",
        age : "",
        email: "",
        password : "",

    })
    const handleChange = (value,field)=>{

        setForm((prev)=>({...prev ,[field]:value}))
    }
    const RegisterHandle = ()=>{
        const {username,age,email , password} = form
        if(!username||!age||!email || !password){
            alert("please fillout your form")
            return
        }else{
            localStorage.setItem("userName", username)
            alert("register succsessfull !.. redirecting to login page")
            setForm({
                email: "",
                password: "",
                username:"",
                age:"",
              }
            )
        }
        navigate("/dashboard")
    }
  return (
   <>
   <div className="all">
   <div className="container-regis">
    <h1>registration form</h1>
     <Input 
    handler={handleChange}
    placeholder={"Enter your name"}
    type={"username"} 
    name ={"username"}
    value={form.username}
    />
     <Input 
    handler={handleChange}
    placeholder={"Enter your age"}
    type={"age"} 
    name={"age"}
    value={form.age}
    />
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
   name ={"password"}
       value={form.password}

       />
   
   <button onClick={RegisterHandle}>register</button>
<p>Already have an account? <Link to="/login">Login here</Link></p>   
   </div>
   </div>
   </>
  )
}

export default Register