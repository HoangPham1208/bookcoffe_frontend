import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/Utils/protected";
import { Navigate } from "react-router-dom";

import Home from "./components/Guest/home";
import NewBlog from "./components/Guest/newblog";
// Customer 
import HomeUser from "./components/Customer/homeUser";
import Account from "./components/Customer/account";

// Staff
import OrderDrink from "./components/Staff/orderDrink";
import AddDrink from "./components/Staff/addDrink";
import OrderBook from "./components/Staff/orderBook";
import OrderBookBranch from "./components/Staff/orderBookBranch";
import OrderBookHome from "./components/Staff/orderBookHome";
import OrderLocation from "./components/Staff/orderLocation";
import OrderLocationHistory from "./components/Staff/historyLocation";

// Manager
import HomeManager from "./components/Manager/homeManager";
import BookManager from "./components/Manager/book";
import BookDetails from "./components/Manager/bookDetail";
import AddCopy from "./components/Manager/addCopy";
import OrderBookManager from "./components/Manager/orderBook";
import AddBookOrderManager from "./components/Manager/addBookOrder";
import OrderBookBranchManager from "./components/Manager/orderBookBranch";
import OrderBookHomeManager from "./components/Manager/orderBookHome";
import Voucher from "./components/Manager/voucher";
import Staff from "./components/Manager/staff";
import OrderDrinkManager from "./components/Manager/orderDrink";
import AddDrinkManager from "./components/Manager/addDrink";
import OrderLocationManager from "./components/Manager/orderLocation";
import OrderLocationHistoryManager from "./components/Manager/historyLocation";
// Admin
import HomeAdmin from "./components/Admin/homeAdmin";
import BookList from "./components/Admin/BookList";
import AddBook from "./components/Admin/addBook";
import BookDetailsModify from "./components/Admin/bookDetailModify";
import MenuDrink from "./components/Admin/menuDrink";
import AddBookOrder from "./components/Staff/addBookOrder";
import BookAdmin from "./components/Admin/book";
import AddCopyAdmin from "./components/Admin/addCopy";
import BookDetailAdmin from "./components/Admin/bookDetailAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route element={<PrivateRoutes />}>
          {/* Customer */}
          <Route path="/homeUser" element={<HomeUser />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/account" element={<Account />} />
          {/* Staff */}
          <Route path="/staff/order/drinks" element={<OrderDrink />} />
          <Route path="/staff/order/drinks/add" element={<AddDrink />} />
          <Route path="/staff/order/books" element={<OrderBook />} />
          <Route path="/staff/order/books/branch" element={<OrderBookBranch />} />  
          <Route path="/staff/order/books/home" element={<OrderBookHome />} />
          <Route path="/staff/order/books/add" element={<AddBookOrder />} />
          <Route path="/staff/order/locations" element={<OrderLocation />} />
          <Route path="/staff/order/locations/history" element={<OrderLocationHistory />} />
          {/* Manager */}
          <Route path="/manager" element={<HomeManager />} />
          <Route path="/manager/books" element={<BookManager />} />
          <Route path="/manager/books/:id" element={<BookDetails />} />
          <Route path="/manager/books/:id/addcopy" element={<AddCopy />} />
          <Route path="/manager/order/books" element={<OrderBookManager />} />
          <Route path="/manager/order/books/add" element={<AddBookOrderManager />} />
          <Route path="/manager/order/books/branch" element={<OrderBookBranchManager />} />
          <Route path="/manager/order/books/home" element={<OrderBookHomeManager />} />
          <Route path="/manager/vouchers" element={<Voucher />} />
          <Route path="/manager/staff" element={<Staff />} />
          <Route path="/manager/order/drinks" element={<OrderDrinkManager />} />
          <Route path="/manager/order/drinks/add" element={<AddDrinkManager />} />
          <Route path="/manager/order/locations" element={<OrderLocationManager />} />
          <Route path="/manager/order/locations/history" element={<OrderLocationHistoryManager />} />
          {/* Admin - inherited from staff */}
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/bookList" element={<BookList />} />
          <Route path="/admin/bookList/AddBook" element={<AddBook />} />
          <Route path="/admin/bookList/:id" element={<BookDetailsModify />} />
          <Route path="/admin/menuDrink" element={<MenuDrink />} />
          <Route path="/admin/branch/:id/books" element={<BookAdmin />} />
          <Route path="/admin/branch/:id/books/:id/addcopy" element={<AddCopyAdmin />} />
          <Route path="/admin/branch/:id/books/:id" element={<BookDetailAdmin />} />


        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
