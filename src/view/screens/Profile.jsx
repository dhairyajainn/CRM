import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Context'; // Import the useAuth hook

const Profile = () => {
  const { user, loading } = useAuth(); // Get user data from context
  const navigate = useNavigate();

  const handleChangePassword = () => {
    navigate('/resetpassword'); // Navigate to the change password page
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl font-semibold">No user data found. Please log in.</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Profile</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-600">Name:</span>
            <span className="text-lg text-gray-800">{user.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-600">Email:</span>
            <span className="text-lg text-gray-800">{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-600">Role:</span>
            <span className="text-lg text-gray-800 capitalize">{user.role}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-600">Team:</span>
            <span className="text-lg text-gray-800">{user.team || 'N/A'}</span>
          </div>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={handleChangePassword}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
