import React, { useState } from 'react';
import './reg.css'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (name.trim() === '') {
            errors.name = 'Name is required';
        }

        if (email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (password === '') {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (confirmPassword === '') {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            // registration logic to be implemented
            // console.log(name,email,password)
            axios.post('https://blog-backend-sunit.onrender.com/reg', {
                name: name,
                email: email,
                password: password
            }).then((res )=>{ console.log(res);
                navigate('/')
            }).catch(err => console.log(err.message))
            // .then((res) => {
            //     console.log(res);
            //     navigate('/')
            // })

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrors({});
        }
    };

    return (
        <div className="registration-container">
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 0.5 }}>

                <h2>Registration</h2>
                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label >Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label >Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        {errors.confirmPassword && (
                            <span className="error">{errors.confirmPassword}</span>
                        )}
                    </div>
                    <button type="submit" className="register-button">
                        Register
                    </button>
                </form>
                <br /><br />
                <p id='login' onClick={() => { navigate('/') }}>go to login page</p>

            </motion.div>
        </div>
    );
};


