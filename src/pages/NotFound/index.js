import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';



function NotFound() {


    return (
        <Container>
            <Wrapper>
                <h1>Você se perdeu?</h1>
                <p>
                    Infelizmente, não localizamos essa página. Você pode voltar a página inicial.
                </p>

                <Link to="/">
                    Página inicial
                </Link>
            </Wrapper>
        </Container>
    );
}

export default NotFound