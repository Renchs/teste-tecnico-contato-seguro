import { createContext } from "react";
import { IAuthor } from "../interfaces/IAuthor";
import { IBook } from "../interfaces/IBook";


interface DataContextType {
    dataAuthor: IAuthor[];
    dataBook: IBook[];
    setDataAuthor: React.Dispatch<React.SetStateAction<IAuthor[]>>;
    setDataBook: React.Dispatch<React.SetStateAction<IBook[]>>;
}


export const DataContext = createContext<DataContextType | undefined>(undefined)