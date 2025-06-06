import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const uid = "krish";
  const password = "123";
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session === 'active') {
      setIsLoggedIn(true);
    }else{
      navigate('/');
    }
  }, []);

  const handleLogin = (username, userPassword) => {
    if (username === uid && userPassword === password) {
      localStorage.setItem('session', 'active');
      setIsLoggedIn(true);
      navigate('/HomePage');
    } else {
      navigate('/'); // redirect to login if session invalid
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setIsLoggedIn(false);
    navigate('/');
  };

  const HomePage = () => (
    <>
      <NavBar onSend={setSearch} onLogout={handleLogout} />
      <div
        className="container"
      >
        <Home searchData={search} setSearchData={setSearch} />
      </div>
    </>
  );

  return (
    <Routes>
      <Route path='/' element={<LoginForm onLogin={handleLogin} />} />
      <Route path='SignUp' element={<SignupForm />} />
      {isLoggedIn && <Route path='HomePage' element={<HomePage />} />}
    </Routes>
  );
}

export default App;