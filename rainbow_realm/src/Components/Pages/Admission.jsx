import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Input, Button, Heading } from "@chakra-ui/react";
import admissionImg from "../images/1772249.webp"

function Admission() {
  const [showAlert, setShowAlert] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    setShowAlert(true);
    setIsRegistered(true);
  };

  useEffect(() => {
    if (isRegistered) {
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
        navigate('/');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isRegistered, navigate]);

  if (showAlert) {
    alert("Registration Successful!");
  }

  return (
    <div>
      <Flex p={5} width="90%" margin="auto" marginTop={50} style={{border:'14px solid #2f4958' }}>
        <div style={{ width: "50%"}}>
          <img src={admissionImg} alt=""style={{ width:"100%" ,height:"460px"}} />
        </div>
        <div style={{ width: "50%" }}>
          <Flex flexDirection="column" margin="auto"  width="100%" >
            <Heading style={{ fontSize: "30px", display: "flex", height: "60px", alignItems: "center", justifyContent: "center", backgroundColor: "#ffdea8", width: "100%" }}> Admission Now </Heading>

            <br />
            <Input mb={4} type="text" placeholder="Enter Child Name" />
            <Input mb={4} type="date" placeholder="Select Date of Birth" />
            <Input mb={4} type="email" placeholder="Enter Email Address" />
            <Input mb={4} type='number' placeholder="Enter Mobile Number" />
            <Input mb={4} type="number" placeholder="Select Academic Year" />
            <Input mb={4} type="text" placeholder="Select Grade" />
            <Button backgroundColor="#ffdea8" onClick={handleRegister}>
              Register
            </Button>
          </Flex>
        </div>
      </Flex>
    </div>
  );
}

export default Admission;
