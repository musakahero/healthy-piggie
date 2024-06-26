import Select from 'react-select';
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
            backgroundColor: "var(--bg-search)",
            minWidth: "23rem",
            maxWidth: "23rem",
            height: "4rem",
            borderRadius: "34px",
            border: "none",
            borderColor: `${state.isFocused ? "#red" : "grey"}`,
            padding: "0 2.5rem 0 1rem",
            // boxShadow: `${state.isFocused && `0 0 0 1px orange`}`
            boxShadow: "none",
            cursor: "text"

        }),
        clearIndicator: (styles, state) => ({
            ...styles,
            padding: "0.5rem",
            paddingLeft: "0",
            color: "var(--font-search)",
            "&:hover": {
                color: "var(--font-search)"
            }
        }),
        input: (styles, state) => ({
            ...styles,
            margin: "auto",
            color: "var(--font-search)",
        }),
        menu: (styles, state) => ({
            ...styles,
            borderRadius: "64px",
            overflow: "hidden",
            width: "21.5rem",
            fontSize: "2rem",
            backgroundColor: "var(--bg-main)"
        }),
        menuList: (styles, state) => ({
            ...styles,
            textAlign: "center",
            borderRadius: "8px",
            "::-webkit-scrollbar": {
                borderRadius: "8px",
                scrollbarWidth: "thin",
                backgroundColor: "var(--bg-main)"
            },
            "::-webkit-scrollbar-thumb": {
                borderRadius: "8px",
                backgroundColor: "var(--font-dark)"
            }
        }),
        option: (styles, state) => ({
            ...styles,
            backgroundColor: `${state.isFocused && "var(--bg-option-focused)"}`,
            color: "var(--font-dark)",
            "&:hover": {
                backgroundColor: "var(--accent-main)",
                color: "var(--font-search-light)",
            },
        }),
        singleValue: (styles, state) => ({
            ...styles,
            color: "var(--font-search)"
        }),
        placeholder: (styles, state) => ({
            ...styles,
            color: "var(--font-search)",
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