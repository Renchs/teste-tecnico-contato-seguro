import { useState } from "react";
import styles from "./tableFieldValue.module.css";

interface ITableFieldValue {
    id: number;
    name: string;
    email: string;
    onDelete: (id: number) => void;
    onDetails: (id: number) => void;
    onEdit: (id: number) => void;
}

export function TableFieldValue({ id, email, name, onDelete, onDetails, onEdit }: ITableFieldValue) {
    const [selecOptionAuthor, setSelectOptionAuthor] = useState("");

    const resetSelect = () => {
        setSelectOptionAuthor("");
    }

    const handleSelectAuthor = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOptionAuthor(event.target.value);
    }

    const handleDeleteAuthor = () => {
        setTimeout(() => {
            onDelete(id);
            resetSelect();
        }, 0)
    }

    const handleDetailsAuthor = () => {
        setTimeout(() => {
            onDetails(id);
            resetSelect();
        }, 0)
    }

    const handleEditAuthor = () => { 
        setTimeout(() => {
            onEdit(id);
            resetSelect();
        }, 0)
    }

    switch (selecOptionAuthor) {
        case "delete":
            handleDeleteAuthor();
            break;
        case "details":
            handleDetailsAuthor();
            break;
        case "edit":
            handleEditAuthor();
            break;
        case "":
        default:
            break;
    }

    return (
        <>
            <tr className={styles.tableBodyValues} key={id} >
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <select
                        className={styles.select}
                        value={""}
                        onChange={handleSelectAuthor}
                    >
                        <option defaultValue={""} value="">Exibir</option>
                        <option value={"details"}>Detalhes</option>
                        <option value={"edit"}>Editar</option>
                        <option value={"delete"}>Deletar</option>
                    </select>
                </td>
            </tr>
        </>
    )
}
