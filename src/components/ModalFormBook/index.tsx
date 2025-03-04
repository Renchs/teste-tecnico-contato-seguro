
// import { useState } from "react"
import { ContainerModal } from "../ContainerModal";
import { useDataContext } from "../../hooks/useDataContext";
import { Form } from "../Form";
import { useEffect, useState } from "react";
import { Book } from "../../context/DataProvider";


interface IModalFormBook {
    onClose: () => void;
    isEditing: boolean;
    bookEdit?: Book;
}

export function ModalFormBook({ onClose, bookEdit, isEditing }: IModalFormBook) {
    const { dataBook, dataAuthor, setDataBook } = useDataContext();
    const [title, setTitle] = useState("");
    const [errorTitleMsg, setErrorTitleMsg] = useState("");
    const [authorId, setAuthorId] = useState(-1);
    const [pages, setPages] = useState<number>();

    useEffect(() => {
        if (isEditing && bookEdit) {
            setTitle(bookEdit.titulo);
            setPages(bookEdit.paginas || 0);
            setAuthorId(bookEdit.autorId);
        }
    }, [bookEdit, isEditing])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!title.match(/^(?=.*[A-Za-zÀ-ÖØ-öø-ÿ])[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/)) {
            setErrorTitleMsg("O titulo não pode ter somente numeros.")
        }

        if (authorId === -1) {
            return;
        }

        if (isEditing && bookEdit) {
            setDataBook(dataBook.map((books) => books.id === bookEdit.id ? {
                ...books,
                titulo: title,
                autorId: authorId,
                paginas: pages,
            } : books));
            onClose();
        }

        else {
            const book: Book = {
                id: dataBook.length + 1,
                titulo: title,
                autorId: authorId,
                paginas: pages,
            }
            
            setDataBook([...dataBook, book]);
            onClose();
        }


    }

    const handleAuthorChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
        setAuthorId(Number(event.target.value));        
    }

    return (
        <ContainerModal>
            <Form handleSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="Titulo" placeholder="Titulo do Livro" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <p>{errorTitleMsg}</p>
                    </div>

                    <div>
                        <input type="number" name="Paginas" value={pages} onChange={(e) => setPages(Number(e.target.value))} placeholder="Numero de páginas" />
                    </div>

                    <select value={authorId} onChange={handleAuthorChange}>
                        <option value={""}>Selecionar Autor</option>
                        {
                            dataAuthor.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.nome}
                                </option>
                            ))
                        }
                    </select>
                    <div>
                        <button>{isEditing ? "Atualizar" : "Cadastrar"}</button>
                        <button>Cancelar</button>
                    </div>

            </Form>
        </ContainerModal>
    )
}
