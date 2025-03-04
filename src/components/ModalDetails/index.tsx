import styles from "./modalDetails.module.css";
import { ContainerModal } from "../ContainerModal";


interface IModalDetails {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    
}
export function ModalDetails({ title, children, onClose }: IModalDetails) {
    return (
        <ContainerModal>
            <section className={styles.modalPerfil}>
                <h2>{title}</h2>
                {children}
                <button onClick={onClose}>Voltar</button>
            </section>
        </ContainerModal>
    )
}
