
import React, { useState, useContext } from 'react';
import { Flex, Box, Tabs, TabList, Tab, TabPanel, TabPanels, Input, Button, Checkbox, Text, useToast, Heading } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContextProvider';

function Login({ onClose }) {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usersData,setUsersData] =useState([])

  const { isAuth, login } = useContext(AuthContext);
  const toast = useToast();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`https://wonderkidedu.vercel.app/user`)
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);
        if (user) {
          login(user);
          alert('Login successful!'); 
          onClose();
        } else {
          alert('Invalid email or password. Please try again.'); 
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    fetch(`https://wonderkidedu.vercel.app/user`)
      .then((response) => response.json())
      .then((data) => {
        const userExist = data.some((user) => user.email === email);
        if (userExist) {
          toast({
            title: 'User already exists',
            status: 'error',
            isClosable: true,
          });
        } else {
          fetch(`https://wonderkidedu.vercel.app/user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Registration failed');
              }
            })
            .then((newUser) => {
              setUsersData([...usersData, newUser]);
  
              toast({
                title: 'User registered successfully',
                status: 'success',
                isClosable: true,
              });
              onClose();
            })
            .catch((error) => {
              console.error('Error:', error);
              toast({
                title: 'An error occurred. Please try again later.',
                status: 'error',
                isClosable: true,
              });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div style={{ fontFamilyfamily: "Arial, Helvetica, sans-serif" }}>
    <Box  my={5} width="100%" margin="auto" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", background: "transparent", borderRadius: "20px" }}>
      <Tabs variant="enclosed" index={activeTab === 'login' ? 0 : 1}>
   <Box  backgroundColor='#ffdea8'width="100%"display="flex" justifyContent="center" paddingTop={5}paddingBottom={5} >
      {activeTab === 'login' ? <Heading>Login</Heading> : <Heading>Register</Heading>}
      </Box>
      <br/>
        <TabList>
          <Tab
            onClick={() => handleTabChange('login')}
            style={{
              marginRight: '20px',
              marginLeft:"30px",
              backgroundColor: activeTab === 'login' ? '#ffdea8' : 'transparent',
              color: activeTab === 'login' ? 'black' : 'black',
              fontWeight: activeTab === 'login' ? 'bold' : 'bolder',
            }}
          >
            Login
          </Tab>
          <Tab
            onClick={() => handleTabChange('register')}
            style={{
              marginLeft: '20px',
              backgroundColor: activeTab === 'register' ? '#ffdea8' : 'transparent',
              color: activeTab === 'register' ? 'black' : 'black',
              fontWeight: activeTab === 'register' ? 'bold' : 'bolder',
            }}
          >
            Register
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel style={{marginLeft:"20px",marginRight:"20px"}}>
            <Flex flexDirection="column">
              <br />
              <Input mb={4} type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
              <Input mb={4} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <Flex justifyContent="center" alignItems="center" mb={4}>
                <Checkbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" style={{ marginRight: '10px' }} />
                <a href="#!">Forgot password?</a>
              </Flex>
              <Button colorScheme="blue" mb={4} onClick={handleLogin} backgroundColor="#ffdea8">
                Login
              </Button>
              <Text textAlign="center">
                Not a member?{' '}
                <a href="#!" onClick={() => handleTabChange('register')}>
                  Register
                </a>
              </Text>
            </Flex>
          </TabPanel>
          <TabPanel  style={{marginLeft:"20px",marginRight:"20px"}}>
            <Flex flexDirection="column">
              <br />
              <Input mb={4} type="text" placeholder="Enter Username" />
              <Input mb={4} type="email" placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} />
              <Input mb={4} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <Flex justifyContent="center" mb={4}>
                <Checkbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" style={{ marginRight: '10px' }} />
                <a href="#!">Forgot password?</a>
              </Flex>
              <Button colorScheme="blue" mb={4} backgroundColor="#ffdea8" onClick={handleRegister}>
                Register
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
    </div>
  );
}

export default Login;
