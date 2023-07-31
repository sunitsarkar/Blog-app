import { useEffect, useState } from 'react';
import './blog.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BlogPage() {
    const uri="https://blog-backend-sunit.onrender.com"
    const location = useLocation();
    const username = location.state.ref;
    const headers = { "Authorization": localStorage.getItem("token") };
    const [temp,setTemp]=useState(true)
    const navigate=useNavigate();
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(uri+`/blog/get?email=${username}`,{headers}).then((res)=>{
            setData(res.data)
        }).catch(err=>{console.error(err)})
    },[temp])

    // console.log(data)

    const handelLogout=()=>{
        localStorage.removeItem("token");
        navigate('/');
        alert("Logged Out");
        document.location.reload()
    }

    return <div id="blog-main">
        <nav>
            <h1 className='nav-item'>Blog App</h1>
            <div><button className='nav-item' onClick={() => {navigate('/createblog',{
                    state:{
                      ref:username
                    }
                  }) }}>Create New Blog</button>
                  <button onClick={handelLogout}>logout</button>
                  </div>
        </nav>
        <hr />
        <div id='blog-container'>
            {
                data.map((item,index)=>{
                    return <div className='post' key={index}>
                        <h3>{item.blog}</h3>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            axios.delete(uri+`/blog/delete?id=${item.id}`).then(()=>{
                                setTemp(!temp)
                            })
                        }}>delete</button>
                    </div>
                })
            }
        </div>
    </div>
}