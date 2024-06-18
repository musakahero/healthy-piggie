import Select, { createFilter, components } from 'react-select';
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const Search = ({
    setCurrentlySelected,
    options,
    currentlySelected
}) => {

    // Styling react-select
    const lightGreenColored = (styles, state) => ({
        ...styles, color: "#87A922"
    });

    const FaSearch = () => {
        return <FontAwesomeIcon icon={faCaretDown} />;
    };

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaSearch />
            </components.DropdownIndicator>
        );
    };

    const selectStyles = {
        control: (styles, state) => ({
            ...styles,
            textAlign: "center",
            backgroundColor: "pink",
            minWidth: "30vw",
            borderRadius: "34px",
            border: "none",
            "&:hover": {
               
            },
            borderColor: `${state.isFocused ? "#87A922" : "grey"}`
        }),
        clearIndicator: (styles, state) => ({
            ...styles,
            paddingLeft: "0",
            color: "var(--medium-blue)",
            "&:hover": {
                color: "var(--light-blue-secondary)"
            }
        }),
        dropdownIndicator: (styles, state) => ({
            ...styles,
            color: "#87A922",
            fontSize: "1.5rem",
            padding: "1rem",
            "&:hover": {
                color: "#114232"
            }
        }),
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
                placeholder={'Can my piggie eat it?'}
                components={{DropdownIndicator}}
                // filterOption={createFilter({ matchFrom: "any" })}
                noOptionsMessage={() => `We don't know about that one yet :/`}

            />
        </div>

    )
};