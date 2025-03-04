import { createContext } from "react";
import { Author, Book } from "./DataProvider";

interface DataContextType {
    dataAuthor: Author[];
    dataBook: Book[];
    setDataAuthor: React.Dispatch<React.SetStateAction<Author[]>>;
    setDataBook: React.Dispatch<React.SetStateAction<Book[]>>;
}


export const DataContext = createContext<DataContextType | undefined>(undefined)