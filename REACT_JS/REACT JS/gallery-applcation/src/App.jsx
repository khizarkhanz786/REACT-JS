import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './componenets/Navbar'
import GalleryCard from './componenets/GalleryCard'
import axios from 'axios'
import Footer from './componenets/Footer'


function App() {
  const [data, setData] = useState([])
  const [page , setPage] = useState(1)
  const [limit , setLimit] = useState(10)
  const getData = async () =>{
    try {
          const result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        setData(result.data)
        } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getData()
  },[page,limit])
  return (
    <>
    <div className="body-con">

      {/* navbar */}
    <Navbar />

    {/* cards */}
     <div className="card-con">
    {data.length > 0 ? data.map((item) => <GalleryCard data={item} />): <p>Loading...</p>}
    </div>


    {/* footer */}
    <Footer setPage={setPage} setLimit={setLimit} />

    </div>
    </>
  )
}

export default App
