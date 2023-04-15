import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { About } from "./pages/about";
import { Portal } from "./pages/portal";
import { Navbar } from "./components/navbar";
import {CreateClass} from "./pages/create-class";
import {StudentProfile} from "./pages/student-profiles";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/portal" element={<Portal />} />

          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/student-profiles" element={<StudentProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
