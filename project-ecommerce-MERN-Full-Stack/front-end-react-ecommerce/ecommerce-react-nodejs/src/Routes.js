import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Home from "./core/Home";
import Menu from "./core/Menu";
import AdminDashboard from "./user/AdminDashboard";
import Dashboard from "./user/Dashboard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AddCategory from "./admin/category/AddCategory";
import AddProduct from "./admin/product/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import ListOrders from "./admin/order/ListOrders";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/shop" exact component={Shop} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/order" exact component={ListOrders} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
