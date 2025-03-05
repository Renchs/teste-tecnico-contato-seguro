import { useState } from "react";
import styles from "./tableBook.module.css";
import { useDataContext } from "../../hooks/useDataContext";
import { TableFieldBook } from "../TableFieldBook";
import { ModalDelete } from "../ModalDelete";
import { ModalDetailsBook } from "../ModalDetailsBook";
import { ModalFormBook } from "../ModalFormBook";
import { ButtonPagination } from "../ButtonPagination";
import { IBook } from "../../interfaces/IBook";

export function TableBook() {
    const { dataBook, setDataBook } = useDataContext();
    const [dataBookFilter, setDataBookFilter] = useState<IBook[]>()

    const [modalDetailsBook, setModalDetailsBook] = useState(false);
    const [modalDeleteBook, setModalDeleteBook] = useState(false);
    const [modalEditBook, setModalEditBook] = useState(false);

    const [selectBookDetailsBook, setSelectBookDetailsBook] = useState<number>();
    const [selectBookDeleteBook, setSelectBookDeleteBook] = useState<number>();
    const [selectBookEditBook, setSelectBookEditBook] = useState<number>();

    const handleOpenDetailsBook = (bookId: number) => {
        setSelectBookDetailsBook(bookId);
        setModalDetailsBook(true);
    }

    const handleOpenDeleteBook = (bookId: number) => {
        setSelectBookDeleteBook(bookId);
        setModalDeleteBook(true);
    }

    const handleOpenEditBook = (bookId: number) => {
        setSelectBookEditBook(bookId);
        setModalEditBook(true);
    }

    const onDeleteBook = () => {
        const filterBook = dataBook.filter((book) => book.id !== selectBookDeleteBook);
        setDataBook(filterBook);
        setModalDeleteBook(false);
    }

    return (
        <>
            {modalDeleteBook && <ModalDelete title="Deletar Livro" message="Tem certeza que deseja excluir esse livro?" onDelete={onDeleteBook} onClose={() => setModalDeleteBook(false)} />}

            {modalDetailsBook && <ModalDetailsBook book={dataBook.find(book => book.id === selectBookDetailsBook)!} onClose={() => setModalDetailsBook(false)} />}

            {modalEditBook && <ModalFormBook isEditing onClose={() => setModalEditBook(false)} bookEdit={dataBook.find(book => book.id === selectBookEditBook)!} />}

            <section className={styles.containerValueTable}>
                <table className={styles.containerTable}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th>Nome do Livro</th>
                            <th>Paginas</th>
                            <th>Autor</th>
                            <th>Opções</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dataBookFilter && dataBookFilter.map((book) => (
                                <TableFieldBook
                                    key={book.id}
                                    id={book.id}
                                    authorId={book.autorId}
                                    title={book.titulo}
                                    pages={book.paginas || 0}
                                    onDelete={handleOpenDeleteBook}
                                    onDetails={handleOpenDetailsBook}
                                    onEdit={handleOpenEditBook}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </section>
            <ButtonPagination data={dataBook} setDataFilter={setDataBookFilter} />
        </>
    )
}
