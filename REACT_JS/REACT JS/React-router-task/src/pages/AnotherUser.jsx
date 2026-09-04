import { useEffect , useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AnotherUser = () => {
const [users, setUsers] = useState([]);

   useEffect(() => {
     const getUserData = async () => {
      try {
         const result = await axios.get(`https://dummyjson.com/users/`);
        setUsers(result.data.users);

      } catch (error) {
        console.log(error)
      }
     };
     getUserData();
   },[]);

  return (
    <div className='' >
        <div className="max-w-7xl mx-auto text-center my-6 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          User Directory
        </h1>
        <p className="text-slate-900 text-sm md:text-base max-w-xl mx-auto">
          Explore all registered user profiles, contact details, and account info below.
        </p>
      </div>
        <div className='cardParent flex flex-wrap  justify-around m-5 gap-3'>
                  {users.length > 0 ? users.map((user) => <Link  key={user.id} to={`/userdetailpage/${user.id}`}><UserCard data={user} /></Link>) : <p>useris not found</p>}
 
        </div>
    </div>
  )
}

export default AnotherUser


const UserCard = ({data})=>{
    console.log(data)
    return(
        <> 
        
         <div className='w-[350px] h-[150px] bg-slate-900 text-white rounded-2xl border border-slate-800 p-4  text-amber-50 hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg transition-all duration-200'>
            <div>
            <h1> Name : {data.firstName} {data.lastName}</h1>
            <p> Email : {data.email}</p>
            <p> Gender : {data.gender}</p>
            <p> Address : {data.macAddress}</p>
            <p> Phone : {data.phone}</p>
            </div>
        </div>
        </>

    )
}