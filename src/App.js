import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/Utils/protected";
import { Navigate } from "react-router-dom";

import Home from "./components/Guest/home";
import NewBlog from "./components/Guest/newblog";
// Customer 
import HomeUser from "./components/Customer/homeUser";
import Account from "./components/Customer/account";

// Staff
import Book from "./components/Staff/book";
import AddBook from "./components/Staff/addbook";
import MyTable from "./components/Staff/table";
import Order from "./components/Staff/order";

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
          <Route path="/account" element={<Account />} />
          {/* Staff */}
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
