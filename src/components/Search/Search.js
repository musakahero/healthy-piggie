import Select, { createFilter, components } from 'react-select';
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import piggyImg from './Piggy-site.svg';
export const Search = ({
    setCurrentlySelected,
    options,
    currentlySelected
}) => {

    // Styling react-select

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
            backgroundColor: "whitesmoke",
            minWidth: "30rem",
            borderRadius: "34px",
            border: "none",
            borderColor: `${state.isFocused ? "#87A922" : "grey"}`,
            boxShadow: "3px 5px 5px 0px grey"

        }),
        clearIndicator: (styles, state) => ({
            ...styles,
            padding: "0.5rem",
            paddingLeft: "0",
            color: "var(--accent-main)",
            "&:hover": {
                color: "var(--light-blue-secondary)"
            }
        }),
        dropdownIndicator: (styles, state) => ({
            ...styles,
            color: "whitesmoke",
            fontSize: "1.5rem",
            padding: "1.4rem",
            "&:hover": {
                color: "var(--bg-main)"
            },
            backgroundColor: "var(--accent-main)",
            borderTopRightRadius: "36px",
            borderBottomRightRadius: "36px"
        }),
        input: (styles, state) => ({
            ...styles,
            margin: "auto",
            color: "var(--accent-main)",
            marginLeft: "0.5rem"
        }),
        menu: (styles, state) => ({
            ...styles,
            backgroundColor: "whitesmoke"
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
            color: "var(--accent-main)",
            "&:hover": {
                backgroundColor: "var(--accent-main)",
                color: "whitesmoke",
            }
        }),
        singleValue: (styles, state) => ({
            ...styles,
            color: "var(--accent-main)",
        }),
        indicatorSeparator: (styles, state) => ({}), //This removes the separator styles
        placeholder: (styles, state) => ({
            ...styles,
            color: "var(--accent-main)",
            margin: "0 1rem",
        })

    }

    return (
        <div className={styles['container']}>
            <h1 className={styles["heading"]}>Search food</h1>
            <h2 className={styles["sub-heading"]}>Search the food to check whether it's safe for your piggy to eat</h2>
            <Select
                className={styles['react-select-component']}
                value={currentlySelected}
                isClearable={true}
                options={options}
                onChange={setCurrentlySelected}
                styles={selectStyles}
                placeholder={'Type here...'}
                components={{ DropdownIndicator }}
                // filterOption={createFilter({ matchFrom: "any" })}
                noOptionsMessage={() => `Our piggies have not tasted that yet :/`}
            />
            <img src={piggyImg} alt="" className={styles["piggy-img"]}/>
        </div>

    )
};