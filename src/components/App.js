import Navbar from './Navbar';
import { Routes , Route } from 'react-router-dom'
import React, { useState} from 'react'
import Footer from './Footer';
import Page from './Page'
import Login from './Login'
import SignUpUser from './SignUpUser';
import axios from 'axios';
import ResetPassword from './ResetPassword';
import Groups from './Groups';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    axios.post('http://127.0.0.1:3000/login', formData)
      .then(response => {
        const { sessionId, user } = response.data;
        setSessionId(sessionId);
        setIsAuthenticated(true);
        setUsername(user.username);
        setUserId(user.id);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setError("Invalid username or password");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="">
      <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <Routes>
        {isAuthenticated && 
          <>
            <Route path="/" element={<Page userId={userId}/>}/>
            <Route path="/groups" element={<Groups userId={userId}/>}/>
          </>
        }
        <Route path="/login" element={<Login error={error} setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>} />
        <Route path="/signup" element={<SignUpUser setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/reset_password' element={<ResetPassword />}/>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
