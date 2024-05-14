import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from './components/Navigation/Navigation';
import { PopEdible } from './components/PopEdible/PopEdible';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
        <Navigation />
      </header>
        <main className={styles['App-main']}>
          <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/pop-edible" element={<PopEdible />}></Route>
          </Routes>
        </main>
    </div>
  );
}

export default App;
