import React from "react";

const Input = ({placeholder , handler, type , value}) => {
  return (
  
      <input 
autoComplete={type === "password" ? "new-password" : "one-time-code"}
      type={type}
       placeholder={placeholder} 
       value={value || ""}
       onChange={(e) => handler(e.target.value, name || type)}/>
    
  );
};

export default Input;