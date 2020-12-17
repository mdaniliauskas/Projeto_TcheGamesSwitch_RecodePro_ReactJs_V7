

import { Container } from 'react-bootstrap';


export default function Contatos() {
    
    return (
        <Container>

            <h2>Nossos contatos</h2>
            <br /><br />
            
            <div>
                <div id="contatos">
                    <img src={require('../Components/Produtos/img/logos/Email_logo.jpg').default} alt="Contatos" width="200px" width="100px" /><br />
                    atendimento@tchegames.com.br<br />                    
                </div>
                <br />
                <div id="contatos">                
                     <img src={require('../Components/Produtos/img/logos/Whats_logo.jpg').default} alt="Contatos" width="200px" width="100px" /><br />
                     0800-000000<br />                                      
                </div>
                <br />
                <div id="contatos">
			        <img src={require('../Components/Produtos/img/logos/Teleatendimento_logo.jpg').default} alt="Contatos" width="200px" width="100px" /><br />                   
                    Atendimento por chat<br />                    
                </div>
            </div>      
        </Container>
    )}