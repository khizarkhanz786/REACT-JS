import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from "axios"

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const [userName, setUserName] = useState('')

  const getCards = async () => {
    try {
      let result = await axios.get("https://dummyjson.com/users")
      console.log(result.data.users)
      setUsers(result.data.users)
    } catch (error) {
      console.error("API Fetch Error:", error)
    }
  }

  // 1. useEffect zaroori hai taake page load hote hi getCards chal jaye
  useEffect(() => {
    const savedName = localStorage.getItem("userName")
    if (savedName) {
      setUserName(savedName)
    }
    getCards()
  }, [])

  return (
    <div className='dash-h1'>
   

        <h1 >
        Welcome back, <span>Mr {userName || "User"}</span> 
        </h1>
      <div className='dashboard-con' >
        {users.map((user) => (
          <Card key={user.id} data={user} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard