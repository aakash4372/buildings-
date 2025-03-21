import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css"; // Import CSS

export default function Navbarsection() {

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, 
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Our Works", href: "#works" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Navbar expand="lg" variant="light" fixed="top"> {/* Fixed Top Navbar */}
      <Container>
        <Navbar.Brand href="#">
          <img src="img/logo.jpg" alt="Logo" className="d-inline-block align-top" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <motion.div variants={navContainerVariants} initial="hidden" animate="visible">
            <Nav>
              {navItems.map((item, index) => (
                <motion.div key={index} variants={navItemVariants}>
                  <Nav.Link href={item.href}>{item.name}</Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
