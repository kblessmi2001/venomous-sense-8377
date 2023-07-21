import { Flex, Box,Heading,Text} from "@chakra-ui/react";

function ContactUs() {
  const inputBgColor = "rgb(255, 222, 168)";

  return (
    <div className="ContactUs">
      <Heading marginTop={150} textAlign="left" marginLeft={50}>Contact Us</Heading>
      <Flex style={{justifyContent:"center",marginTop:"50px"}}>
        <div>
      <Flex marginTop={7}>
      <Flex flexDirection="column" marginBottom="20px" >
        <label style={{textAlign:"left", fontWeight:"bold"}}>First Name</label>
        <input type="text"  style={{ backgroundColor: inputBgColor, border: "1px solid black", borderRadius:"6px" }} />
      </Flex>

      <Flex flexDirection="column" marginBottom="20px" marginLeft="40px">
        <label style={{textAlign:"left", fontWeight:"bold"}}>Last Name</label>
        <input type="text" style={{ backgroundColor: inputBgColor, border: "1px solid black", borderRadius:"6px" }} />
      </Flex>
      </Flex>
      <Flex>
      <Flex flexDirection="column" marginBottom="20px">
        <label style={{textAlign:"left", fontWeight:"bold"}}>Email</label>
        <input type="email" style={{ backgroundColor: inputBgColor, border: "1px solid black", borderRadius:"6px" }} />
      </Flex>

      <Flex flexDirection="column" marginBottom="20px" marginLeft="40px">
        <label style={{textAlign:"left", fontWeight:"bold"}}>Phone</label>
        <input type="number" style={{ backgroundColor: inputBgColor, border: "1px solid black", borderRadius:"6px" }} />
      </Flex>
      </Flex>
      <Flex flexDirection="column" marginBottom="20px" width="407px">
        <label style={{textAlign:"left", fontWeight:"bold"}}>Message</label>
        <textarea rows={4} placeholder="Type your message here..." style={{ backgroundColor: inputBgColor, border: "1px solid black", borderRadius:"6px" }} />
      </Flex>
      </div>
      <Box style={{width:"400px",textAlign:"left",backgroundColor: "rgb(255, 222, 168)",padding:"20px", borderRadius:"10px" ,marginLeft:"100px"}}>
        <Heading>Address</Heading>
        <br/>
        <Text>Quam Elementum Pulvinar Etiam Non Quam Lacus Suspendisse.A Scelerisque Purus Semper Eget Duis At Lobortisscelerisque Fermentum Dui Faucibus In Ornare....</Text>
        <br/>
        <Text><b>Location: Jayanagar 4th Block Bangalore, Karnataka,493118</b></Text>
        <Text><b>Phone: +91 9340073854</b></Text>
        <Text><b>Email: Kidstalent@Gmail.Com</b></Text>
      </Box>
      </Flex>
    </div>
  );
}

export default ContactUs;
