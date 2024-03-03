import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PublishBook from "./pages/PublishBook";
import ReadBook from "./pages/ReadBook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateBookDets from "./pages/UpdateBook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/publishbook" element={<PublishBook/>}/>
          <Route path="/Readbook" element={<ReadBook/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/UpdateBook" element={<UpdateBookDets/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
