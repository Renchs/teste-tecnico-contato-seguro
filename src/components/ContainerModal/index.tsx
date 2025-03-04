import { ReactNode } from "react"
import styles from "./containerModel.module.css";

interface IContainerModal {
    children: ReactNode;
}
export function ContainerModal({ children }: IContainerModal) {
    return (
        <div className={styles.containerModal}>
            {children}
        </div>
    )
}
