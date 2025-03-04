import { ContainerModal } from "../ContainerModal";

import styles from "./modalDelete.module.css";

interface IModalDelete {
    title: string;
    message: string;
    onDelete: () => void;
    onClose: () => void;
}
export function ModalDelete({ title, message, onClose, onDelete }: IModalDelete) {
    return (
        <ContainerModal>
            <section className={styles.modalDelete}>
                <h2>{title}</h2>
                <p>{message}</p>
                <div className={styles.containerButton}>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={onDelete}>Confirmar</button>
                </div>
            </section>
        </ContainerModal>
    )
}
