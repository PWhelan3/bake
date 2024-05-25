import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <p>Hello!</p>
      <Home />
      <Shop />
      <About />
      <Checkout />
    </div>
  );
}

export default App;
