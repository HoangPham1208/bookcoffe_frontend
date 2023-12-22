import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/Utils/protected";
import { Navigate } from "react-router-dom";

import Home from "./components/Guest/home";
import NewBlog from "./components/Guest/newblog";
// Customer 
import HomeUser from "./components/Customer/homeUser";
import Cart from "./components/Customer/cart";
import Account from "./components/Customer/account";

// Staff
import OrderDrink from "./components/Staff/orderDrink";
import AddDrink from "./components/Staff/addDrink";
import OrderBook from "./components/Staff/orderBook";

import Book from "./components/book";
import AddBook from "./components/addbook";
import MyTable from "./components/table";
import Order from "./components/order";

// Admin
import Manage from "./components/Admin/manage";
import Voucher from "./components/Admin/voucher";
import Staff from "./components/Admin/staff";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route element={<PrivateRoutes />}>
          {/* Customer */}
          <Route path="/homeUser" element={<HomeUser />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          {/* Staff */}
          <Route path="/staff/order/drinks" element={<OrderDrink />} />
          <Route path="/staff/order/drinks/add" element={<AddDrink />} />
          <Route path="/staff/order/books" element={<OrderBook />} />
          {/* Don't know what to do with this route, do it later */}
          <Route path="/book" element={<Book />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/table" element={<MyTable />} />
          <Route path="/order" element={<Order />} />
          {/* Admin - inherited from staff */}
          <Route path="/manage" element={<Manage />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/staff" element={<Staff />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
