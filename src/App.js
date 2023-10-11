import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Video from "./components/Videos/Video";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import MyGallery from "./components/Pictures/Pictures";
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
import { LanContextProvider } from "./components/Button/LanguageButton"

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanContextProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/pictures/xinjiang" element={<MyGallery dir="xinjiang"/>} />
            <Route path="/pictures/indonesia" element={<MyGallery dir="indonesia"/>} />
            <Route path="/pictures/singapore" element={<MyGallery dir="singapore"/>} />
            <Route path="/pictures/thailand" element={<MyGallery dir="thailand"/>} />
            <Route path="/pictures/srilanka" element={<MyGallery dir="srilanka"/>} />           
            <Route path="/video" element={<Video />} />
            <Route path="/images" />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanContextProvider>
  );
}

export default App;
