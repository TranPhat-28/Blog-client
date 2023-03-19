import { useState } from "react";
import { Link } from "react-router-dom";
import './LoginForm.css';

const LoginForm = () => {

    // Form data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Handle login
        console.log(username, password);
    }

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Login to your account</h2>

                <label htmlFor="username" className="form-label">Username</label>
                <input type='text' name='username' className="form-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                <label htmlFor="password" className="form-label">Password</label>
                <input type='password' name='password' className="form-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button className="button">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;