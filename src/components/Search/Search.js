import Select, { createFilter } from 'react-select';
import styles from './Search.module.css'
export const Search = ({
    setCurrentlySelected,
    options,
    currentlySelected
}) => {

    const selectStyles = {
        control: (styles, state) => ({ ...styles, 
            backgroundColor: "whitesmoke",
            minWidth: "13vw",
            borderRadius: "12px"
        })
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
                filterOption={createFilter({ matchFrom: "start" })}
                />
        </div>

    )
};