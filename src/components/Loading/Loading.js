import spinner from './Pulse@1x-1.0s-200px-200px.svg';
import styles from './Loading.module.css';

export const Loading = () => {

    return (<div>
        <img src={spinner} alt='Loading spinner' className={styles.spinner}></img>
    </div>);
}