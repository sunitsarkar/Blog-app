import { useLocation, useNavigate } from 'react-router-dom';
import './blog.css';
import axios from 'axios';
import { useState } from 'react';

export default function BlogForm() {
    const [blog, setBlog] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state.ref;
    const handelSave = () => {
        axios.post('https://blog-backend-sunit.onrender.com/blog/create', {
            email: username,
            blog: blog
        }).then((res) => {
            console.log(res);
            navigate('/blog',{
                state: {
                    ref: username
                }
            })
        }).catch((err) => {
            console.log(err);
            alert("Enter Valid Details");
        });

    }
    return <div >
        <div>
            <div id='close-btn'><button onClick={() => {
                navigate('/blog', {
                    state: {
                        ref: username
                    }
                })
            }}>close</button></div>
            <textarea placeholder='write your blog  here' onChange={(e) => {
                setBlog(e.target.value);
                console.log(e.target.value)
            }}></textarea>
        </div>
        <br />
        <button className="login-button" onClick={handelSave}>save</button>
    </div>
}