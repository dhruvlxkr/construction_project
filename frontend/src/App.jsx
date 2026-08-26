import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/frontend/Home";
import About from "./component/frontend/About";
import Service from "./component/frontend/Services";
import Project from "./component/frontend/Project";
import Blog from "./component/frontend/Blog";
import Contactus from "./component/frontend/Contactus";

import "./assets/css/style.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
           <Route path="/project" element={<Project></Project>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
             <Route path="/contact" element={<Contactus></Contactus>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
