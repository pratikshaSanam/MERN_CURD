import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UpdateUser() {

    const {id} = useParams()
    const [name,setName]= useState()
    const [email,setEmail]= useState()
    const [age,setAge]= useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(reuslt => {console.log(reuslt)
            setName(reuslt.data.name)
            setEmail(reuslt.data.email)
            setAge(reuslt.data.age)
        
        })

        .catch(err => comsole.log(err))

    },[])

    const handleUpdate =(e) =>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
        .then(result =>{
             console.log(result)
             navigate('/')
        })
        .catch(err => console.log(err))

    }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlFor=''>Name</label>
                <input type="text" placeholder='Enter your name' className='form-control' value={name}
                onChange={(e)=>setName(e.target.value)}
                />
    
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input type="email" placeholder='Enter your Email' className='form-control' value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
    
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Age</label>
                <input type="text" placeholder='Enter your Age' className='form-control' value={age}
                onChange={(e)=>setAge(e.target.value)}
                />
    
            </div>
            <button className='btn btn-success'>Update</button>
    
        </form>
    
    </div>
        </div>
  )
}
