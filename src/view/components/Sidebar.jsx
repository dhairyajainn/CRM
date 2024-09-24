import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import { useState } from 'react';
const Sidebar = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // e.preventDefault()
    logout();
    localStorage.removeItem('user');
    // setIsAuthenticated(false);
    navigate('/');
  };
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 text-center text-xl font-bold border-b border-gray-700">
        CRM Dashboard
      </div>
      <nav className="flex-grow">
        <ul className="mt-4">
          <li className="p-3 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <Link to="/todo">To-Do</Link>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <Link to="/dealform">Deal Form</Link>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <Link to="/resetpassword">Reset Password</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-red-500 p-2 rounded hover:bg-red-600" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
