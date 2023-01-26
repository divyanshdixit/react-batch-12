import "./App.css";
import Basic from "./components/Basic";
import IfElseComponent from "./components/IfElseComponent";
import Forms from "./components/Forms";
import Heading from "./components/Heading";
// import Restraunt from './components/Restraunt';
import Parent, { uContext } from "./components/Parent";
import Refs from "./components/Refs";
import MyParent from "./components/MyParent";
import HOC from "./components/HOC";
import HoverCounter from "./components/HoverCounter";
import LeaveCounter from "./components/LeaveCounter";
import ClickCounter from "./components/ClickCounter";
import FetchApi from "./components/FetchApi";
import Counter from "./components/Counter";
import UseCallbackHook from "./components/UseCallbackHook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./route-components/About";
import ErrorNotFound from "./route-components/ErrorNotFound";
import Navbar from "./route-components/Navbar";
import Category from "./components/Category";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MyParent />} />
        <Route path="about" element={<About /> } />
        <Route path="services" element={<Service/>}>
          <Route path="/:category" element={<Category/>}/>
        </Route>
        <Route path="*" element={<ErrorNotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
