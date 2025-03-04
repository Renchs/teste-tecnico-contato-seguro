import { useState } from "react";
import styles from "./tableFieldBook.module.css";
import { useDataContext } from "../../hooks/useDataContext";


interface ITableFieldBook {
    id: number;
    authorId: number;
    title: string;
    pages: number;

    onDelete: (id: number) => void;
    onDetails: (id: number) => void;
    onEdit: (id: number) => void;
}

export function TableFieldBook({ id, authorId, title, pages, onDelete, onDetails, onEdit }: ITableFieldBook) {
    const { dataAuthor } = useDataContext();
    const [selectOptionBook, setSelectOptionBook] = useState("");
    const findAuthor = dataAuthor.find((author) => author.id === authorId)?.nome || "";
   
    
    const resetSelect = () => {
        setSelectOptionBook("");
    }

    const handleSelectBookOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOptionBook(event.target.value);
    }

    const handleDeleteBook = () => {
        setTimeout(() => {
            onDelete(id);
            resetSelect();
        }, 0)
    }

    const handleDetailsBook = () => {
        setTimeout(() => {
            onDetails(id);
            resetSelect();
        }, 0)
    }

    const handleEditBook = () => {
        setTimeout(() => {
            onEdit(id);
            resetSelect();
        }, 0)
    }

    switch (selectOptionBook) {
        case "delete":
            handleDeleteBook();
            break;
        case "details":
            handleDetailsBook();
            break;
        case "edit":
            handleEditBook();
            break;
        default:
            break;
    }

    return (
        <tr className={styles.tableBodyValues}>
            <td>{title}</td>
            <td>{pages <= 0 ? "Não registrado" : pages}</td>
            <td>{findAuthor}</td>
            <td>
                <select value={""} onChange={handleSelectBookOption}>
                    <option defaultValue={""}>Exibir</option>
                    <option value={"details"}>Detalhes</option>
                    <option value={"edit"}>Editar</option>
                    <option value={"delete"}>Deletar</option>
                </select>
            </td>
        </tr>
    )
}
