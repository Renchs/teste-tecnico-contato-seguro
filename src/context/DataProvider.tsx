import { ReactNode, useEffect, useState } from "react";
import { DataContext } from "./DataContext";



export interface Author {
    id: number;
    nome: string;
    email?: string;
}

export interface Book {
    id: number;
    titulo: string;
    autorId: number;
    paginas?: number;
}




interface IDataProviderProps {
    children: ReactNode;
}

export function DataProvider({ children }: IDataProviderProps) {

    const initialAuthors = [
        { id: 1, nome: "John Doe", email: "johndoe@example.com" },
        { id: 2, nome: "Jane Doe", email: "janedoe@example.com" },
        { id: 3, nome: "Alice Johnson", email: "alicejohnson@example.com" },
        { id: 4, nome: "Bob Smith", email: "bobsmith@example.com" },
        { id: 5, nome: "Charlie Brown", email: "charliebrown@example.com" },
        { id: 6, nome: "David Wilson", email: "davidwilson@example.com" },
        { id: 7, nome: "Emily Davis", email: "emilydavis@example.com" },
        { id: 8, nome: "Frank Miller", email: "frankmiller@example.com" },
        { id: 9, nome: "Grace Thompson", email: "gracetompson@example.com" },
        { id: 10, nome: "Hannah Moore", email: "hannahmoore@example.com" },
        { id: 11, nome: "Irene Lee", email: "irenelee@example.com" },
        { id: 12, nome: "Jack Wilson", email: "jackwilson@example.com" },
        { id: 13, nome: "Kathy Johnson", email: "kathyjohnson@example.com" },
        { id: 14, nome: "Liam Harris", email: "liamharris@example.com" },
        { id: 15, nome: "Megan Clark", email: "meganclark@example.com" },
        { id: 16, nome: "Nathan Evans", email: "nathanevans@example.com" },
        { id: 17, nome: "Olivia White", email: "oliviawhite@example.com" },
        { id: 18, nome: "Paul Martin", email: "paulmartin@example.com" },
        { id: 19, nome: "Quincy Adams", email: "quincyadams@example.com" },
        { id: 20, nome: "Rita Perez", email: "ritaperez@example.com" },
        { id: 21, nome: "Sam King", email: "samking@example.com" },
        { id: 22, nome: "Tina Harris", email: "tinaharris@example.com" },
        { id: 23, nome: "Ursula Lopez", email: "ursulalopez@example.com" },
        { id: 24, nome: "Victor Wright", email: "victorwright@example.com" },
        { id: 25, nome: "Wendy Scott", email: "wendyscott@example.com" },
        { id: 26, nome: "Xander Moore", email: "xandermoore@example.com" },
        { id: 27, nome: "Yvonne Nelson", email: "yvonnelson@example.com" },
        { id: 28, nome: "Zachary Carter", email: "zacharycarter@example.com" }
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

    const [dataAuthor, setDataAuthor] = useState<Author[]>(() => {
        const storedAuthors = localStorage.getItem("authors");
        if (storedAuthors) {
            return JSON.parse(storedAuthors);
        }
        return initialAuthors; 
    });

    const [dataBook, setDataBook] = useState<Book[]>(() => {
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
