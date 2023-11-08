import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./component/AppNav.jsx";
import Home from "./page/Home.jsx";
import Project from "./page/Project.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Service from "./page/Service.jsx";
import Blog from "./page/Blog.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
