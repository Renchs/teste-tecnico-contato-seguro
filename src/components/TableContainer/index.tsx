import styles from "./tableContainer.module.css";





export function TableContainer() {
    return (
        <table className={styles.containerTable}>
            <thead className={styles.tableHeader}>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.tableBodyValues}>
                    <td>John Doe</td>
                    <td>johndoe@example.com</td>
                    <td>
                        <select>
                            <option>Exibir</option>
                            <option>Detalhes</option>
                            <option>Livros</option>
                            <option>Editar</option>
                            <option>Deletar</option>
                        </select>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}
