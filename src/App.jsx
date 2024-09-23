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

import {Context} from "./context/Context";

function App() {

  return (
    <Context>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/todo" element={<Protected Component={ToDo} />} />
          <Route
            path="/dealform"
            element={<Protected Component={DealForm} />}
          />
          <Route path="/profile" element={<Protected Component={Profile} />} />
          <Route
            path="/resetpassword"
            element={<Protected Component={ResetPass} />}
          />
          {/* <Route path='/resetpassword' element={<ResetPass />} /> */}
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
