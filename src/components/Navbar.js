import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
import text from '../scripts.json';
import Button from "react-bootstrap/Button";
import { languageContext } from "./Button/LanguageButton";
import { Link } from "react-router-dom";
import { CgFolder, CgYoutube } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument, CgImage } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const { language, toggleLanguage } = useContext(languageContext);

  const [showDropdown, setShowDropdown] = useState(false);

  // 处理下拉框的显示与隐藏
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {text[language].home}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {text[language].about}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="">
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {text[language].project}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {text[language].resume}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://bravolu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <CgFolder style={{ marginBottom: "2px" }} /> {text[language].blog}
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              title={text[language].picture}
              show={showDropdown} // 控制下拉框的显示
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/Pictures/xinjiang"
                onClick={() => updateExpanded(false)}
              >{text[language].xinjiang}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/Pictures/indonesia"
                onClick={() => updateExpanded(false)}
              >{text[language].indonesia}</NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Pictures/thailand"
                onClick={() => updateExpanded(false)}
              >{text[language].thailand}</NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Pictures/singapore"
                onClick={() => updateExpanded(false)}
              >{text[language].singapore}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/video"
                onClick={() => updateExpanded(false)}
              >
                <CgYoutube style={{ marginBottom: "2px" }} /> {text[language].video}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button className="fixed-size-button" onClick={toggleLanguage}>
                {text[language].language}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
