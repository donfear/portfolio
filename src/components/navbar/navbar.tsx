import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-tiger-transition";
import { ERoute } from "../../types/enums/route.enum";
import {pure} from 'recompose';

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const pathnames: ERoute[] = [
    ERoute.INDEX,
    ERoute.ABOUT,
    ERoute.PROJECTS,
    ERoute.RESUME,
  ];

  const isBefore = (pathname: ERoute) =>
    pathnames.indexOf(pathname) < pathnames.indexOf(location.pathname);

  const navItems = [
    { label: "Home", to: ERoute.INDEX, transition: "glide-right" },
    {
      label: "About",
      to: ERoute.ABOUT,
      transition: isBefore(ERoute.INDEX) ? "glide-right" : "glide-left",
    },
    {
      label: "Projects",
      to: ERoute.PROJECTS,
      transition: isBefore(ERoute.ABOUT) ? "glide-right" : "glide-left",
    },
    {
      label: "Resume",
      to: ERoute.RESUME,
      transition: isBefore(ERoute.PROJECTS) ? "glide-right" : "glide-left",
    },
  ];
  return (
    <Navbar
      expanded={isExpanded}
      expand="md"
      className={"navbar__sticky"}
    >
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            {navItems.map(({ label, ...props }, key) => (
              <Nav.Item
                key={key}
                onClick={() => {
                  setIsExpanded(false);
                }}
              >
                <Link
                  {...props}
                  className={`navbar-link ${
                    location.pathname === props.to ? "navbar-link--active" : ""
                  }`}
                >
                  {label}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default pure(NavBar);
