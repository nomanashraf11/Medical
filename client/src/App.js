import "antd/dist/antd.min.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signup />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
