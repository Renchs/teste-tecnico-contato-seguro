import styles from "./buttonPagination.module.css";
import { useEffect, useRef, useState } from "react";


interface IButtonPagination<T> {
    data: T[];
    setDataFilter: (data: T[]) => void;
}

export function ButtonPagination<T>({ data, setDataFilter }: IButtonPagination<T>) {
    const pageDate = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = data.length ? Math.ceil(data.length / pageDate) : 0;

    const indexOfLastItem = currentPage * pageDate;
    const indexOfFirstItem = indexOfLastItem - pageDate;

    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const prevDataRef = useRef<T[]>([]);

    useEffect(() => {
    
        if (JSON.stringify(prevDataRef.current) !== JSON.stringify(currentData)) {
            setDataFilter(currentData);
            prevDataRef.current = currentData; 
        }
    }, [currentData, setDataFilter]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    return (
        <div className={styles.containerButtonPrevProx}>

            <button className={currentPage === 1 ? styles.ocultButton : ""} onClick={handlePreviousPage} disabled={currentPage === 1}>
                Voltar
            </button>

            <span>{currentPage} de {totalPages}</span>

            <button
                className={currentPage >= totalPages ? styles.ocultButton : ""}
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
            >
                Próximo
            </button>
        </div>
    );
}