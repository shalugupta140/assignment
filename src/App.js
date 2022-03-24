import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Order from "./pages/logout";
import Faq from "./pages/Faq";
import Edit from "./pages/Edit";
import Logout from "./pages/logout";
import Home from "./pages/Home";
import Folders from "./pages/Folders";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/order" element={<Order />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
