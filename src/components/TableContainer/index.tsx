import styles from "./tableContainer.module.css";


const dadosTabela = [
    { nome: "John Doe", email: "johndoe@example.com" },
    { nome: "Jane Doe", email: "janedoe@example.com" },
    { nome: "Alice Johnson", email: "alicejohnson@example.com" },
    { nome: "Bob Smith", email: "bobsmith@example.com" },
    { nome: "Charlie Brown", email: "charliebrown@example.com" },
    { nome: "David Wilson", email: "davidwilson@example.com" },
    { nome: "Emily Davis", email: "emilydavis@example.com" },
    { nome: "Frank Miller", email: "frankmiller@example.com" },
    { nome: "Grace Thompson", email: "gracetompson@example.com" },
]


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
                {
                    dadosTabela.map((dados) => (
                        <tr className={styles.tableBodyValues} key={dados.nome}>
                            <td>{dados.nome}</td>
                            <td>{dados.email}</td>
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
                    ))
                }
            </tbody>
        </table>
    )
}
