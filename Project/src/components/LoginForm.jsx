import { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(userId, password)
  };

  return (
    <div className="form-body">
      <div className="background-circle-orange" data-aos="fade-down"></div>
      <div className="form-box" data-aos="fade-up">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userId"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
            <label htmlFor="userId">User ID</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <p className="m-2 mb-0">Don't have an account?</p>
            <Link className="m-2 forgot-password" to="/SignUp">Sign up!!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;