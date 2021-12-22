import { useState } from "react";

import Select from 'react-select';

const options = [
    { value: 'salary', label: 'Salary' },
    { value: 'interests', label: 'Interests' },
    { value: 'food', label: 'Food' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'gift', label: 'Gift' },
    { value: 'family', label: 'Family' },
    { value: 'other', label: 'Other' },
];

const customStyles = {   
    option: (styles, {  isFocused }) => {
      return {
        ...styles,            
        color: isFocused ? 'white': 'black',  
      };
    },
    control: (styles) => ({
        ...styles,
        backgroundColor: 'transparent',        
    } )  
    
};

const CustomSelect = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="new-transaction__select-div">
            <Select  
                defaultValue={selectedOption}
                menuPlacement="top"
                onChange={setSelectedOption}                     
                options={ options }
                styles={ customStyles }
                theme={(theme) => ({
                    ...theme,                                
                    colors: {
                    ...theme.colors,
                    primary25: '#519259',                                  
                    primary: '#064635',
                    },
                })}
            />
    </div>
    )
}

export default CustomSelect
