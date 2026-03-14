import {useAuth} from '../Providers/AuthProvider'

import { useNavigate } from 'react-router-dom';
import { useState

 } from 'react';
const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(credentials.username, credentials.password);
    
    if (result.success) {
      // Note: Make sure this path matches your route exactly! 
      // Earlier you mentioned "/collection", here you wrote "/collections"
      navigate("/collection"); 
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={credentials.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;