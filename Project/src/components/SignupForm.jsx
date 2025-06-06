import { useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';

function SignupForm() {
    const [fname, setFname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        if (password === confirmPassword) {
            alert("Complete");
            // Optionally clear form
            setFname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } else {
            setError("Password and Confirm Password do not match");
        }
    };

    return (
        <>
            <div className="background-circle-orange" data-aos="fade-down"></div>

            <div className="form-box" data-aos="fade-up">
                <h2 className="text-center mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="fname"
                            name="fname"
                            placeholder="First Name"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                        <label htmlFor="fname">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email">E-mail</label>
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

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        <p className="m-2 mb-0">Already have an account?</p>
                        <Link className="m-2 forgot-password" to="/">Login!!</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignupForm;