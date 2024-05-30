import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [isLoading,setIsLoading] = useState(false) // New state for loading
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });
    
    const [err,setError] = useState(null)

    const navigate  = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Corrected here
        try {
            setIsLoading(true)
            await axios.post('https://blog-api-side.onrender.com/api/auth/register', inputs);
            // await axios.post('http://localhost:8800/api/auth/register', inputs);
            navigate('/login')
        } catch (err) {
            setError(err.response.data)
            // console.log(err.response.data);
        }finally{
            setIsLoading(false) // Set loading to false after submission
        }
    };

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='username' name='username' onChange={handleChange} />
                <input required type="email" placeholder='email' name='email' onChange={handleChange} />
                <input required type="password" placeholder='password' name='password' onChange={handleChange} />  {/* Corrected here */}
                <button className='btn' onClick={handleSubmit}>{isLoading ? <span className="spinner"></span> :'Register'}</button>
                {err && <p>{err}</p>}
                <span>Do you have an account?
                    <br />
                    <Link to='/login'>Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
