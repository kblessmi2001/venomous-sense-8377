import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import logoImg from "../images/logo.png";
import '../Allroutes/Navbar.css';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Login from '../Pages/Login';

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <div  style={{ fontFamilyfamily: "Arial, Helvetica, sans-serif" }}>
      <Flex className="navbar" gap={10} color="white" alignItems="center" backgroundColor="#ffdea8" height="100">
        <Link to="/"><img src={logoImg} alt="logoImage" style={{ width: 170, marginLeft: 30 }} /></Link>
        <Link className="navbar-link" style={{ marginLeft: 50, marginTop: -9 }} to="/">
          Home
        </Link>
        <Link className="navbar-link" style={{ marginTop: -9 }} to="/aboutus">
          About Us
        </Link>
        <Link  className="navbar-link" style={{ marginTop: -9 }} to ="/course" >
              Course
          </Link>
        <Link className="navbar-link" style={{ marginTop: -9 }} to="/curriculam">
        <b>Curriculum</b>
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', marginTop: -9 }}>
        <Button colorScheme="gray" _hover={{ backgroundColor: "black", color: "white" }} style={{ borderRadius: 10, height: 30, border: "none" }}>
            <Link to="/admission" style={{ textDecoration: "none",  color: "inherit" }}>
            Admission Now
            </Link>
          </Button>
          <Button
            colorScheme="gray"
            _hover={{ backgroundColor: 'black', color: 'white' }}
            style={{ borderRadius: 10, height: 30, border: 'none', marginLeft: "12px" }}
            onClick={handleLoginButtonClick}
          >
            Login
          </Button>
          <Modal isOpen={isLoginOpen} onClose={handleCloseLoginModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <Login onClose={handleCloseLoginModal} />
            </ModalContent>
          </Modal>
        </div>
        <span style={{ marginLeft: 40 }}></span>
      </Flex>
    </div>
  );
}

export default Navbar;
