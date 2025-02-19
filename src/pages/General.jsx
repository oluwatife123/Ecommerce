import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import AllInOne from './AllInOne';
import OrderPage from './OrderPage';
import Home from "./Home";
import Register from '../component/Mylogin/Register';
import Login from '../component/Mylogin/Login';
import About from './About';

const General = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  if (loading) {
    return <p className="text-center text-lg font-bold mt-10">Loading...</p>;
  }

  return (
    <div>
      {/* Navigation bar always visible */}
      <NavBar />

      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<AllInOne />} />
            <Route path="/orderpage" element={<OrderPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/register" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>

      {user && <Footer />}

      {/* Logout Button */}
      {user && (
        <div className='md:w-[10%] bg-[red] py-0 shadow-2xl pl-0 rounded fixed bottom-0'>
          <button onClick={handleLogout} className='text-white border border-white hover:bg-white hover:text-black font-bold p-2 rounded w-full'>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default General;
