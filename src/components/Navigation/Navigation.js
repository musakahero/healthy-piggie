import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = ({
  logoIcon,
}) => {

    return (
        <nav className={styles['nav']}>
          <div className={styles['logo-container']}>
            <i className={styles["logo-icon"]}>{logoIcon}</i>
            <span className={styles["logo-title"]}><NavLink to="/">Healthy Piggie</NavLink></span>
          </div>
          <ul className={styles["nav-items-container"]}>
            <li className={styles["nav-item"]}><NavLink to="/pop-edible">Edible foods</NavLink></li>
            <li className={styles["nav-item"]}><NavLink to="/pop-toxic">Toxic foods</NavLink></li>
            <li className={styles["nav-item"]}><NavLink to="/combos">Food combos</NavLink></li>
            <li className={styles["nav-item"]}><NavLink to="/add">Add</NavLink></li>
          </ul>
        </nav>
    )
}