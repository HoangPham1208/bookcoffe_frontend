import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/home";
import Account from "./components/Customer/account";
// Staff
import Book from "./components/Staff/book";
import AddBook from "./components/Staff/addbook";
import MyTable from "./components/Staff/table";
import Order from "./components/Staff/order";

// Admin
import Voucher from "./components/Admin/voucher";
import Staff from "./components/Admin/staff";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/account" element = {<Account/>} />
        {/* Staff */}
        <Route path="/book" element = {<Book/>} />
        <Route path="/addbook" element = {<AddBook/>} />
        <Route path="/table" element = {<MyTable/>} />
        <Route path="/order" element = {<Order/>} />
        {/* Admin */}
        <Route path="/voucher" element = {<Voucher/>} />
        <Route path="/staff" element = {<Staff/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
