import { useForm } from "../../hooks/useForm";
import styles from "./Create.module.css";
import * as veggieService from "../../services/veggiesService";
import { useNavigate } from "react-router-dom";


export const Create = (props) => {
    
    const navigate = useNavigate();

    const onSubmitHandler = (data) => {
        veggieService.create(data)
            .then(res => console.log(res))
            .then(() => navigate("/"))
            .catch(err => alert(err));
            
    }

    const { formValues, onChangeHandler, onSubmit, changeValues } = useForm({
        veggieName: "",
        isEdible: false,
        inModeration: false,
        serving: "",
        notes: "",
        comboIdeas: "",
    }, onSubmitHandler);

    return (
        <form action="post"
            onSubmit={onSubmit}
            className={styles['create-form']}>
            <label htmlFor="veggieName">Name</label>
            <input type="text"
                name={"veggieName"}
                onChange={onChangeHandler}
                value={formValues.veggieName}
            />

            <label htmlFor="isEdible">Edible?</label>
            <input type="checkbox"
                name="isEdible"
                onChange={onChangeHandler}
                value={formValues.isEdible} />

            <label htmlFor="inModeration">In Moderation?</label>
            <input type="checkbox"
                name="inModeration"
                onChange={onChangeHandler}
                value={formValues.inModeration} />

            <label htmlFor="serving">Serving</label>
            <input type="textarea"
                name="serving"
                onChange={onChangeHandler}
                value={formValues.serving} />

            <label htmlFor="notes">Notes</label>
            <input type="textarea"
                name="notes"
                onChange={onChangeHandler}
                value={formValues.notes} />

            <label htmlFor="comboIdeas">comboIdeas</label>
            <input type="textarea"
                name="comboIdeas"
                onChange={onChangeHandler}
                value={formValues.comboIdeas} />

            <button type='submit'>Confirm</button>
        </form>
    )
}