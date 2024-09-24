import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../../services/authService";

const ResetPass = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  // const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await reset(email, password);
        alert("Password has been reset successfully!");
        navigate("/login");
      } catch (error) {
        alert("Failed to reset password. Please try again.", error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Reset Password
        </h2>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="email"
              >
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
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200"
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2" htmlFor="otp">
                Old Password
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="otp"
                type="text"
                placeholder="Enter your OTP"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="new-password"
              >
                New Password
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Remembered your password?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
