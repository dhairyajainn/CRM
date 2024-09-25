import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import { FaHome, FaUser, FaClipboardList, FaHandshake, FaUsers, FaLock } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-gray-100 shadow-lg">
      {/* Sidebar Header */}
      <div className="p-5 text-center text-2xl font-semibold bg-gray-800">
        <span className="text-purple-400">CRM</span> Dashboard
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center p-3 text-gray-300 rounded hover:bg-gray-700">
              <FaHome className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center p-3 text-gray-300 rounded hover:bg-gray-700">
              <FaUser className="mr-3" />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/todo" className="flex items-center p-3 text-gray-300 rounded hover:bg-gray-700">
              <FaClipboardList className="mr-3" />
              To-Do
            </Link>
          </li>
          <li>
            <Link to="/dealform" className="flex items-center p-3 text-gray-300 rounded hover:bg-gray-700">
              <FaHandshake className="mr-3" />
              Deal Form
            </Link>
          </li>
          <li className="flex items-center p-3 text-gray-300 rounded hover:bg-gray-700">
            <FaUsers className="mr-3" />
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resetpassword" className="flex items-center p-3 text-gray-300 rounded hover:bg-gray-700">
              <FaLock className="mr-3" />
              Reset Password
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button 
          className="flex items-center justify-center w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-200" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
