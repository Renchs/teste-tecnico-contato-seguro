
import styles from "./app.module.css";
import { FindAuthor } from "./components/FindAuthor";
import { TableAuthor } from "./components/TableAuthor";


function App() {

  return (
    <>
      <section className={styles.container}>
        <FindAuthor />
        <TableAuthor />
      </section>
      
    </>
  )
}

export default App
