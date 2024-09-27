import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex bg-gray-100">
        <aside className="w-64 bg-gray-800 text-white">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          </div>
          <nav className="mt-5">
            <ul>
              <li>
                <Link
                  to="/admin"
                  className="block py-2.5 px-4 rounded hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="block py-2.5 px-4 rounded hover:bg-gray-700"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block py-2.5 px-4 rounded hover:bg-gray-700"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="block py-2.5 px-4 rounded hover:bg-gray-700"
                >
                  Reports
                </Link>
              </li>
              <li>
                <button
                  className="block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <div className="flex items-center">
                <input
                  type="text"
                  className="border rounded px-3 py-1"
                  placeholder="Search..."
                />
                <button className="ml-3 bg-blue-500 text-white px-4 py-2 rounded">
                  Search
                </button>
              </div>
            </div>
          </header>

          <main className="flex-grow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg">Users</h3>
                <p className="mt-2 text-gray-600">Total: 500</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg">Sales</h3>
                <p className="mt-2 text-gray-600">Total: $50,000</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg">Messages</h3>
                <p className="mt-2 text-gray-600">Total: 150</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
