import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../context/authContext';
const Login = () => {
    const [isLoading,setIsLoading] = useState(false) // New state for loading
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
           await login(inputs)
            navigate('/')
        } catch (err) {
            setError(err.response.data)
            // console.log(err.response.data);
        }finally{
            setIsLoading(false) // Set loading to false after submission
        }
    };
    
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username' name='username' onChange={handleChange} />
                <input type="password" placeholder='password' name='password' onChange={handleChange} />
                <button className='btn' onClick={handleSubmit} >{isLoading ? <span className="spinner"></span> :'Login'}</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account?
                    <br></br>
                    <Link to='/register'>Resgiter</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;