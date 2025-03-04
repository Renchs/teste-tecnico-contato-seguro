import { useEffect, useState } from "react";
import { Book } from "../../context/DataProvider";
import { useDataContext } from "../../hooks/useDataContext"
import { ModalDetails } from "../ModalDetails";


interface IModalDetailsBook {
    book: Book;
    onClose: () => void;
}

export function ModalDetailsBook({ book, onClose }: IModalDetailsBook) {
    const { dataAuthor } = useDataContext();
    const [messageBookPage, setMessageBookPage] = useState<string>("");
    const author = dataAuthor.find(author => author.id === book.autorId)?.nome || "";

    useEffect(() => {
        if (book.paginas === undefined || book.paginas <= 0) {
            setMessageBookPage("Total de páginas não registradas.");
        } else {
            setMessageBookPage(`O livro possui um total de ${book.paginas} páginas.`);
        }
    }, [book.paginas]);

    return (
        <ModalDetails title={book.titulo} onClose={onClose}>
            <p>{ messageBookPage }</p>
            <p>Escrito por { author }</p>
        </ModalDetails>
    )
}
