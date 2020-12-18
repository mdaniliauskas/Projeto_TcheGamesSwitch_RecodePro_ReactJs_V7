

import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Lojas() {

    return (

        <Container>
        <h3>Nossas lojas</h3>
        <br /><br />
            

            <ListGroup>
                <ListGroup.Item>
                    <h3 class="text-primary">São Paulo (Matriz)</h3>
                    <p>Avenida Paulista, 2000</p>
                    <p>São Paulo - SP</p>
                    <p>(11) 222222-2222</p>
                    <p><a href="mailto:atendimento.sampa@tchegames.com.br">atendimento.sampa@tchegames.com.br</a></p>
                </ListGroup.Item>

                <ListGroup.Item>     
                <h3 class="text-primary">Rio de Janeiro</h3>
                    <p>Avenida Getúlio Vargas, 1100</p>
                    <p>Rio de Janeiro - RJ</p>
                    <p>(21) 222222-2222</p>
                    <p><a href="mailto:atendimento.rio@tchegames.com.br">atendimento.rio@tchegames.com.br</a></p>                    
                </ListGroup.Item>           
            
               <ListGroup.Item>
                        <h3 className="text-primary">Porto Alegre</h3>
                        <p>Avenida Alberto Bins, 250</p>
                        <p>Porto Alegre - RS</p>
                        <p>(51) 222222-2222</p>
                        <p><a href="mailto:atendimento.poa@tchegames.com.br">atendimento.poa@tchegames.com.br</a></p>                
                </ListGroup.Item>
            </ListGroup>            
    </Container>
)
};