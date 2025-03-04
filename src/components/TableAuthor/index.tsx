import styles from "./tableAuthor.module.css";

import { TableFieldValue } from "../TableFieldValue";
import { useDataContext } from "../../hooks/useDataContext";
import { useState } from "react";
import { ModalDetailsAuthor } from "../ModalDetailsAuthor";
import { ModalFormAuthor } from "../ModalFormAuthor";
import { ModalDelete } from "../ModalDelete";
import { Author } from "../../context/DataProvider";
import { ButtonPagination } from "../ButtonPagination";

export function TableAuthor() {
    const { dataAuthor, setDataAuthor } = useDataContext();
    const [dataAuthorFilter, setDataAuthorFilter] = useState<Author[]>();

    const [selectDeleteAuthor, setSelectDeleteAuthor] = useState<number>();
    const [modalDeleteAuthor, setModalDeleteAuthor] = useState(false);

    const [selectDetailsAuthor, setSelectDetailsAuthor] = useState<number>();
    const [modalDetailsAuthor, setModalDetailsAuthor] = useState(false);

    const [selectEditAuthor, setSelectEditAuthor] = useState<number>();
    const [modalEditAuthor, setModalEditAuthor] = useState(false);

    const onDeleteAuthor = () => {
        const filteredAuthors = dataAuthor.filter((author) => author.id !== selectDeleteAuthor);

        setDataAuthor(filteredAuthors);

        setModalDeleteAuthor(false);
    }

    const handleSelectDetailsAuthor = (id: number) => {
        setSelectDetailsAuthor(id);
        setModalDetailsAuthor(true);
    }

    const handleDeleteAuthor = (id: number) => {
        setSelectDeleteAuthor(id);
        setModalDeleteAuthor(true);
    }

    const handleEditAuthor = (id: number) => {
        setSelectEditAuthor(id);
        setModalEditAuthor(true);
    }

    return (
        <>
            {
                modalDeleteAuthor && <ModalDelete
                    title="Deletar Autor"
                    message="Tem certeza de que deseja excluir este autor?"
                    onDelete={onDeleteAuthor}
                    onClose={() => setModalDeleteAuthor(false)}
                />
            }
            {
                modalDetailsAuthor && <ModalDetailsAuthor
                    author={dataAuthor.find((user) => user.id === selectDetailsAuthor)!}
                    onClose={() => setModalDetailsAuthor(false)}
                />
            }

            {
                modalEditAuthor && <ModalFormAuthor
                    isEditing authorEdit={dataAuthor.find((user) => user.id === selectEditAuthor)!}
                    onClose={() => setModalEditAuthor(false)}
                />
            }

            <section className={styles.containerValueTable}>
                <table className={styles.containerTable}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataAuthorFilter?.filter((author) => author !== undefined).map((dados) => (
                                <TableFieldValue
                                    key={dados.id}
                                    id={dados.id}
                                    email={dados.email || "Email não registrado."}
                                    name={dados.nome}
                                    onDelete={handleDeleteAuthor}
                                    onDetails={handleSelectDetailsAuthor}
                                    onEdit={handleEditAuthor}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </section>
            <ButtonPagination data={dataAuthor} setDataFilter={(setDataAuthorFilter)} />
        </>
    )
}
