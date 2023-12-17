import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/home";
import Account from "./components/Customer/account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/account" element = {<Account/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
