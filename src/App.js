import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from './components/NotFound/NotFound';
import CookieConsent, { Cookies } from "react-cookie-consent";
import useLocalStorage from 'use-local-storage';

function App() {
  // Darkmode
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkmode, setDarkmode] = useLocalStorage("Dark mode", preference); 

  // Cookies management
  const setBaseCookies = () => {
    return;
  }
  const setFullCookies = () => {
    return;
  }

  return (
    <div className={`${styles["app"]} ${darkmode && styles["dark-mode"]}`}>
      <header className={styles["app-header"]}>
        <Navigation logoIcon={<FontAwesomeIcon icon={faWheatAwnCircleExclamation} />} />
      </header>
      <main className={styles['app-main']}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/pop-edible" element={<PopEdible />}></Route> */}
          {/* <Route path="/pop-toxic" element={<PopToxic />}></Route> */}
          {/* <Route path="/combos" element={<Combos />}></Route> */}
          {/* <Route path="/add" element={<Create />}></Route> */}
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer
        darkmode={darkmode}
        setDarkmode={setDarkmode}
      />
      <CookieConsent
        // buttonClasses={styles.acceptBtn}
        // declineButtonClasses={styles.declineBtn}
        enableDeclineButton
        debug={true}
        onAccept={setBaseCookies}
        onDecline={setFullCookies}
        style={{
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.84)",
          overflowX: "hidden"
        }}
        contentStyle={
          {
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          }
        }
        buttonStyle={{
          backgroundColor: "var(--bg-secondary)",
          color: "var(--accent-main)",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          fontWeight: "500",
          borderRadius: "64px",
          padding: "0.5rem 1rem"
        }}
        declineButtonStyle={{
          backgroundColor: "var(--white)",
          color: "var(--accent-main)",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          fontWeight: "500",
          borderRadius: "64px",
          padding: "0.5rem 1rem"
        }}

      >We collect cookies to analyze our website traffic and performance; we never collect any personal data. Selecting "I decline" will only store 1 crucial cookie: your consent status.</CookieConsent>

    </div>
  );
}

export default App;

/* <Route path="/contacts" element={<Contacts />}></Route> */
/* <Route path="/terms" element={<Terms />}></Route> */
/* <Route path="/privacy" element={<Privacy />}></Route> */
/* <Route path="/cookies" element={<Cookies />}></Route> */
/* <Route path="/sources" element={<Sources />}></Route> */