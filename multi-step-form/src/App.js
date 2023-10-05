import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import PersonalDetails from "./components/PersonalDetails";
import Confirm from "./components/Confirm";
import Success from "./components/Success";
function App() {
  const [formData, setFormData] = useState({
    firstData: "",
    lastData: "",
    emailData: "",
    occu: "",
    city: "",
    bio: "",
  });
  const [click, setClick] = useState(0);

  // We have to pass the props in main file because if we make them in separate files then as soon as we change the file the useState component will refresh itself causing the loss of data
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserForm
            formData={formData}
            setFormData={setFormData}
            click={click}
            setClick={setClick}
          />
        }
      />
      <Route
        path="/personal"
        element={
          <PersonalDetails formData={formData} setFormData={setFormData} />
        }
      />
      <Route
        path="/confirm"
        element={<Confirm formData={formData} setFormData={setFormData} />}
      />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
