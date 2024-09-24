import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./view/components/Login";
import Home from "./view/screens/Home";
import Register from "./view/components/Register";
import NavBar from "./view/components/NavBar";
import ToDo from "./view/screens/ToDo";
import DealForm from "./view/components/DealForm";
import ResetPass from "./view/components/ResetPass";
import Protected from "./view/protected/Protected";
import Profile from "./view/screens/Profile";
import ContactUs from "./view/screens/ContactUs";
import AboutUs from "./view/screens/AboutUs";
import Footer from "./view/components/Footer";
import Sidebar from "./view/components/SideBar";

import { Context } from "./context/Context";
import { useAuth } from "./context/Context";
import Layout from "./view/components/Layout";
import Landing from "./view/components/Landing";
import Dashboard from "./view/components/Dashboard";

// Example authentication check (replace with your actual logic)
// const isAuthenticated = localStorage.getItem("user");

function App() {
  // const { user } = useAuth();

  // console.log("User app", user);
  return (
    <Context>
      <BrowserRouter>
        {/* {user ? <Sidebar /> : <NavBar />} */}
        <Routes>
          {/* Home page is public */}
          <Route path="/" element={<Landing />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/todo"
            element={
              <Layout>
                <ToDo />
              </Layout>
            }
          />
          <Route
            path="/dealform"
            element={
              <Layout>
                <DealForm />
              </Layout>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <Layout>
                <ResetPass />
              </Layout>
            }
          />

          {/* Public routes */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Protected routes (require authentication) */}
          {/* <Route path="/todo" element={<Protected Component={ToDo} />} /> */}
          {/* <Route
            path="/dealform"
            element={<Protected Component={DealForm} />}
          /> */}
          {/* <Route path="/profile" element={<Layout><Profile /></Layout>} /> */}
          {/* <Route
            path="/resetpassword"
            element={<Protected Component={ResetPass} />}
          /> */}
          {/* <Route path="/sidebar" element={<Protected Component={Sidebar} />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context>
  );
}

export default App;
