import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
