
import Select from 'react-select';


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

const CustomSelect = ({ selectedOption, setSelectedOption, options, defaultValue }) => {   

    return (
        <div className="new-transaction__select-div">
            <Select  
                defaultValue={defaultValue || selectedOption}
                value={selectedOption}               
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
