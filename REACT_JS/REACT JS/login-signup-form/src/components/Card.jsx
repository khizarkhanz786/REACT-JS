import React from 'react'

const Card = ({data }) => {
    
  return (
    <>
    
    <div className="card">
        <h2>Name: {data.username}</h2>
        <p>Email : {data.email} </p>
        <p>Age : {data.age}</p>
        <p>Gender: {data.gender}</p>
        <p>Phone.No {data.phone}</p>
    </div>
    
    
    </>
  )
}

export default Card