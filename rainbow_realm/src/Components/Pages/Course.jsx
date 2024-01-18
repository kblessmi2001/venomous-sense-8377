import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Flex } from '@chakra-ui/react';
import CourseCard from './CourseCard';
import { Spinner } from '@chakra-ui/react';
import { Box, VStack, Radio, Spacer, RadioGroup, Text, Stack, Input, Button } from '@chakra-ui/react';

function Course() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState('');
  const [query, setQuery] = useState('');

  const fetchProgramsBySearch = (searchQuery) => {
    return `https://wonderkidedu.vercel.app/courses?q=${searchQuery}`;
  };

  useEffect(() => {
    fetchPrograms();
  }, [level]);

  const fetchPrograms = async () => {
    let url = 'https://wonderkidedu.vercel.app/courses';

    if (level !== '') {
      url = `https://wonderkidedu.vercel.app/courses?stage=${level}`;
    }

    if (query !== '') {
      url = fetchProgramsBySearch(query);
    }

    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchPrograms();
    setQuery('');
  };


  if (loading) {
    return <Heading><Spinner style={{ marginRight: "15px" }} />Loading...</Heading>;
  }

  return (
    <div style={{ fontFamilyfamily: "Arial, Helvetica, sans-serif" }}>
      <Heading style={{ textAlign: 'left', padding: '30px 40px' }}>Courses</Heading>
      <Flex bg="gray.100">
        <VStack w="40%" marginTop="50px" alignItems="flex-start">
          <Box style={{ borderRadius: "25px", background: "white", padding: "20px", marginLeft: "20px" }}>
            <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Search by Stage</Text>
            <form onSubmit={handleSearchSubmit}>
              <Input type="text" placeholder="Enter stage name" value={query} onChange={(e) => setQuery(e.target.value)} />
              <Button mt={3} type="submit" colorScheme="blue">Search</Button>
            </form>
          </Box>
          <Box w="86%" style={{ borderRadius: "25px", background: "white", marginTop: "20px", marginLeft: "20px", marginBottom: "20px" }}>
            <Text style={{ fontWeight: "700", fontSize: "20px", padding: "20px 0" }}>Level</Text>
            <RadioGroup value={level} onChange={(e) => setLevel(e)} padding=" 10px" marginBottom="20px">
              <Stack spacing={2} direction='column' >
                <Radio colorScheme='blue' value=''>
                  All
                </Radio>
                <Radio colorScheme='blue' value='Early Preschool'>
                  Early Preschool
                </Radio>
                <Radio colorScheme='blue' value='Preschool'>
                  Preschool
                </Radio>
                <Radio colorScheme='blue' value='Pre-Kindergarten' >
                  Pre Kindergarten
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </VStack>
        <Spacer />
        <Flex
          flexWrap="wrap"
          style={{
            marginBottom: "20px",
            marginTop: "50px",
            width: "100%",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          {data.map((el) => (
            <Link to={`/singlepage/${el.id}`} key={el.id} style={{ width: 'calc(33.33% - 20px)' }}>
              <CourseCard
                image={el.image}
                stage={el.stage}
                age={el.age}
                subject={el.subject}
                description={el.description}
              />
            </Link>
          ))}
        </Flex>

      </Flex>
    </div>
  );
}

export default Course;
