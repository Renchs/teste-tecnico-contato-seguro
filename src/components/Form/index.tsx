import styles from "./form.module.css";

interface IForm {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}
export function Form({ handleSubmit, children }: IForm) {
    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
