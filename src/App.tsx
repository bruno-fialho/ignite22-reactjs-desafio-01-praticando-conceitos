import { Header } from './components/Header';
import { ToDos } from './components/ToDos';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <ToDos />
    </div>
  )
}

export default App
