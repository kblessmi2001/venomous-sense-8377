import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import pre from "../images/2-3 yrs.png";
 import "../Pages/Curriculam.css"

function Curriculam() {
  
  return (
    <div className="Curriculam">
      <Flex alignItems="center" position="relative" marginTop={15} >
        
        <Box
          width={400}
          height={400}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          position="absolute"
          top="20%"
          marginLeft="100px"
          background="radial-gradient(circle, transparent 40%, white 40%)" 
        >
          {/* Inner circle */}
          <Box
            bgColor="blue.500"
            width={300}
            height={300}
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          //  / marginLeft="100px"
          >
            <Text fontSize="28px" fontWeight="bold" color="white">
              EARLY
            </Text>
            <Text fontSize="28px" fontWeight="bold" color="white">
              PRE-SCHOOL
            </Text>
            <Text fontSize="28px" color="white">
              2-3 YEARS
            </Text>
          </Box>
        </Box>
        <Box  marginLeft="450px" >
          <img src={pre} alt="" width={600} height={600}  />
        </Box>
      </Flex>
<br />
<br />

      <Heading color="rgb(46,72,88)">Early Pre-School</Heading>
      <br />
      <Text style={{ width: "700px", margin: "0 auto", textAlign: "center",fontSize:"20px" }}>
  Our curriculum for our two-year-olds expands on the rich experience we provide for our toddlers. Two-year-olds continue with more cooperative learning activities, in addition to special attention paid to fine and gross motor skills. Our teachers work to expand our two-year-olds’ abilities to interact with other kids and work independently, in addition to increased exposure to STEAM activities and self-esteem building.
</Text>
<br />
      <Heading style={{ width: "700px", margin: "0 auto", textAlign: "center" ,color:"rgb(46,72,88)"}}>Exploring the World Program</Heading>
      <br />
      <Text style={{ width: "700px", margin: "0 auto", textAlign: "center",fontSize:"20px" }}>Children’s Land encourages and expands children’s natural curiosity to discover the world around them. We have curated our Exploring The World Program in such a way to promote individuality through independent and group work.
‍</Text>  <br />
<Text style={{ width: "700px", margin: "0 auto", textAlign: "center",fontSize:"20px" }}>During our early preschool program we further develop each student’s successes and skills. We use these new-found skills to teach our students how to handle academic and personal challenges.</Text>
<br />
<br />
<Box bgColor="RGB(255 222 168)" padding={10}>
  <Heading color="rgb(46,72,88)">Curriculum</Heading>
  <br />
  <Heading color="rgb(46,72,88)">Cognitive Development</Heading>
  <br />
  <ul className="star-list" style={{ textAlign: "left", marginLeft: "200px",fontSize:"20px"}}>
    <li>Exploring and sorting objects by shape, color and size with prompts</li>
    <li>Exploring creativity through structured play and make-believe games</li>
  </ul>
</Box>

<Box bgColor="rgb(207,234,247)" padding={10}>
  <Heading color="rgb(46,72,88)">Language Arts & Literature</Heading>
  <br />
  <ul className="star-list" style={{ textAlign: "left", marginLeft: "200px",fontSize:"20px"}}>
    <li>Print-rich classrooms, exposing kids to the meaning of printed language</li>
    <li>Daily interactive read alouds and independent book exploration</li>
    <li>Giving children the opportunity to create and tell their own stories</li>
    <li>Increased focus on developing social and academic language</li>
    <li>Listening to stories and answering comparison questions</li>
  </ul>
</Box>

<Box bgColor="RGB(255 222 168)" padding={10}>
  <Heading color="rgb(46,72,88)">Mathematics & Science</Heading>
  <br />
  <ul className="star-list" style={{ textAlign: "left", marginLeft: "200px" ,fontSize:"20px"}}>
    <li>Investigating whether objects sink or float at the water table</li>
    <li>Understanding how plants grow by planting grass seeds and caring for them until they sprout.</li>
    <li>Learning basic shapes through exploration such as indoor and outdoor scavenger hunts</li>
  </ul>
</Box>

<Box bgColor="rgb(207,234,247)" padding={10} marginBottom={-120}>
  <Heading color="rgb(46,72,88)">Social & Emotional Growth</Heading>
  <br />
  <ul className="star-list" style={{ textAlign: "left", marginLeft: "200px",fontSize:"20px" }}>
    <li>Celebrating classmates’ and character accomplishments as well as learning about independence</li>
    <li>Discussing with children how they can help each other and their families</li>
    <li>Starting to work on classroom projects</li>
    <li>Understanding trust, empathy, and a sense of wrong and right</li>
  </ul>
</Box>

    </div>
  );
}

export default Curriculam;
