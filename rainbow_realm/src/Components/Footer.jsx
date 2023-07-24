import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  chakra,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImg from "../Components/images/logo.png"

const Footer = () => {
  const linkStyles = {
    textDecoration: 'none',
    color:"white",
    _hover: {
      color: 'grey',
    },
  };

  return (
    
    <Box 
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="#4e6471"
      width="100%"
    >

<Box as={Stack}  py={10} width="100%" height="300px">

        <Stack direction={{ base: 'column', md: 'row' }} spacing={70}>
      
        <img src={logoImg} alt="logoImage" style={{width:170,marginLeft:5,marginTop:-80}} />
          {/* Company Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="RGB(255 192 92)">
              Company
            </Text>
            <Link href={'#'} sx={linkStyles}>
              About Us
            </Link>
            <Link href={'#'} sx={linkStyles}>
              Courses
            </Link>
            <Link href={'#'} sx={linkStyles}>
             Teachers
            </Link>
            <Link href={'#'} sx={linkStyles}>
             Blogs
            </Link>
            <Link href={'#'} sx={linkStyles}>
             Photo Gallery
            </Link>
          </Stack>

          {/* Support Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="RGB(255 192 92)">
              Get In Touch
            </Text>
            <Link href={'#'} sx={linkStyles}>
             Contact Us
            </Link>
            <Link href={'#'} sx={linkStyles}>
            Our Services
            </Link>
            <Link href={'#'} sx={linkStyles}>
              How To Enroll
            </Link>
          </Stack>

          {/* Legal Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="RGB(255 192 92)">
            Address
            </Text>
            <Link href={'#'} sx={linkStyles}>
             Jayanagar 4th Block
            </Link>
            <Link href={'#'} sx={linkStyles}>
            Bangalore,Karnataka,493118
            </Link>
          </Stack>

          {/* Subscribe Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="RGB(255 192 92)">
              Newsletter
            </Text>
            <Flex>
              <input
                style={{ borderRadius: 5, height: 29, marginRight: 10 }}
                type="text"
                placeholder="Enter your Email"
              />
              <Button style={{ borderRadius: 5, height: 30, width:100, backgroundColor:"RGB(255 192 92)"}}>Subscribe</Button>
              <br/>
              <br/>
           {/* /    */}
            </Flex>
            <p style={{marginTop:"-20px",color:"white"}}>Your email is safe with us,we don't spam.</p>
          </Stack>
        </Stack>
      </Box>

      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}
      >
        {/* Copyright Text */}
        <Text color="white">© 2023 WonderKidEdu. All rights reserved</Text>

        {/* Social Media Links */}
        
        <Stack direction={'column'} spacing={2}>
  <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="white">
    Follow Me
  </Text>
  <Stack direction={'row'} spacing={6}>
    <chakra.a
      href={'#'}
      display={'flex'}
      alignItems={'center'}
      title={'Twitter'}
      color="white"
    >
      <FaTwitter />
    </chakra.a>
    <chakra.a
      href={'#'}
      display={'flex'}
      alignItems={'center'}
      title={'YouTube'}
      color="white"
    >
      <FaYoutube />
    </chakra.a>
    <chakra.a
      href={'#'}
      display={'flex'}
      alignItems={'center'}
      title={'Instagram'}
      color="white"
    >
      <FaInstagram />
    </chakra.a>
  </Stack>
</Stack>

      </Container>
    </Box>
  );
};

const CenteredFooter = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
      <Footer />
    </div>
  );
};

export default CenteredFooter;
