import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <>
        <ul className={styles.container}>
            <li>Contacts</li>
            <li>Sources</li>
            <li>Sources</li>
            <li>Sources</li>
            <li>Sources</li>
        </ul>
        <div className={styles.copyright}><span>MusakaSoft &copy;</span></div>
        </>
        
    )
}