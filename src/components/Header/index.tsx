import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { ModalFormAuthor } from "../ModalFormAuthor";
import { ModalFormBook } from "../ModalFormBook";
import { Link, useLocation } from "react-router";
import { useDataContext } from "../../hooks/useDataContext";


export function Header() {
    
    const [modalCreateAuthorForm, setModalCreateAuthorForm] = useState<boolean>(false);
    const [modalCreateBookForm, setModalCreateBookForm] = useState<boolean>(false);

    const { dataAuthor, dataBook } = useDataContext();

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setResultFind(dataAuthor.length);
        } else if (location.pathname === "/books") {
            setResultFind(dataBook.length);
        }
    }, [dataAuthor.length, dataBook.length, location.pathname])
    

    const [resultFind, setResultFind] = useState(0);

    return (
        <>
            {
                modalCreateAuthorForm && (
                    <ModalFormAuthor isEditing={false} onClose={() => setModalCreateAuthorForm(false)} />
                )
            }

            {
                modalCreateBookForm && (
                    <ModalFormBook isEditing={false} onClose={() => setModalCreateBookForm(false)} />
                )
            }
            <div className={styles.container}>
                <section className={styles.containerFindAuthor}>
                    <div className={styles.links}>
                    <Link to={"/"}>Autores</Link>
                    <Link to={"/books"}>Livros</Link>
                </div>
                    <div className={styles.containerButton}>
                        <button onClick={() => setModalCreateBookForm(true)}>Cadastrar Livro</button>
                        <button onClick={() => setModalCreateAuthorForm(true)}>Cadastrar Autor</button>
                    </div>

                        <div className={styles.numberResultFind}>
                            <h3>Encontrado:</h3>
                        <p>{resultFind }</p>
                        </div>
                </section>
            </div>

        </>
    )
}
