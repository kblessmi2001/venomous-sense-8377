import React, { useState } from 'react';
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Input,
  Button,
  Checkbox,
  Text,
  chakra,
  Stack
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function Admission() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box p={3} my={5} width="50%">
      <Tabs variant="enclosed" index={activeTab === 'login' ? 0 : 1}>
        <TabList>
          <Tab onClick={() => handleTabChange('login')}>Login</Tab>
          <Tab onClick={() => handleTabChange('register')}>Register</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex flexDirection="column">
              <Text textAlign="center" mb={3}>
                Sign in with:
              </Text>
              <Stack direction={'column'} spacing={2} marginLeft={60}>
                <Stack direction={'row'} spacing={6}>
                  <chakra.a
                    href={'#'}
                    display={'flex'}
                    alignItems={'center'}
                    title={'Twitter'}
                    color="black"
                  >
                    <FaTwitter />
                  </chakra.a>
                  <chakra.a
                    href={'#'}
                    display={'flex'}
                    alignItems={'center'}
                    title={'YouTube'}
                    color="black"
                  >
                    <FaYoutube />
                  </chakra.a>
                  <chakra.a
                    href={'#'}
                    display={'flex'}
                    alignItems={'center'}
                    title={'Instagram'}
                    color="black"
                  >
                    <FaInstagram />
                  </chakra.a>
                </Stack>
              </Stack>
              <Text textAlign="center" mt={3}>
                or:
              </Text>
              <br />
              <Input mb={4} type="email" placeholder="Email address" />
              <Input mb={4} type="password" placeholder="Password" />
              <Flex justifyContent="center" alignItems="center" mb={4}>
                <Checkbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" style={{ marginRight: '10px' }} />
                <a href="#!">Forgot password?</a>
              </Flex>
              <Button colorScheme="blue" mb={4}>
                Sign in
              </Button>
              <Text textAlign="center">
                Not a member?{' '}
                <a href="#!" onClick={() => handleTabChange('register')}>
                  Register
                </a>
              </Text>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex flexDirection="column">
              <Text textAlign="center" mb={3}>
                Sign up with:
              </Text>
              <Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={6} marginLeft={60}>
                  <chakra.a
                    href={'#'}
                    display={'flex'}
                    alignItems={'center'}
                    title={'Twitter'}
                    color="black"
                  >
                    <FaTwitter />
                  </chakra.a>
                  <chakra.a
                    href={'#'}
                    display={'flex'}
                    alignItems={'center'}
                    title={'YouTube'}
                    color="black"
                  >
                    <FaYoutube />
                  </chakra.a>
                  <chakra.a
                    href={'#'}
                    display={'flex'}
                    alignItems={'center'}
                    title={'Instagram'}
                    color="black"
                  >
                    <FaInstagram />
                  </chakra.a>
                </Stack>
              </Stack>

              <Text textAlign="center" mt={3}>
                or:
              </Text>
              <br />
              <Input mb={4} type="text" placeholder="Name" />
              <Input mb={4} type="text" placeholder="Username" />
              <Input mb={4} type="email" placeholder="Email" />
              <Input mb={4} type="password" placeholder="Password" />
              <Flex justifyContent="center" mb={4}>
                <Checkbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" style={{ marginRight: '10px' }} />
                <a href="#!">Forgot password?</a>
              </Flex>
              <Button colorScheme="blue" mb={4}>
                Sign up
              </Button>
              <Text textAlign="center">
                Already a member?{' '}
                <a href="#!" onClick={() => handleTabChange('login')}>
                  Login
                </a>
              </Text>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Admission;
