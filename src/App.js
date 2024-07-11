import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from './components/NotFound/NotFound';
import CookieConsent /*{ Cookies }*/ from "react-cookie-consent";
import useLocalStorage from 'use-local-storage';
import { Results } from './components/Results/Results';

function App() {
  // Darkmode
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkmode, setDarkmode] = useLocalStorage("Dark mode", preference);

  // Cookies management
  // const setBaseCookies = () => {
  //   return;
  // }
  // const setFullCookies = () => {
  //   return;
  // }
  return (
    <div className={`${styles["app"]} ${darkmode && styles["dark-mode"]}`}>
      <header className={styles["app-header"]}>
        <Navigation logoIcon={<FontAwesomeIcon icon={faWheatAwnCircleExclamation} />} />
      </header>
      <main className={styles['app-main']}>
        {/* All routed elements are rendered in the main HTML element */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer
        darkmode={darkmode}
        setDarkmode={setDarkmode}
      />
      {/* Cookie consent banner using react-cookie-consent library */}
      <CookieConsent
        enableDeclineButton
        debug={true}
        containerClasses={styles["cookie-consent-container"]}
        contentClasses={styles.content}
        buttonWrapperClasses={styles.wrapper}
        buttonClasses={styles["accept-btn"]}
        declineButtonClasses={styles["decline-btn"]}
      // onAccept={setBaseCookies}
      // onDecline={setFullCookies}
      >We collect cookies to analyze our website traffic and performance; we never collect any personal data. Selecting "I decline" will only store 1 crucial cookie: your consent status.</CookieConsent>
    </div>
  );
}

export default App;
