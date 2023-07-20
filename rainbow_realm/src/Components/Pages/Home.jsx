import { Heading,Flex,Box,HStack,Button,VStack,Container } from "@chakra-ui/react";

import img from '../images/school girl.jpg';
import bgimg from '../images/child.jpg';
import pic from "../images/Screenshot 2023-07-19 143618.png"
import picture from "../images/Screenshot 2023-07-19 143147.png"
import image from "../images//Screenshot 2023-07-19 143203.png"
import gallery from "../images/Screenshot 2023-07-19 143231.png"
import gal from "../images/Screenshot 2023-07-19 143252.png"
import Middle from "../Middle";
function Home() {
  const navbarStyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  height: "700px",
};

  
    return (
      <div className="Home">
      <div>
        <div style={{ ...navbarStyle }}>
          <div>
            <Flex justifyContent="center" alignItems="center" >
              <VStack spacing={4}>
                <Container maxW='container.sm' bg='rgba(242, 210, 153, 0.8)' color='#262626' width={500} height={500} padding={100} marginTop={100} >
                  <Heading  textAlign="left">Welcome to<br />Rainbow Realm</Heading>
                  <br />
                  <Heading as="h2" fontSize="2xl" textAlign="left">Enhancing kids future<br />with Smart Education</Heading>
                  <br />
                  <Heading as="h4" fontSize="xxl" textAlign="left" lineHeight={5}>Providing them a better education and<br />brightening the future of your kids<br />choice is yours.</Heading>
                  <br /><br />
                  <Button bgColor="#2f4958" color="white" marginX={3}>Learn More</Button>
                  <Button bgColor="#2f4958" color="white"  marginX={3}>Live Demo</Button>
                </Container>
              </VStack>
              <HStack marginTop="100px">
              <img src={img} alt="images" className='img' />
              </HStack>
            </Flex>
          </div>
        </div>
      </div>
      <br/>
      <Heading textAlign="left" paddingLeft={38}color="#2e4555">
  Number Speaks <br />
  <span style={{ color: "#febf4f" }}>for itself</span>
</Heading>
<Flex justifyContent="center" alignItems="center" marginLeft={203} marginRight={60} marginTop={10} >
  <HStack spacing={30}>
  <Box bgColor="#2f4958" width={300} padding={5} textAlign="center" color="white" borderRadius={20}>
  <Heading as="h2">200+</Heading>
  <br />
  <Heading as="h2">Faculties</Heading>
  <br />
  <Heading as="h3" fontSize="xl" textAlign="left">
    Best and Quality teachers with advance knowledge Lorem ipsum dolor sit
  </Heading>
</Box>

<Box bgColor="#2f4958" width={300} padding={5} textAlign="center" color="white" borderRadius={20}>
  <Heading as="h2">150+</Heading>
  <br />
  <Heading as="h2">Achievements</Heading>
  <br />
  <Heading as="h3" fontSize="xl" textAlign="left">
    Many national and international achievements and to Lorem ipsum dolor
  </Heading>
</Box>

<Box bgColor="#2f4958" width={300} padding={5} textAlign="center" color="white" borderRadius={20}>
  <Heading as="h2">150+</Heading>
  <br />
  <Heading as="h2">Courses</Heading>
  <br />
  <Heading as="h3" fontSize="xl" textAlign="left">
    Advance and variety of courses available with us with certificates
  </Heading>
</Box>

  </HStack>
</Flex>
< br/><br/>
<Flex justifyContent="center" alignItems="center">
  <Box textAlign="left" bgColor="#f1ce96" width={600} marginLeft={30} padding={4} borderRadius={20}paddingBottom={30}>
    <Heading style={{color:"#2e4555",textAlign:"center"}}>Welcome to Rainbow Realm</Heading>
    <br /> 
    <Heading marginLeft={12}>How to get admission</Heading>
    <br />
    <ul style={{ listStyleType: 'disc', marginLeft: '80px'}}>
    <Heading as="h2" fontSize="xl" padding="10px"><li>Complete The Form</li> </Heading>
    <Heading as="h2" fontSize="xl" padding="10px"> <li>Send Certain Documents</li></Heading>
    <Heading as="h2" fontSize="xl" padding="10px"><li>Further Our Counselors Will Contact You</li></Heading>
    </ul>
    <br />
    <br />
    <Button bgColor="#2f4958" color="white" marginX={20}>Enroll Now</Button>
    <Button bgColor="#2f4958" color="white" marginX={-10} >Live Demo</Button>
   
  </Box>
 
</Flex>
<br/><br/>
<div>
<Middle/>
</div>
<div >
  <Heading textAlign="left" marginLeft={50} color="#2e4555">Photo Gallery</Heading>
  <Flex style={{  alignItems: 'center', justifyContent: 'center' }}>
    <HStack marginTop={-290} padding={10} spacing={10}>
      <img src={pic} alt="" width={300} style={{border:'14px solid #f3dab1' ,borderRadius:"20px"}} />
      <img src={gal} alt="" width={300} style={{border:'14px solid #2f4958' ,borderRadius:"20px"}} />
    </HStack>
    <VStack>
      <img src={image} alt="" height={300}style={{border:'14px solid #f3dab1' ,borderRadius:"20px"}} />
    </VStack>
  </Flex>
  <HStack marginTop={-360} padding={10} spacing={10} marginLeft={83} >
    <img src={gallery} alt="" width={300}style={{border:'14px solid #2f4958' ,borderRadius:"20px"}} />
    <img src={picture} alt="" width={300} style={{border:'14px solid #f3dab1' ,borderRadius:"20px"}}/>
  </HStack>
</div>

      </div>
    
    );
  }
  
  export default Home;
  