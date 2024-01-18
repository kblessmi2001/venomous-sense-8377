import React from 'react';
import { Card, CardBody, Image, Heading, Stack, Text,  Flex } from '@chakra-ui/react';
import "../Pages/Course.css"
function CourseCard({ image, stage, age, subject, description }) {
  return (
    <div  style={{ fontFamilyfamily: "Arial, Helvetica, sans-serif" }}>
      <Flex flexWrap="wrap" justifyContent="center"  >
        <Card maxW='lg' flexBasis="90%" className="subjectBox" marginBottom="90px"borderRadius="25px" height="400px" >
          <CardBody>
            <Image
              src={image}
              alt='image'
              style={{ width: "300px", height: "200px" }}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='2'>
              <Heading size='lg'>{subject}</Heading>
              <Text fontSize='2xl'>
                {stage}
              </Text>
              <Text fontSize='xxl'>
                {age}
              </Text>
              {/* <p fontSize='2xl'>
                {description}
              </p> */}

            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
      </Flex>
    </div>
  );
}

export default CourseCard;
