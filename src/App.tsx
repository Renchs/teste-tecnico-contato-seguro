import { FindAutor } from "./components/FindAutor"
import { TableContainer } from "./components/TableContainer"
import styles from "./app.module.css";


function App() {

  return (
    <>
      <section className={styles.container}>
        <FindAutor />
        <TableContainer />
      </section>
      
    </>
  )
}

export default App
