import { Select } from '@chakra-ui/react'
function Curriculam() {
    const handleOptionChange = (event) => {
        const selectedOption = event.target.value;
        // Do something with the selected option
        console.log(selectedOption);
      };
    return (
        
      <div className="Curriculam">

        <Select placeholder="Select option" onChange={handleOptionChange}>      
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
         </Select>
      </div>
    );
  }
  
  export default Curriculam;