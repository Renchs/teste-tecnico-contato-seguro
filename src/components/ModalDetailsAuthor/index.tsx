import { Author } from "../../context/DataProvider";
import { useDataContext } from "../../hooks/useDataContext";
import { ModalDetails } from "../ModalDetails";


interface IModalDetailsAuthor {
    author: Author;
    onClose: () => void;
}

export function ModalDetailsAuthor({ author, onClose }: IModalDetailsAuthor) {

    const { dataBook } = useDataContext();

    const bookAuthor = dataBook.filter(book => book.autorId === author.id).length;

    return (
        <ModalDetails title={author.nome} onClose={onClose}>
            <p>Email: {author.email}</p>
            <p>Número de livros registrados: {bookAuthor}</p>
        </ModalDetails>
    )
}
