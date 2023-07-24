import { Heading, Text } from '@chakra-ui/react'
import React, {useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetailsPage() {
    const [data,Setdata] = useState({})
    const {id} = useParams()
    const fetchdata = async()=>{
      try {
        const res = await fetch(`http://localhost:8080/courses/${id}`)
        const data = await res.json()
        Setdata(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
  }

useEffect(()=>{
  fetchdata()
},[])

    return (
        <div style={{ fontFamilyfamily: "Arial, Helvetica, sans-serif" }}>
            <div className="subjectContainer" style={{marginTop:"80px"}} >
              <img src={data.image} alt="" style={{width:"400px" ,margin:"auto",marginBottom:"20px",border:"14px solid #2f4958 ",padding:"8px"}}/>
                <Heading className="title" mb="4"> {data.stage}</Heading>
                <Text fontSize="2xl" mb="7" className="section"><b>{data.subject} </b></Text>
                <Text fontSize="xl" mb="4">What are the stages of {data.subject} development?</Text>
                <div style={{width:"1000px",textAlign:"left",margin:"auto"}}>
                
              <Text fontSize="xl"  mb="4">Here are the main stages of {data.subject} development in children:</Text>
                <Text fontSize="xl"  mb="4">1. Pre-linguistic stage</Text>
              <Text fontSize="xl"  mb="4">Also known as the pre-linguistic stage, the first stage of language development often occurs between zero and six months. Children in this phase don't have developed language skills, so they communicate with sounds. They cry, make cooing sounds and utter nasal murmurs as their vocal tracts develop. Infants can also recognize voices and sounds in addition to facial expressions and voice tones.</Text>
                <Text fontSize="xl"  mb="4">2. Babbling stage</Text>
              <Text fontSize="xl"  mb="4">The second stage of a child's language development happens between the ages of 6 and 9 months. Children begin to babble, making noises and syllables that aren’t yet words. Mouth muscles and teeth grow to prepare children for more advanced talking.</Text>
                <Text fontSize="xl"  mb="4">3. Holophrastic stage</Text>
              <Text fontSize="xl"  mb="4">The third phase of language development, also known as the holophrastic stage, usually happens between the ages of 9 and 18 months. During this time, their language skills usually have increased enough for them to say single words that describe objects or identify their basic needs. For instance, a child in this stage might say "dada" as a way of getting their dad's attention. </Text>
                <Text fontSize="xl"  mb="4">4. Two-word stage</Text>
              <Text fontSize="xl"  mb="4">During this stage, the child can speak two-word sentences that usually have some meaning. They group words together that they learned during the holophrastic stage. </Text>
                <Text fontSize="xl"  mb="4">5. Telegraphic stage</Text>
              <Text fontSize="xl"  mb="4">The telegraphic stage occurs between the ages of 24 and 30 months. Children can speak phrases that are not only longer but also have more than two elements. For instance, a child might say “The cat stand up on the table.” Correct grammar still isn’t prevalent in this stage, but the sentence conveys that the cat is standing up in addition to being on the table. The child also develops the ability to understand basic instructions, including two-part orders like "go to your table and get your books."</Text>
                <Text fontSize="xl"  mb="4">6. Multi-word stage</Text>
              <Text fontSize="xl"  mb="4">Beyond 30 months, children enter the multi-word stage. They build increasingly complex sentences that allow them to better communicate their ideas. They also start to incorporate morphemes to make more semantically sound phrases. For instance, they know to use the word “dogs” instead of “dog” when referring to more than one dog. The telegraphic stage occurs between the ages of 24 and 30 months.</Text>
            </div>
            </div>
        </div>
    )
}