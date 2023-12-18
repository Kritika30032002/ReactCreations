import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Person} from "@mui/icons-material"


function App()
{
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  </>
}

export default App