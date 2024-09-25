// import React from 'react';
// import Sidebar from './SideBar'; // Sidebar component

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        {/* Top Section (Dashboard Header) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Dashboard</h1>
          <div className="space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
              Add New
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Total Sales</h3>
            <p className="text-2xl font-bold text-blue-500 mt-4">$24,500</p>
            <p className="text-sm text-gray-500 mt-2">Compared to last month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">New Users</h3>
            <p className="text-2xl font-bold text-green-500 mt-4">1,200</p>
            <p className="text-sm text-gray-500 mt-2">Growth in users</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Active Deals</h3>
            <p className="text-2xl font-bold text-red-500 mt-4">35</p>
            <p className="text-sm text-gray-500 mt-2">Current active deals</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul>
              <li className="flex justify-between items-center py-3 border-b">
                <span>Deal Closed by John Doe</span>
                <span className="text-gray-500">1 hour ago</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b">
                <span>New User: Jane Smith</span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
              <li className="flex justify-between items-center py-3">
                <span>Product Sale: CRM Pro</span>
                <span className="text-gray-500">3 hours ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
