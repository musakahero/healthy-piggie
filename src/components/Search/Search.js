import Select, { createFilter, components } from 'react-select';
import styles from './Search.module.css'
import piggyImg from './images/Piggy-site.svg';
export const Search = ({
    setCurrentlySelected,
    options,
    currentlySelected
}) => {

    // Styling react-select
    const selectStyles = {
        control: (styles, state) => ({
            ...styles,
            textAlign: "center",
            backgroundColor: "whitesmoke",
            minWidth: "23rem",
            maxWidth: "23rem",
            height: "4rem",
            borderRadius: "34px",
            border: "none",
            borderColor: `${state.isFocused ? "#red" : "grey"}`,
            padding: "0 2.5rem 0 1rem",
            // boxShadow: `${state.isFocused && `0 0 0 1px orange`}`
            boxShadow: "none",

        }),
        clearIndicator: (styles, state) => ({
            ...styles,
            padding: "0.5rem",
            paddingLeft: "0",
            color: "var(--accent-main)",
            "&:hover": {
                color: "var(--accent-main)"
            }
        }),
        input: (styles, state) => ({
            ...styles,
            margin: "auto",
            color: "var(--accent-main)",
        }),
        menu: (styles, state) => ({
            ...styles,
            borderRadius: "64px",
            overflow: "hidden",
            width: "21.5rem",
            fontSize: "2rem"
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
                backgroundColor: "var(--accent-main)"
            }
        }),
        option: (styles, state) => ({
            ...styles,
            backgroundColor: `${state.isFocused && "var(--bg-secondary)"}`,
            color: "var(--accent-main)",
            "&:hover": {
                backgroundColor: "var(--accent-main)",
                color: "whitesmoke",
            },
        }),
        singleValue: (styles, state) => ({
            ...styles,
            color: "var(--accent-main)"
        }),
        placeholder: (styles, state) => ({
            ...styles,
            color: "var(--accent-main)",
            margin: "0 1rem",
            display: state.isFocused && 'none',
        }),


    }

    return (
        <div className={styles['container']}>
            <h1 className={styles["heading"]}>Search food</h1>
            <h2 className={styles["sub-heading"]}>Search the food to check whether it's safe for your piggy to eat</h2>
            <div className={styles['select-container']}>
                <Select
                    className={styles['react-select-component']}
                    value={currentlySelected}
                    isClearable={true}
                    options={options}
                    onChange={setCurrentlySelected}
                    styles={selectStyles}
                    placeholder={'Type here...'}
                    components={{
                        //Remove components by passing funcs returning null
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                    }}
                    noOptionsMessage={() => `Our piggies haven't tasted this food yet :/`}
                />
                <div className={styles["bitten"]}></div>
            </div>
            <img src={piggyImg} alt="A Guinea pig drawing" className={styles["piggy-img"]} />
        </div>

    )
};