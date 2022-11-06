import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import React, { useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="products" element={<Products />}>
          <Route
            path="search"
            element={
              <ErrorBoundary>
                <Search />
              </ErrorBoundary>
            }
          />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
  function LoginContext() {
    const [showProfile, setShowProfile] = useState(false);
    const [username, setUsername] = useState("");
    return (
      <div className="App">
        <LoginContext.Provider
          value={{ username, setUsername, setShowProfile }}
        >
          {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;
