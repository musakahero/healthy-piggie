import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {

    return (
        <nav className={styles['nav']}>
          <div className={styles['logo-container']}>
            <i>ICON </i>
            <span><NavLink to="/">Healthy Piggie</NavLink></span>
          </div>
          <ul className={styles["nav-items-container"]}>
            <li className={styles["nav-item"]}><NavLink to="/pop-edible">Most popular foods</NavLink></li>
            <li className={styles["nav-item"]}><NavLink to="/pop-toxic">Popular toxic foods</NavLink></li>
            <li className={styles["nav-item"]}><NavLink to="/combos">Food combinations</NavLink></li>
          </ul>
        </nav>
    )
}