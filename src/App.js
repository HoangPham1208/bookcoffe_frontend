import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/Utils/protected";

import Home from "./components/HomePage/home";
import Account from "./components/Customer/account";
import NewBlog from "./components/HomePage/newblog";
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

        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<Account />} />
          <Route path="/newBlog" element={<NewBlog />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
