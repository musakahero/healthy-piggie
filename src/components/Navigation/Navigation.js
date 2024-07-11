import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = ({
  logoIcon,
}) => {

  return (
    <nav className={styles['nav']}>
      <div className={styles['logo-container']}>
        <span className={styles["logo-title"]}><NavLink to="/">MY PIGGY EATS</NavLink></span>
      </div>
      <ul className={styles["nav-items-container"]}>
        {/* <li className={styles["nav-item"]}><NavLink to="/pop-edible">Edible foods</NavLink></li>*/}
      </ul>
    </nav>
  )
}