import styles from "./findAuthor.module.css";


export function FindAuthor() {
    return (
        <section className={styles.containerFindAuthor}>
            <input placeholder="Buscar por nome" type="text" />
            <div className={styles.containerFindAndOrder}>
                <div className={styles.resultNumber}>
                    <h3>Resultados</h3>
                    <p>10</p>
                </div>
                <div className={styles.containerFilterFind}>
                    <p>Odernar por</p>
                    <div className={styles.filterFind}>
                        <select>
                            <option>A - Z</option>
                            <option>Mais recente</option>
                            <option>Mais antigo</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}
