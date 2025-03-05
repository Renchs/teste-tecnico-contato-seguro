import { useDataContext } from "../../hooks/useDataContext";
import { ModalDelete } from "../ModalDelete";

interface IModalDeleteAuthor {
    id: number;
    onClose: () => void;
}

export function ModalDeleteAuthor({ onClose, id }: IModalDeleteAuthor) {
    
    const { dataAuthor, setDataAuthor, dataBook, setDataBook } = useDataContext();

    const onDelete = () => {
        
        setDataAuthor(dataAuthor.filter((author) => author.id !== id));
        
        setDataBook(dataBook.filter((book) => book.autorId !== id));

        onClose(); 
    }
    
    return (
        <ModalDelete
            title="Deletar Autor"
            message="Tem certeza de que deseja excluir este autor?"
            onClose={onClose}
            onDelete={onDelete}
        />
    )
}
