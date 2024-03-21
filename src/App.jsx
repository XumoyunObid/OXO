import { Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "./Layout/MainLayout/MainLayout";
import UserLayout from "./Layout/UserLayout/UserLayout";

// Pages
import Home from "./Pages/Home/Home";
import CreateProducts from "./Pages/CreateProducts/CreateProducts";
import ProductsDetail from "./Pages/ProductDetail/ProductsDetail";
import Filter from "./Pages/Filter/Filter";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Messages from "./Pages/Messages/Messages";
import Rate from "./Pages/Profile/Components/Rate";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="create-products" element={<CreateProducts />} />
          <Route path="products/:id" element={<ProductsDetail />} />
          <Route path="category/:datakey" element={<Filter />} />
          <Route path="filter" element={<Filter />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="messages" element={<Messages />} />
          <Route path="rate" element={<Rate />} />
          <Route path="login" element={<Login />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="profile" element={<UserLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
