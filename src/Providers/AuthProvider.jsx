import { createContext, useContext, useState, useEffect } from 'react';
//import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState( () => {
    const savedToken = localStorage.getItem('token');
    console.log("Checking LocalStorage for Token:", savedToken); // DEBUG
    return savedToken || null;

  });
  const [user, setUser] = useState(() => {
    const savedToken = localStorage.getItem('token');
    // If a token exists in storage, start the app with a user already set
    return savedToken ? { authenticated: true } : null;
  });
  const [loading, setLoading] = useState(true);

  // Configure axios to include the token in all future requests
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //localStorage.setItem('token', token);
      // Optional: Decode JWT here to set user info (e.g., using jwt-decode)
      setToken(storedToken);
      setUser({ authenticated: true });
    } else {
      //delete axios.defaults.headers.common['Authorization'];
      //localStorage.removeItem('token');
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      // Your Spring Boot /api/auth/login endpoint
      // const response = await axios.post('/api/auth/login', { username, password });
      // const { jwt } = response.data;
      //setToken(jwt);
      const fakeToken = "this-is-a-fake-jwt";
      setToken(fakeToken);
      setUser({ name: "Test User", authenticated: true });
      localStorage.setItem('token', fakeToken);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Login failed' };

    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };



  return (
    <AuthContext value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};