import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, VStack } from '@chakra-ui/react';
import logoImg from "../images/logo.png";
import '../Allroutes/Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownToggle = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div>
      <Flex className="navbar" gap={10} color="white" alignItems="center" backgroundColor="#ffdea8" height="100">
        <img src={logoImg} alt="logoImage" style={{ width: 170, marginLeft: 30 }} />
        <Link className="navbar-link" style={{ marginLeft: 50, marginTop: -9 }} to="/">
          Home
        </Link>
        <Link className="navbar-link" style={{ marginTop: -9 }} to="/aboutus">
          About Us
        </Link>
        <Link className="navbar-link" style={{ marginTop: -9 }} to="/course">
          Course
        </Link>
        <div className="navbar-link" style={{ marginTop: -9, position: 'relative' }}>
          <button className="curriculam-button" onClick={handleDropdownToggle}>
            <b>Curriculum</b>
          </button>
          {isDropdownOpen && (
            <VStack
              position="absolute"
              top="100%"
              left="0"
              zIndex="1"
              backgroundColor="white"
              padding={2}
              borderRadius="md"
              boxShadow="md"
            >
              <button className="dropdown-option" onClick={() => handleOptionSelect('Early Pre-School')}>
                Early Pre-School
              </button>
              <button className="dropdown-option" onClick={() => handleOptionSelect('Preschool')}>
                Preschool
              </button>
              <button className="dropdown-option" onClick={() => handleOptionSelect('Pre-Kindergarten')}>
                Pre-Kindergarten
              </button>
              <button className="dropdown-option" onClick={() => handleOptionSelect('Kindergarten')}>
                Kindergarten
              </button>
            </VStack>
          )}
        </div>
        <Link className="navbar-link" style={{ marginTop: -9 }} to="/blogs">
          Blogs
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', marginTop: 30 }}>
          <Button
            colorScheme="gray"
            _hover={{ backgroundColor: 'black', color: 'white' }}
            style={{ borderRadius: 10, height: 30, border: 'none' }}
          >
            <Link to="/login" style={{ textDecoration: 'none', fontWeight: 'bolder', color: 'inherit' }}>
              Admission Now
            </Link>
          </Button>
          <span style={{ marginLeft: 40 }}></span>
        </div>
      </Flex>
    </div>
  );
}

export default Navbar;
