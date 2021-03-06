import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserSession } from "../src/redux/actions";
import "./App.css";
import Catalogo from "./Components/Catalogo";
import Product from "./Components/Product.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import EditProduct from "./Components/FormCRUD/EditProduct.jsx";
import FormCrud from "./Components/FormCRUD/FormCrud";
import UserCrud from "./Components/FormCRUD/UserCrud";
import FormCategory from "./Components/FormCategory";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import Admin from "./Components/Admin";
import MiPerfil from "./Components/MiPerfil";
import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";
import OrdersTable from "./Components/OrderTable/OrdersTable";
import CreateProduct from './Components/FormCRUD/CreateProduct';
import Productok from './Components/ProductOk/Productok';
import RegistrationForm from './Components/FormCRUD/CreateUser';
import Userok from './Components/UserOk/UserOk';
import Checkout from './Components/Checkout';
import Buyok from "./Components/BuyOk/Buyok";
import EditProductOk from "./Components/EditProductOk/EditProductOk";

function App() {
  const dispatch = useDispatch()
  const buttonUp = document.getElementById("button-up");

  buttonUp.addEventListener("click", scrollUp);

  function scrollUp() {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, scroll - (scroll / 10));
      buttonUp.style.transform = "scale(0)";
    }
  }

  window.onscroll = () => {
    (document.documentElement.scrollTop > 500) ? buttonUp.style.transform = "scale(1)" : buttonUp.style.transform = "scale(0)";
  };
  dispatch(getUserSession());
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />

      {/* /CART */}
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/cart/checkout" component={Checkout} />
      <Route exact path="/cart/buyok" component={Buyok} />

      <Route exact path="/category" component={FormCategory} />
      <Route exact path="/formcrud" component={FormCrud} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/products/:id" render={(match) => <Product match={match} />} />
      <Route exact path="/products" component={Catalogo} />
      <Route exact path="/users" component={RegistrationForm} />
      <Route exact path="/users/userok" component={Userok} />
      <Route exact path="/users/passwordReset" component={PasswordReset} />

      {/* RUTAS DEL ADMINISTRADOR */}
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/users" component={UserCrud} />
      <Route exact path="/admin/categories" component={FormCategory} />
      <Route exact path="/admin/edit/product/:id" render={(match) => <EditProduct match={match} />} />
      <Route exact path="/admin/myProducts" component={FormCrud} />
      <Route exact path="/admin/newProduct" component={CreateProduct} />
      <Route exact path="/admin/orders" component={OrdersTable} />
      <Route exact path="/admin/productok" component={Productok} />
      <Route exact path="/auth/me" component={MiPerfil} />
      <Route exact path="/admin/myProducts/editProductsOk" component={EditProductOk} />
    </div>
  );
}

export default App;
