import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/Context';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  // const {user} = useAuth()
  // const {isAuthenticated, setIsAuthenticated} = useState(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    } catch (error) {
      alert(error);
    }
  };
function sdf() {
  sdf
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
          {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            <Link to="/resetpassword" className="text-blue-500 hover:underline">
              Reset Password
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
