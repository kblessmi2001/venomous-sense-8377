import {Button,Flex,Heading,Box } from "@chakra-ui/react"
import student from "../images/student.png"
import children from "../images/pexels-olia-danilevich-5088188.jpg"
import infant from "../images/pexels-mikhail-nilov-8923566-scaled.webp"

function Aboutus() {
    return (
      <div className="Aboutus"  style={{ fontFamilyfamily: "Arial, Helvetica, sans-serif" }}>
        <Flex>
        <div style={{width:"600px",marginLeft:"100px",marginTop:"130px"}}>
       <Heading>About Us</Heading>
       <br/>
       <Heading style={{color:"#f1ce96"}}>"Online Education Is Like A Rising </Heading>
       <Heading style={{color:"#2e4555"}}>Tide, It's Going To Lift All Boats."</Heading>
       <br/>
       <p style={{ fontSize: "19px"}}><b>
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
                <ul style={{ listStyleType: 'disc', marginLeft: '60px',textAlign:"left",paddingRight:"20px", paddingBottom:"20px"}}>
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
                <ul style={{ listStyleType: 'disc', marginLeft: '60px',textAlign:"left",paddingRight:"20px", paddingBottom:"20px"}} >
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
      </div>
    );
  }
  
  export default Aboutus;

//   {
//     "earlyPreschool": [
//       {
//         "id": 1,
//         "name": "Early Preschool 1",
//         "age": "2-3 years",
//         "subjects": [
//           {
//             "subject": "Language Development",
//             "description": "Introduction to basic language and vocabulary"
//           },
//           {
//             "subject": "Motor Skills",
//             "description": "Development of fine and gross motor skills"
//           },
//           {
//             "subject": "Arts and Crafts",
//             "description": "Engaging in creative art activities"
//           },
//           {
//             "subject": "Exploration and Play",
//             "description": "Hands-on exploration and play-based learning"
//           },
//           {
//             "subject": "Social Interaction",
//             "description": "Building social skills through group activities"
//           }
//         ]
//       },
//       {
//         "id": 2,
//         "name": "Early Preschool 2",
//         "age": "2-3 years",
//         "subjects": [
//           {
//             "subject": "Math Readiness",
//             "description": "Introduction to basic math concepts"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Discovering the world through simple science experiments"
//           },
//           {
//             "subject": "Music and Movement",
//             "description": "Engaging in music and dance activities"
//           },
//           {
//             "subject": "Storytelling",
//             "description": "Listening to and participating in storytelling"
//           },
//           {
//             "subject": "Physical Activity",
//             "description": "Engaging in physical play and exercise"
//           }
//         ]
//       },
//       {
//         "id": 3,
//         "name": "Early Preschool 3",
//         "age": "2-3 years",
//         "subjects": [
//           {
//             "subject": "Sensorial Exploration",
//             "description": "Exploring the senses through sensory activities"
//           },
//           {
//             "subject": "Outdoor Play",
//             "description": "Engaging in outdoor activities and nature exploration"
//           },
//           {
//             "subject": "Language and Communication",
//             "description": "Developing communication skills through language activities"
//           },
//           {
//             "subject": "Cognitive Development",
//             "description": "Stimulating cognitive abilities through puzzles and games"
//           },
//           {
//             "subject": "Emotional Development",
//             "description": "Encouraging emotional expression and self-regulation"
//           }
//         ]
//       },
//       {
//         "id": 4,
//         "name": "Early Preschool 4",
//         "age": "2-3 years",
//         "subjects": [
//           {
//             "subject": "Literacy Foundations",
//             "description": "Building early literacy skills through reading and writing activities"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introduction to numbers, shapes, and basic math concepts"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Encouraging creativity through various forms of art and expression"
//           },
//           {
//             "subject": "Social Skills",
//             "description": "Fostering social skills and cooperation in group settings"
//           },
//           {
//             "subject": "Nature and Science",
//             "description": "Exploring nature and basic science principles"
//           }
//         ]
//       },
//       {
//         "id": 5,
//         "name": "Early Preschool 5",
//         "age": "2-3 years",
//         "subjects": [
//           {
//             "subject": "Pre-Reading Skills",
//             "description": "Building pre-reading skills such as letter recognition and phonics"
//           },
//           {
//             "subject": "Pre-Writing Skills",
//             "description": "Developing pre-writing skills and hand-eye coordination"
//           },
//           {
//             "subject": "Problem Solving",
//             "description": "Enhancing problem-solving abilities through activities and puzzles"
//           },
//           {
//             "subject": "Social Awareness",
//             "description": "Developing awareness of self and others in the social environment"
//           },
//           {
//             "subject": "Physical Development",
//             "description": "Promoting physical development and coordination through play"
//           }
//         ]
//       }
//     ],
//     "preschool": [
//       {
//         "id": 1,
//         "name": "Preschool 1",
//         "age": "3-4 years",
//         "subjects": [
//           {
//             "subject": "Literacy and Language",
//             "description": "Building language skills and vocabulary through stories and conversations"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introducing mathematical concepts and problem-solving"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Discovering the world through simple science experiments and observations"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Encouraging creativity through art, music, and dramatic play"
//           },
//           {
//             "subject": "Physical Development",
//             "description": "Promoting physical development and motor skills"
//           }
//         ]
//       },
//       {
//         "id": 2,
//         "name": "Preschool 2",
//         "age": "3-4 years",
//         "subjects": [
//           {
//             "subject": "Literacy Readiness",
//             "description": "Preparing for reading through phonics and early literacy activities"
//           },
//           {
//             "subject": "Math Readiness",
//             "description": "Building early math skills through counting and basic operations"
//           },
//           {
//             "subject": "Science Discovery",
//             "description": "Exploring the natural world and scientific principles"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Expressing ideas and feelings through art and creative play"
//           },
//           {
//             "subject": "Social Skills",
//             "description": "Developing social skills and cooperation in group settings"
//           }
//         ]
//       },
//       {
//         "id": 3,
//         "name": "Preschool 3",
//         "age": "3-4 years",
//         "subjects": [
//           {
//             "subject": "Early Reading",
//             "description": "Introducing sight words and early reading comprehension"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Building mathematical concepts and problem-solving skills"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts through hands-on activities"
//           },
//           {
//             "subject": "Art and Creativity",
//             "description": "Encouraging creativity and self-expression through art and music"
//           },
//           {
//             "subject": "Physical Development",
//             "description": "Promoting physical activity and gross motor skills"
//           }
//         ]
//       },
//       {
//         "id": 4,
//         "name": "Preschool 4",
//         "age": "3-4 years",
//         "subjects": [
//           {
//             "subject": "Early Literacy",
//             "description": "Building early literacy skills through phonics and reading activities"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introducing numbers, shapes, and basic mathematical concepts"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Discovering scientific concepts and conducting simple experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Fostering creativity through art, music, and imaginative play"
//           },
//           {
//             "subject": "Physical Development",
//             "description": "Promoting physical coordination and motor skills"
//           }
//         ]
//       },
//       {
//         "id": 5,
//         "name": "Preschool 5",
//         "age": "3-4 years",
//         "subjects": [
//           {
//             "subject": "Emergent Literacy",
//             "description": "Developing emergent reading and writing skills"
//           },
//           {
//             "subject": "Math Readiness",
//             "description": "Preparing for basic math concepts and problem-solving"
//           },
//           {
//             "subject": "Science Discovery",
//             "description": "Exploring the natural world and scientific phenomena"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Encouraging creative expression through art, music, and storytelling"
//           },
//           {
//             "subject": "Social Skills",
//             "description": "Developing social skills and emotional intelligence"
//           }
//         ]
//       }
//     ],
//     "preKindergarten": [
//       {
//         "id": 1,
//         "name": "Pre-Kindergarten 1",
//         "age": "4-5 years",
//         "subjects": [
//           {
//             "subject": "Reading Readiness",
//             "description": "Preparing for reading through phonics and sight words"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introducing mathematical operations and problem-solving"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts and conducting experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Exploring different art forms and creative expression"
//           },
//           {
//             "subject": "Physical Education",
//             "description": "Promoting physical fitness and coordination"
//           }
//         ]
//       },
//       {
//         "id": 2,
//         "name": "Pre-Kindergarten 2",
//         "age": "4-5 years",
//         "subjects": [
//           {
//             "subject": "Early Reading",
//             "description": "Building early reading and comprehension skills"
//           },
//           {
//             "subject": "Math Readiness",
//             "description": "Preparing for math concepts and numerical operations"
//           },
//           {
//             "subject": "Science Discovery",
//             "description": "Exploring scientific principles and conducting experiments"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Encouraging creative expression through art and music"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about the world and diverse cultures"
//           }
//         ]
//       },
//       {
//         "id": 3,
//         "name": "Pre-Kindergarten 3",
//         "age": "4-5 years",
//         "subjects": [
//           {
//             "subject": "Early Literacy",
//             "description": "Developing early literacy skills through reading and writing activities"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introducing mathematical concepts and problem-solving"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts through hands-on experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Fostering creativity through various art forms"
//           },
//           {
//             "subject": "Social Skills",
//             "description": "Developing social skills and cooperation in group settings"
//           }
//         ]
//       },
//       {
//         "id": 4,
//         "name": "Pre-Kindergarten 4",
//         "age": "4-5 years",
//         "subjects": [
//           {
//             "subject": "Emergent Reading",
//             "description": "Developing emergent reading skills and sight words"
//           },
//           {
//             "subject": "Math Readiness",
//             "description": "Preparing for basic math operations and numerical concepts"
//           },
//           {
//             "subject": "Science Discovery",
//             "description": "Exploring scientific principles and conducting experiments"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Encouraging creativity through art, music, and storytelling"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about communities and world cultures"
//           }
//         ]
//       },
//       {
//         "id": 5,
//         "name": "Pre-Kindergarten 5",
//         "age": "4-5 years",
//         "subjects": [
//           {
//             "subject": "Literacy Foundations",
//             "description": "Building foundational literacy skills and sight word recognition"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introducing numerical concepts and basic arithmetic"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts and conducting simple experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Encouraging creativity through various art activities"
//           },
//           {
//             "subject": "Social Skills",
//             "description": "Developing social skills and emotional intelligence"
//           }
//         ]
//       }
//     ],
//     "kindergarten": [
//       {
//         "id": 1,
//         "name": "Kindergarten 1",
//         "age": "5-6 years",
//         "subjects": [
//           {
//             "subject": "Reading Comprehension",
//             "description": "Developing reading comprehension and fluency"
//           },
//           {
//             "subject": "Mathematics",
//             "description": "Building math skills and problem-solving abilities"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts and conducting experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Exploring different art forms and creative expression"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about communities and world geography"
//           }
//         ]
//       },
//       {
//         "id": 2,
//         "name": "Kindergarten 2",
//         "age": "5-6 years",
//         "subjects": [
//           {
//             "subject": "Reading and Writing",
//             "description": "Developing reading and writing skills"
//           },
//           {
//             "subject": "Math Readiness",
//             "description": "Preparing for mathematical concepts and problem-solving"
//           },
//           {
//             "subject": "Science Discovery",
//             "description": "Exploring scientific concepts and conducting experiments"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Encouraging creativity through art, music, and drama"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about communities and cultural diversity"
//           }
//         ]
//       },
//       {
//         "id": 3,
//         "name": "Kindergarten 3",
//         "age": "5-6 years",
//         "subjects": [
//           {
//             "subject": "Reading and Literacy",
//             "description": "Developing advanced reading and literacy skills"
//           },
//           {
//             "subject": "Mathematics",
//             "description": "Building math skills and problem-solving abilities"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts and conducting experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Encouraging creativity through art, music, and storytelling"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about communities and world cultures"
//           }
//         ]
//       },
//       {
//         "id": 4,
//         "name": "Kindergarten 4",
//         "age": "5-6 years",
//         "subjects": [
//           {
//             "subject": "Reading and Comprehension",
//             "description": "Developing reading comprehension and fluency"
//           },
//           {
//             "subject": "Mathematics",
//             "description": "Building math skills and problem-solving abilities"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts and conducting experiments"
//           },
//           {
//             "subject": "Creative Arts",
//             "description": "Encouraging creativity through various art forms"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about communities and world geography"
//           }
//         ]
//       },
//       {
//         "id": 5,
//         "name": "Kindergarten 5",
//         "age": "5-6 years",
//         "subjects": [
//           {
//             "subject": "Reading and Writing Skills",
//             "description": "Developing advanced reading and writing skills"
//           },
//           {
//             "subject": "Math Concepts",
//             "description": "Introducing advanced mathematical concepts"
//           },
//           {
//             "subject": "Science Exploration",
//             "description": "Investigating scientific concepts and conducting experiments"
//           },
//           {
//             "subject": "Creative Expression",
//             "description": "Fostering creativity through art, music, and storytelling"
//           },
//           {
//             "subject": "Social Studies",
//             "description": "Learning about communities and world cultures"
//           }
//         ]
//       }
//     ]
//   }
  


// "kindergarten": [
//     {
//       "id": 1,
//       "class": "Kindergarten ",
//       "age": "5-6 years",
//       "image":"",
//       "subject": "Reading Comprehension",
//       "description": "Developing reading comprehension and fluency"
//     },
//     {
//       "id": 2,
//       "class": "Kindergarten ",
//       "age": "5-6 years",
//       "image":"",
//       "subject": "Mathematics",
//       "description": "Building math skills and problem-solving abilities"
//     },
//     {
//       "id": 3,
//       "class": "Kindergarten ",
//       "age": "5-6 years",
//       "image":"",
//       "subject": "Science Exploration",
//       "description": "Investigating scientific concepts and conducting experiments"
//     },
//     {
//       "id": 4,
//       "class": "Kindergarten ",
//       "age": "5-6 years",
//       "image":"",
//       "subject": "Creative Arts",
//       "description": "Exploring different art forms and creative expression"
//     },
//     {
//       "id": 5,
//       "class": "Kindergarten ",
//       "age": "5-6 years",
//       "image":"",
//       "subject": "Social Studies",
//       "description": "Learning about communities and world geography"
//     }
//   ]