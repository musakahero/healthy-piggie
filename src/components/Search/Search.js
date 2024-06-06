import Select, { createFilter } from 'react-select';
import styles from './Search.module.css'
import { Link } from 'react-router-dom';

export const Search = ({
    setCurrentlySelected,
    options,
    currentlySelected
}) => {

    // Styling react-select
    const lightGreenColored = (styles,state) => ({
        ...styles, color: "#87A922"
    });
    const lightGreenColoredHover = (styles, state) => ({
        ...styles, 
        color: "#87A922",
        "&:hover": {
            color: "#114232"
        }
    });

    const selectStyles = {
        control: (styles, state) => ({
            ...styles,
            textAlign: "center",
            backgroundColor: "whitesmoke",
            minWidth: "30vw",
            borderRadius: "12px",
            "&:hover": {
                border: "1px solid #87A922"
            },
            borderColor: `${state.isFocused ? "#87A922":"grey"}`
        }),
        clearIndicator: (styles, state) => ({
            ...styles, 
            paddingLeft: "0",
            color: "var(--medium-blue)",
            "&:hover": {
                color: "var(--light-blue-secondary)"
            }
        }),
        dropdownIndicator: lightGreenColoredHover,
        input: (styles, state) => ({
            ...styles, 
            margin: "auto",
            color: "#87A922",
        }),
        menu: (styles, state) => ({
            ...styles, 
            backgroundColor: "whitesmoke",
        }),
        menuList: (styles, state) => ({
            ...styles,
            textAlign: "center",
            borderRadius: "8px",
            "::-webkit-scrollbar": {
                borderRadius: "8px",
                scrollbarWidth: "thin",
                backgroundColor: "whitesmoke"
            },
            "::-webkit-scrollbar-thumb": {
                borderRadius: "8px",
                backgroundColor: "#114232"
            }
        }),
        option: (styles, state) => ({
            ...styles, 
            
            backgroundColor: `${state.isFocused && "#F7F6BB"}`,
            color: "#87A922",
            "&:hover": {
                backgroundColor: "#87A922",
                color: "#F7F6BB",
            }
        }),
        singleValue: lightGreenColored
        

    }
    return (
        <div className={styles['container']}>
            <Select
                value={currentlySelected}
                isClearable={true}
                options={options}
                onChange={setCurrentlySelected}
                styles={selectStyles}
                placeholder={'Can my guinea pig eat...'}
                // filterOption={createFilter({ matchFrom: "any" })}
                noOptionsMessage={() => `We don't know about that one yet :/`}
                
            />
        </div>

    )
};