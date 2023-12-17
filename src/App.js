import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/home";
import Account from "./components/Customer/account";
import Book from "./components/Customer/book";
import AddBook from "./components/Customer/addbook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/account" element = {<Account/>} />
        <Route path="/book" element = {<Book/>} />
        <Route path="/addbook" element = {<AddBook/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
