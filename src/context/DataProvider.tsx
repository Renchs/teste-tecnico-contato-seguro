import { ReactNode, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { IAuthor } from "../interfaces/IAuthor";
import { IBook } from "../interfaces/IBook";




interface IDataProviderProps {
    children: ReactNode;
}

export function DataProvider({ children }: IDataProviderProps) {

    const initialAuthors = [
        { id: 1, name: "John Doe", email: "johndoe@example.com" },
        { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
        { id: 3, name: "Alice Johnson", email: "alicejohnson@example.com" },
        { id: 4, name: "Bob Smith", email: "bobsmith@example.com" },
        { id: 5, name: "Charlie Brown", email: "charliebrown@example.com" },
        { id: 6, name: "David Wilson", email: "davidwilson@example.com" },
        { id: 7, name: "Emily Davis", email: "emilydavis@example.com" },
        { id: 8, name: "Frank Miller", email: "frankmiller@example.com" },
        { id: 9, name: "Grace Thompson", email: "gracetompson@example.com" },
        { id: 10, name: "Hannah Moore", email: "hannahmoore@example.com" },
        { id: 11, name: "Irene Lee", email: "irenelee@example.com" },
        { id: 12, name: "Jack Wilson", email: "jackwilson@example.com" },
        { id: 13, name: "Kathy Johnson", email: "kathyjohnson@example.com" },
        { id: 14, name: "Liam Harris", email: "liamharris@example.com" },
        { id: 15, name: "Megan Clark", email: "meganclark@example.com" },
        { id: 16, name: "Nathan Evans", email: "nathanevans@example.com" },
        { id: 17, name: "Olivia White", email: "oliviawhite@example.com" },
        { id: 18, name: "Paul Martin", email: "paulmartin@example.com" },
        { id: 19, name: "Quincy Adams", email: "quincyadams@example.com" },
        { id: 20, name: "Rita Perez", email: "ritaperez@example.com" },
        { id: 21, name: "Sam King", email: "samking@example.com" },
        { id: 22, name: "Tina Harris", email: "tinaharris@example.com" },
        { id: 23, name: "Ursula Lopez", email: "ursulalopez@example.com" },
        { id: 24, name: "Victor Wright", email: "victorwright@example.com" },
        { id: 25, name: "Wendy Scott", email: "wendyscott@example.com" },
        { id: 26, name: "Xander Moore", email: "xandermoore@example.com" },
        { id: 27, name: "Yvonne Nelson", email: "yvonnelson@example.com" },
        { id: 28, name: "Zachary Carter", email: "zacharycarter@example.com" }
    ];

    const initialBooks = [
        { id: 1, titulo: "O Mistério da Casa Verde", paginas: 320, autorId: 1 },
        { id: 2, titulo: "A Jornada das Sombras", paginas: 250, autorId: 2 },
        { id: 3, titulo: "Segredos do Tempo", paginas: 400, autorId: 3 },
        { id: 4, titulo: "A Última Fronteira", paginas: 290, autorId: 4 },
        { id: 5, titulo: "O Código Esquecido", paginas: 350, autorId: 5 },
        { id: 6, titulo: "As Crônicas de Um Sonhador", paginas: 275, autorId: 6 },
        { id: 7, titulo: "Entre Dois Mundos", paginas: 330, autorId: 7 },
        { id: 8, titulo: "O Chamado da Floresta", paginas: 280, autorId: 8 },
        { id: 9, titulo: "Além do Horizonte", paginas: 310, autorId: 9 },
        { id: 10, titulo: "A Cidade Perdida", paginas: 280, autorId: 1 },
        { id: 11, titulo: "Mistérios do Abismo", paginas: 375, autorId: 2 },
        { id: 12, titulo: "A Última Guerra", paginas: 450, autorId: 3 },
        { id: 13, titulo: "Sombras da Eternidade", paginas: 295, autorId: 4 },
        { id: 14, titulo: "O Enigma das Estrelas", paginas: 310, autorId: 5 },
        { id: 15, titulo: "O Guardião do Fogo", paginas: 340, autorId: 6 },
        { id: 16, titulo: "O Despertar dos Vingadores", paginas: 325, autorId: 7 },
        { id: 17, titulo: "Nos Confins do Universo", paginas: 360, autorId: 8 },
        { id: 18, titulo: "A Lua de Sangue", paginas: 300, autorId: 9 },
        { id: 19, titulo: "O Labirinto das Sombras", paginas: 320, autorId: 1 },
        { id: 20, titulo: "O Último Suspiro", paginas: 280, autorId: 2 },
        { id: 21, titulo: "O Refúgio da Tempestade", paginas: 340, autorId: 3 },
        { id: 22, titulo: "O Abismo do Infinito", paginas: 290, autorId: 4 },
        { id: 23, titulo: "A Chave dos Destinos", paginas: 330, autorId: 5 },
        { id: 24, titulo: "O Eco das Sombras", paginas: 310, autorId: 6 },
        { id: 25, titulo: "A Profecia da Lua Negra", paginas: 360, autorId: 7 },
        { id: 26, titulo: "Vingança das Estrelas", paginas: 370, autorId: 8 },
        { id: 27, titulo: "Em Busca da Verdade", paginas: 280, autorId: 9 },
        { id: 28, titulo: "O Império das Águas", paginas: 300, autorId: 1 },
        { id: 29, titulo: "A Última Lenda", paginas: 350, autorId: 2 },
        { id: 30, titulo: "O Silêncio das Sombras", paginas: 330, autorId: 3 }
    ];

    const [dataAuthor, setDataAuthor] = useState<IAuthor[]>(() => {
        const storedAuthors = localStorage.getItem("authors");
        if (storedAuthors) {
            return JSON.parse(storedAuthors);
        }
        return initialAuthors; 
    });

    const [dataBook, setDataBook] = useState<IBook[]>(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            return JSON.parse(storedBooks);
        }
        return initialBooks; 
    });


    useEffect(() => {
        const storedAuthors = localStorage.getItem("authors");
        const storedBooks = localStorage.getItem("books");

        if (storedAuthors) {
            setDataAuthor(JSON.parse(storedAuthors));
        }

        if (storedBooks) {
            setDataBook(JSON.parse(storedBooks));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem("authors", JSON.stringify(dataAuthor));
    }, [dataAuthor]);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(dataBook));
    }, [dataBook]);


    return (
        <DataContext.Provider value={{ dataAuthor, dataBook, setDataAuthor, setDataBook }
        }>
            {children}
        </DataContext.Provider>
    )


}
