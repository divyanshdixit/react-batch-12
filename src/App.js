import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Trello from "./components/Trello/index";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";

import Post from "./components/Pages/Post";
import Contact from "./components/Pages/Contact";
import Layout from "./components/Layout";
import TrelloLayout from "./components/TrelloLayout";
import Users from "./components/Users";
import UserAdmin from "./components/UserAdmin";
import Products from "./components/Products";

import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import RenderProdCategory from "./components/RenderProdCategory";
import Profile from "./components/Profile";
import {AuthProvider} from "./components/auth";
import Login from "./components/Login";

const LazyAboutpage = React.lazy(() => import("./components/Pages/About"));
const ProductsLazyPage = React.lazy(() => import('./components/Products'));
// import return the promise, which is comverted into the module that contains default exported component

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<React.Suspense fallback={'loading....'}>
            <LazyAboutpage />
          </React.Suspense>} />
          <Route path="post" element={<Post />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users/:id" element={<Users />} />
          {/* react first match for more specific route */}
          <Route path="users/admin" element={<UserAdmin />} />
          <Route path="products" element={<React.Suspense fallback={'loading...'}>
          <ProductsLazyPage/>
            </React.Suspense>}>
            {/* index route share the path of parent route  */}
            <Route index element={<FeaturedProducts />} />
            {/* <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} /> */}
            <Route path=":prodCategory" element={<RenderProdCategory/>} />
          </Route>
          <Route path="login"  element={<Login/>}/>
          <Route path="profile" element={<AuthProvider>
            <Profile/>
          </AuthProvider>} />
          <Route path="trello" element={<TrelloLayout />}>
            <Route index element={<Post trello />} />
            {/* path will be /trello/category */}
            <Route path=":category" element={<Trello />} />
          </Route>
        </Route>
        {/* lazy load import: technique in which component those required on home page will import later */}
        {/* react suspense and dynamic imports => we need defautl export of component */}

        {/* <div className="App" style={{padding:20}}>
        <Trello/>
      </div> */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
