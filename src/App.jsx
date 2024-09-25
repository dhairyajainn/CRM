import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

import LoginPage from "./view/components/Login";
import Register from "./view/components/Register";
import ToDo from "./view/screens/ToDo";
import DealForm from "./view/components/DealForm";
import ResetPass from "./view/components/ResetPass";
import Profile from "./view/screens/Profile";
import ContactUs from "./view/screens/ContactUs";
import AboutUs from "./view/screens/AboutUs";
import Layout from "./view/components/Layout";
import Landing from "./view/components/Landing";
import Dashboard from "./view/components/Dashboard";
import Contact from "./view/components/Contact";

function App() {
  return (
    <Context>
      <BrowserRouter>
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
            path="/contact"
            element={
              <Layout>
                <Contact />
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
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
