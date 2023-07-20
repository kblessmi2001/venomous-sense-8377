import { Box, Heading, Text, HStack } from "@chakra-ui/react";

function Middle() {
  return (
    <div className="middle">
      <Heading as="h1" fontSize="xx-large" textAlign="center" mb={4}>
        Empowering At Every Age: Explore Our Learning Programs
      </Heading>
      <Text style={{fontSize:"18px"}} textAlign="center" color="gray.600" mb={8}>
        Discover our step-by-step approach to child development from infancy through kindergarten.
      </Text>
      <HStack spacing={8} justifyContent="center">
        <Box bgColor="blue.500" width={200} height={200} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="white">EARLY</Text>
          <Text fontSize="lg" fontWeight="bold" color="white">PRE-SCHOOL</Text>
          <Text fontSize="md" color="white">2-3 YEARS</Text>
        </Box>
        <Box bgColor="#f8b132" width={200} height={200} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="white">PRE</Text>
          <Text fontSize="lg" fontWeight="bold" color="white">PRE-SCHOOL</Text>
          <Text fontSize="md" color="white">3-4 YEARS</Text>
        </Box>
        
        <Box bgColor="#3e8b77" width={200} height={200} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="white">EARLY</Text>
          <Text fontSize="lg" fontWeight="bold" color="white">KINDERGARTEN</Text>
          <Text fontSize="md" color="white">4-5 YEARS</Text>
        </Box>
        <Box bgColor="#941b82" width={200} height={200} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="white">KINDERGARTEN</Text>
          <Text fontSize="lg" color="white">5-6 YEARS</Text>
        </Box>
      </HStack>
<br/>
      <Text style={{fontSize:"18px"}}>
      This is a critical year of children’s development as they are on the verge of going to school. Our teachers will balance plenty of guidance along with independent learning opportunities, as children gain more independence.
      </Text>
      <br/><br/>
    </div>
  );
}

export default Middle;
