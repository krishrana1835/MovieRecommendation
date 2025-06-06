import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';

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
    } else {
      navigate('/');
    }
  }, []);

  const handleLogin = (username, userPassword) => {
    if (username === uid && userPassword === password) {
      localStorage.setItem('session', 'active');
      setIsLoggedIn(true);
      navigate('/HomePage');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Layout with shared NavBar for HomePage and sub-pages
  const HomeLayout = () => (
    <>
      <NavBar onSend={setSearch} onLogout={handleLogout} />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
      <Route path="SignUp" element={<SignupForm />} />
      {isLoggedIn && (
        <Route path="HomePage" element={<HomeLayout />}>
          <Route index element={<Home searchData={search} setSearchData={setSearch} />} />
          <Route path="Favorites" element={<Favorites />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;