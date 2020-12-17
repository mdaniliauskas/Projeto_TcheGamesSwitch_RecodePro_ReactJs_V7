

import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Lojas() {

    return (

        <Container>
        <h2>Nossas lojas</h2>
        <br /><br />
            

            <ListGroup>
                <ListGroup.Item>São Paulo (Matriz)</ListGroup.Item>
                <ListGroup.Item>Avenida Paulista, 2000</ListGroup.Item>
                <ListGroup.Item>São Paulo - SP</ListGroup.Item>
                <ListGroup.Item>(11) 222222-2222</ListGroup.Item>
                <ListGroup.Item>atendimento.sampa@tchegames.com.br</ListGroup.Item> 

                <ListGroup.Item>               Rio de Janeiro</ListGroup.Item>
               <ListGroup.Item>       Avenida Getúlio Vargas, 1100</ListGroup.Item>
               <ListGroup.Item>      Rio de Janeiro - RJ</ListGroup.Item>
               <ListGroup.Item>      (21) 222222-2222</ListGroup.Item>
               <ListGroup.Item>      atendimento.rio@tchegames.com.br</ListGroup.Item>           
            
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