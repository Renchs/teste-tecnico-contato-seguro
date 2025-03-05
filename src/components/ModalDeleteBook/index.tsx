import { useDataContext } from "../../hooks/useDataContext";
import { ModalDelete } from "../ModalDelete";

interface IModalDeleteBook {
    id: number;
    onClose: () => void;
}

export function ModalDeleteBook({ onClose, id }: IModalDeleteBook) {
    const { dataBook, setDataBook } = useDataContext();

    const onDelete = () => {
        const filterBook = dataBook.filter((book) => book.id !== id);
        setDataBook(filterBook);
        onClose();
    }

    return (
        <ModalDelete title="Deletar Livro" message="Tem certeza que deseja excluir esse livro?" onDelete={onDelete} onClose={onClose} />
    )
}
