import { Container } from "./styles";
import heroImage from "../../assets/images/Hero.jpg";

export function Hero() {
    return (
        <Container>
            <img src={heroImage} alt="" />
        </Container>
    );
}