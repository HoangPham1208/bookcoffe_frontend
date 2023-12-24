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

// Manager
import HomeManager from "./components/Manager/homeManager";
import Book from "./components/Manager/book";
import BookDetails from "./components/Manager/bookDetail";
import AddCopy from "./components/Manager/addCopy";
import Order from "./components/Manager/order";
import Voucher from "./components/Manager/voucher";
import Staff from "./components/Manager/staff";

// Admin
import HomeAdmin from "./components/Admin/homeAdmin";
import Branch from "./components/Admin/branch";
import AddBook from "./components/Admin/addbook";
import MyLocation from "./components/Admin/location";

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
          {/* Manager */}
          <Route path="/manager" element={<HomeManager />} />
          <Route path="/manager/books" element={<Book />} />
          <Route path="/manager/books/:id" element={<BookDetails />} />
          <Route path="/manager/books/:id/addcopy" element={<AddCopy />} />
          <Route path="/manager/orders" element={<Order />} />
          <Route path="/manager/vouchers" element={<Voucher />} />
          <Route path="/manager/staff" element={<Staff />} />
          {/* Admin - inherited from staff */}
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/branch" element={<Branch />} />
          <Route path="/admin/books" element={<Book />} />
          <Route path="/admin/books/add" element={<AddBook />} />
          <Route path="/admin/locations" element={<MyLocation />} />
          <Route path="/admin/orders" element={<Order />} />
          <Route path="/admin/vouchers" element={<Voucher />} />
          <Route path="/admin/staff" element={<Staff />} />

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
