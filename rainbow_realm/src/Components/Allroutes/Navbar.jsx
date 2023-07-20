// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import logoImg from "../images/logo.png";
import '../Allroutes/Navbar.css';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

function Navbar() {
 

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
          <Menu className="dropdown-option" alignItems="center">
           <Link  className="navbar-link" style={{ marginTop: -9 }} to="/curriculam"><MenuButton rightIcon={<ChevronDownIcon />} style={{ border: "none" }}>
              <b>Curriculum</b>
            </MenuButton>    </Link> 
            <MenuList  className='dropdown-option' color="black" alignItems="center">
              <MenuItem className='menu'>Early Pre-School</MenuItem>
              <MenuItem className='menu'>Preschool</MenuItem>
              <MenuItem className='menu'>Pre-Kindergarten</MenuItem>
              <MenuItem className='menu'>Kindergarten</MenuItem>
            </MenuList>
          </Menu>
        <Link className="navbar-link" style={{ marginTop: -9 }} to="/blogs">
          Blogs
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', marginTop: -9  }}>
          <Button
            colorScheme="gray"
            _hover={{ backgroundColor: 'black', color: 'white' }}
            style={{ borderRadius: 10, height: 30, border: 'none' }}
          >
            <Link to="/login" style={{ textDecoration: 'none', fontWeight: 'bolder', color: 'inherit'}}>
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

