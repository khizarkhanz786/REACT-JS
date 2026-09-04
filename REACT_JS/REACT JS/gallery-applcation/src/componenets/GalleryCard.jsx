import React from 'react'

const GalleryCard = ({data}) => {
  return (
    <>
   
    <div className="galleryCard-con">
    <div className="card-img">
        <img src={data.download_url}
         width={"200px"} alt="" />
    </div>
<div className="card-overlay">
    <h3>d{data.author}</h3>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
    </div>
    
    
    
    
    </>
  )
}

export default GalleryCard