import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from './components/Navigation/Navigation';
import { PopEdible } from './components/PopEdible/PopEdible';
import { PopToxic } from './components/PopToxic/PopToxic';
import { Home } from './components/Home/Home';
import { Combos } from './components/Combos/Combos';
import { Footer } from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWheatAwnCircleExclamation} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className={styles["app"]}>
      <header className={styles["app-header"]}>
        <Navigation logoIcon = {<FontAwesomeIcon icon={faWheatAwnCircleExclamation}/>}/>
      </header>
        <main className={styles['app-main']}>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pop-edible" element={<PopEdible />}></Route>
          <Route path="/pop-toxic" element={<PopToxic />}></Route>
          <Route path="/combos" element={<Combos />}></Route>
          {/* <Route path="/contacts" element={<Contacts />}></Route> */}
            {/* <Route path="/terms" element={<Terms />}></Route> */}
            {/* <Route path="/privacy" element={<Privacy />}></Route> */}
            {/* <Route path="/cookies" element={<Cookies />}></Route> */}
            {/* <Route path="/sources" element={<Sources />}></Route> */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
