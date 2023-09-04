import {Container} from "./styles"
import  reminderLogo from "../../assets/images/Logo.jpg"

export function Header() {
    return( 
    <Container>
        <img src={reminderLogo} alt="Logo React Reminder" />
        <button>Adicionar Lembrete</button>
    </Container>
    );
}