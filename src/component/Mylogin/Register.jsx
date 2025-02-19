// src/Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth, createUserWithEmailAndPassword } from '../../firebase-config'; // Adjust path if necessary
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
      setEmail('');
      setPassword('');
      navigate('/home'); // Redirect to the home page or another route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <div className=' bg-[grey] w-[100%] h-[100vh]'>

    <div className=' w-[100%] pt-[50%] sm:pt-[30%] lg:pt-[10%] p-4 flex justify-center '>

{/* main register div */}
<div className='border border-gray-300 shadow-2xl rounded w-full lg:w-[30%] p-4'>
<h2 className='text-[red] text-center font-bold text-lg mb-2 mt-5'>Register</h2>
<div className='flex justify-center mb-5'>
<hr className='text-[blue] w-[15%] rounded h-[1vh] bg-[red] text-center' />
</div>

{error && <p style={{ color: 'red' }}>{error}</p>}
<form onSubmit={handleRegister}>
  <div>
    <label className='font-semibold text-lg text-[red]'>Email:</label>
    <input
      className='border p-2 w-full mb-5'
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div>
    <label className='font-semibold text-lg text-[red]'>Password:</label>
    <input
      className='border p-2 w-full mb-5 '
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
  <div className='text-center'>
  <div className='flex justify-center'>
    <button type="submit" className='hover:text-[1.1rem] bg-red-500 text-white p-2 mt-2 hover:bg-red-800 rounded'>
      Register
    </button>
  </div>

  <p className='mt-2'>
      Already have an account 
      <Link to='/login' className="text-lg text-blue-600 animate-bounce"> login here</Link>
      
      
    </p>
  </div>
  
  
</form>

</div>

</div>

    </div>
   
    
    </>
  );
};

export default Register;

