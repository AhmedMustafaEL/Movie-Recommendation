import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext/LoginContext";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { setUserName } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        const storedName = localStorage.getItem("name");

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem("currentUser", storedName);  // Set current user in localStorage
            setUserName(storedName);  // Update context
            navigate("/Dashboard");  // Redirect to dashboard
        } else {
            setErrorMessage("Invalid email or password.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit" className="login-btn">Login</button>
                <p>
                    Don't have an account? <Link to="/Register">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
