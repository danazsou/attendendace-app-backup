import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { About } from "./pages/about";
import { Portal } from "./pages/portal";
import { Navbar } from "./components/navbar";
import { Create } from "./pages/create";
import {CreateClass} from "./pages/create-class";
import {ClassList} from "./pages/class-list";

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
          <Route path="/create" element={<Create />} />
          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/class-list" element={<ClassList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
