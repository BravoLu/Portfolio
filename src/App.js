import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Video from "./components/Videos/Video";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import MyGallery from "./components/Pictures/Pictures";
import Blog from "./components/Blog/Blog";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pictures" element={<MyGallery />} />
          <Route path="/video" element={<Video/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import Gallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

// function App() {
//     const images = [
//         {
//           original: "https://picsum.photos/id/1018/1000/600/",
//           thumbnail: "https://picsum.photos/id/1018/250/150/",
//         },
//         {
//           original: "https://picsum.photos/id/1015/1000/600/",
//           thumbnail: "https://picsum.photos/id/1015/250/150/",
//         },
//         {
//           original: "https://picsum.photos/id/1019/1000/600/",
//           thumbnail: "https://picsum.photos/id/1019/250/150/",
//         },
//       ];

//     return (
//         <div className="my-gallery">
//           <Gallery items={images} />
//         </div>
//       );
// }

// export default App;