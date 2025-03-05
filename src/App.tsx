
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { TableBook } from "./components/TableBook";

import { DataProvider } from "./context/DataProvider";
import { TableAuthor } from "./components/TableAuthor";

function App() {
  return (
    <>
      <BrowserRouter basename="/teste-tecnico-contato-seguro">
        <DataProvider>
          <div className={styles.container}>
            <Header />
            <Routes>
              <Route path="/" element={<TableAuthor />} />
              <Route path="/books" element={<TableBook />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </DataProvider>
      </BrowserRouter>

    </>
  )
}

export default App
