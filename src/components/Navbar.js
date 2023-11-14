import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import text from '../scripts.json';
import Button from "react-bootstrap/Button";
import { languageContext } from "./Button/LanguageButton";
import { Link } from "react-router-dom";
import { CgImage, CgYoutube } from "react-icons/cg";
import NotionIcon from "./Icon/notion";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import GSWIcon from "./Icon/gswIcon";

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
          BravoLu
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="nav-icon" />
                <span className="nav-text">
                  {text[language].home}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className="nav-icon" />
                <span className="nav-text">
                  {text[language].about}
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-text">
                  {text[language].project}
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument className="nav-icon" />
                <span className="nav-text">
                  {text[language].resume}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.notion.so/BravoLu-5ea3a398f8824c8488e3da2be0133ff4?pvs=4" target="_blank" rel="noreferrer">
                <NotionIcon className="nav-icon" />
                <span className="nav-text">
                  {text[language].blog}
                </span>
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              title={
                <><CgImage className="nav-icon" /><span className="nav-text">{text[language].picture}</span></>
              }
              show={showDropdown} // 控制下拉框的显示
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/Pictures/xinjiang"
                onClick={() => updateExpanded(false)}
                className="navdropdown-item"
              >{text[language].xinjiang}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/Pictures/indonesia"
                onClick={() => updateExpanded(false)}
                className="navdropdown-item"
              >{text[language].indonesia}</NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Pictures/thailand"
                onClick={() => updateExpanded(false)}
                className="navdropdown-item"
              >{text[language].thailand}</NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Pictures/singapore"
                onClick={() => updateExpanded(false)}
                className="navdropdown-item"
              >{text[language].singapore}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Pictures/srilanka"
                onClick={() => updateExpanded(false)}
                className="navdropdown-item"
              >{text[language].srilanka}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link as={Link} to="/video" onClick={() => updateExpanded(false)}>
                <CgYoutube className="nav-icon" />
                <span className="nav-text">
                  {text[language].video}
                </span>
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
