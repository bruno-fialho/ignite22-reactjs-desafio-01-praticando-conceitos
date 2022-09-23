import styles from './App.module.css';
import { Header } from './components/Header';

import './global.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default App
