import { useEffect, useState } from "react";
import { useDataContext } from "../../hooks/useDataContext";
import { Author } from "../../context/DataProvider";
import { ContainerModal } from "../ContainerModal";
import { Form } from "../Form";



interface IModalFormAuthor {
    isEditing: boolean;
    authorEdit?: Author;
    onClose: () => void;
}

export function ModalFormAuthor({ onClose, authorEdit, isEditing }: IModalFormAuthor) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [errorNameMsg, setErrorNameMsg] = useState("");
    const [errorEmailMsg, setErrorEmailMsg] = useState("");

    const { dataAuthor, setDataAuthor } = useDataContext();

    useEffect(() => {
        if (isEditing && authorEdit) {
            setName(authorEdit?.nome);
            setEmail(authorEdit?.email || "");
        }
    }, [authorEdit, isEditing])


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name.match(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)) {
            setErrorNameMsg("Nome inválido somente letras são permitidas");
            return;
        }

        if (email !== "" && dataAuthor.some((author) => author.email === email)) {
            setErrorEmailMsg("Email já cadastrado");
            return;
        }

        if (isEditing && authorEdit) {
            setDataAuthor(dataAuthor.map((author) => author.id === authorEdit.id ? { ...author, nome: name, email } : author))
            onClose();
        }

        else {
            const newAuthor: Author = {
                id: dataAuthor.length + 1,
                nome: name,
                email,
            }
            setDataAuthor([...dataAuthor, newAuthor]);
            onClose();
        }

    }

    return (
        <ContainerModal>
            <Form handleSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do autor*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <p>{errorNameMsg}</p>
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        value={email}
                    />
                    <p>{errorEmailMsg}</p>
                </div>

                <div>
                    <button type="submit">{isEditing ? "Editar" : "Cadastrar"}</button>
                    <button onClick={onClose} type="button">Cancelar</button>
                </div>

            </Form>
        </ContainerModal>
    )
}
