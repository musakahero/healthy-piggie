import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from './components/Navigation/Navigation';
import { PopEdible } from './components/PopEdible/PopEdible';
import { PopToxic } from './components/PopToxic/PopToxic';
import { Home } from './components/Home/Home';
import { Combos } from './components/Combos/Combos';
import { Footer } from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Create } from './components/Create/Create';
import { NotFound } from './components/NotFound/NotFound';
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className={styles["app"]}>
      <header className={styles["app-header"]}>
        <Navigation logoIcon={<FontAwesomeIcon icon={faWheatAwnCircleExclamation} />} />
      </header>
      <main className={styles['app-main']}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pop-edible" element={<PopEdible />}></Route>
          <Route path="/pop-toxic" element={<PopToxic />}></Route>
          <Route path="/combos" element={<Combos />}></Route>
          <Route path="/add" element={<Create />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
      <CookieConsent
      debug={true}
      contentStyle={
        {fontSize:"1.3rem"}
      }
      style={{
        alignItems:"center",
        backgroundColor:"rgba(0, 0, 0, 0.84)"
      }}
      buttonStyle={{
        fontSize:"1.4rem"
      }}
      >We collect cookies to analyze our website traffic and performance; we never collect any personal data.</CookieConsent>
      
    </div>
  );
}

export default App;

/* <Route path="/contacts" element={<Contacts />}></Route> */
/* <Route path="/terms" element={<Terms />}></Route> */
/* <Route path="/privacy" element={<Privacy />}></Route> */
/* <Route path="/cookies" element={<Cookies />}></Route> */
/* <Route path="/sources" element={<Sources />}></Route> */