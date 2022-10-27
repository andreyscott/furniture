// React
import { useEffect } from "react";
// React Router
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// Components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Shared/SingleProductDetails/SingleProduct";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/NavBar/Sidebar/Sidebar";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import Error from "./components/Error/Error";
import Loading from "./components/Shared/Loading/Loading";

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// React Toolkit
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./store/productsActions";
import { cartActions } from "./store/cartSlice";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import Heading from "./components/Header";
// Initial Value
let init = true;

function App() {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
  const productsError = useSelector((state) => state.products.productsError);
  const items = useSelector((state) => state.cart.items);

  // Load all products from API and get local storage value
  useEffect(() => {
    if (init) {
      init = false;
      dispatch(
        cartActions.setItemsInitialValue({
          savedData: JSON.parse(localStorage.getItem("comfy-sloth-cart")),
        })
      );
      getAllProducts(dispatch, productsError);
      return;
    }
  }, [dispatch, productsError]);
  // Set Selected Products to Local Storage
  useEffect(() => {
    dispatch(cartActions.saveCartItemsToLocalStorage());
  }, [items, dispatch]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Heading />
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route
          path="checkout"
          element={user ? <CheckOut /> : <Navigate to="/" />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
