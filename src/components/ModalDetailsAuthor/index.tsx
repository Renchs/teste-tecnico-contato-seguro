
import { useDataContext } from "../../hooks/useDataContext";
import { IAuthor } from "../../interfaces/IAuthor";
import { ModalDetails } from "../ModalDetails";


interface IModalDetailsAuthor {
    author: IAuthor;
    onClose: () => void;
}

export function ModalDetailsAuthor({ author, onClose }: IModalDetailsAuthor) {

    const { dataBook } = useDataContext();

    const bookAuthor = dataBook.filter(book => book.autorId === author.id).length;

    return (
        <ModalDetails title={author.name} onClose={onClose}>
            <p>Email: {author.email}</p>
            <p>Número de livros registrados: {bookAuthor}</p>
        </ModalDetails>
    )
}
