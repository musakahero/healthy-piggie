import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = ({ darkmode,
    setDarkmode
}) => {

    return (<>
        <div className={styles["footer-container"]}>
            <ul className={styles["socials-container"]}>
                <li className={styles["linkedin"]}>
                    <Link to={""} target='_blank'>
                        {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                    </Link>
                </li>
                <li className={styles["github"]}>
                    <Link to={""} target='_blank'>
                        {/* <FontAwesomeIcon icon={faGithub} /> */}
                    </Link>
                </li>
                <li className={styles["gmail"]}>
                    <Link to={""} target='_blank'>
                        {/* <FontAwesomeIcon icon={faGoogle} /> */}
                    </Link>
                </li>
            </ul>
            <button
                className={styles['darkmode-btn']}
                type="button"
                onClick={() => {
                        setDarkmode(!darkmode);
                    }}>
                <Link><FontAwesomeIcon icon={darkmode ? faSun : faMoonSolid} /></Link>
                <span className={styles["tooltiptext"]}>
                    {!darkmode ? "Dark mode" : "Light mode"}
                </span>
            </button>
        </div>
        <div className={styles.copyright}><span>MusakaSoft &copy; 2024</span></div>
    </>
    )
}