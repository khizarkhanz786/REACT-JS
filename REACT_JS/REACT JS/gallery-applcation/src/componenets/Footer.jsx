import React from 'react'

const Footer = ({setPage, setLimit  }) => {
  return (
     <div className="footer-con">
        <div className="page-heading">
          <h1>Pages</h1>
          <div className="page-count">
           { [1,2,3,4,5].map((num) => <button onClick={(e) => setPage(e.target.innerText)
           } >{num}</button>)}
            
          </div>
        </div>
        <select onChange={(e) => setLimit(e.target.value)
        } className="">
          <option selected value="10">10</option>
          <option value="25">25</option>
          <option
            value="50
    "
          >
            50
          </option>
          <option value="100">100</option>
        </select>
      </div>

  )
}

export default Footer