import {Button,Flex,Heading,Box } from "@chakra-ui/react"
import student from "../images/student.png"
import children from "../images/pexels-olia-danilevich-5088188.jpg"
import infant from "../images/pexels-mikhail-nilov-8923566-scaled.webp"

function Aboutus() {
    return (
      <div className="Aboutus">
        <Flex>
        <div style={{width:"600px",marginLeft:"100px",marginTop:"130px"}}>
       <Heading>About Us</Heading>
       <br/>
       <Heading style={{color:"#f1ce96"}}>"Online Education Is Like A Rising </Heading>
       <Heading style={{color:"#2e4555"}}>Tide, It's Going To Lift All Boats."</Heading>
       <br/>
       <p style={{ fontSize: "19px", }}><b>
  The Future Of E-Learning Is Wide Open! Learning Doesn't Just Happen During Business Hours In The Office Or In The Classroom. It Happens Everywhere Through A Number Of Different Channels.
  </b></p>
<br/>
<br/>
       <Button bgColor="#2f4958" color="white" marginX={20}>Learn More</Button>
       </div>
       <div style={{paddingLeft:"150px",marginTop:80}}>
        <img src={student} alt="" style={{border:'14px solid #f3dab1' ,borderRadius:"20px"}}/>
       </div>
       </Flex>
       <br />
       <br />
       <br/>
       <div>
        <Flex>
            <div>
                <img src={children} alt="" style={{width:300,marginRight:300,marginLeft:60,border:'14px solid #f3dab1' ,borderRadius:"20px"}}/>
            </div>
            <div>
                <Box style={{border:'14px solid #2f4958' ,borderRadius:"20px",padding:"10px"}}>
                <Heading>Our Mission</Heading>
                <br/>
                <ul style={{ listStyleType: 'disc', marginLeft: '60px',textAlign:"left",paddingRight:"20px"}}>
                    <li>Together, We're Going To Make The Future</li>
                    <li>Children Where We Are Able To Fulfill All Their Requirements <br />To Keep Them Safe From Withered World</li>
                    <li>We Have Already Stepped Out And Start Changing The World </li>
                    <li>Enhancing Them With A Bright Future</li>
                    <li>Enhancing Them With A Bright Future</li>
                </ul>
                </Box>
            </div>
        </Flex>
       </div>
       
       <br/>
       <br/>
       <br/>
       <div>
       <Flex>
            <div>
            <Box style={{border:'14px solid #2f4958' ,borderRadius:"20px",padding:"10px",marginLeft: '70px'}}>
                <Heading>Our Vision</Heading>
                <br/>
                <ul style={{ listStyleType: 'disc', marginLeft: '60px',textAlign:"left",paddingRight:"20px"}} >
                    <li>Together, We're Going To Make The Future</li>
                    <li>Children Where We Are Able To Fulfill All Their Requirements <br/>To Keep Them Safe From Withered World</li>
                    <li>We Have Already Stepped Out And Start Changing The World </li>
                    <li>Enhancing Them With A Bright Future</li>
                    <li>Enhancing Them With A Bright Future</li>
                </ul>
                </Box>
            </div>
            <div>
                <img src={infant} alt="" style={{width:400,marginLeft:200,border:'14px solid #f3dab1' ,borderRadius:"20px"}}/>
            </div>
        </Flex>
       </div>
       {/* <Footer/> */}
      </div>
    );
  }
  
  export default Aboutus;