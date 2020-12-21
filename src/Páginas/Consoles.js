import { Container, Row, Nav, Col } from 'react-bootstrap';
import ModeloProduto from '../Components/Produtos';
import '../Components/Produtos/Produtos.css';
import { useState, useEffect } from 'react';


export default function Consoles() {
    const [ produtos, setProdutos ] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://192.168.15.17/php/consoles.php");
        const dados = await resposta.json();
        setProdutos(dados);  
              
    }, []);

    return (
        <Row>
            <Col sm={2} id="largura">
            <Nav className="d-none d-md-block bg-light sidebar" id="lateral">
            
            <Nav.Item>
            <Nav.Link href="/Produtos">Todos (15)</Nav.Link>   
            </Nav.Item>
            
            <Nav.Item>
            <Nav.Link href="/Consoles">Consoles (6)</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link href="/Jogos">Jogos (5)</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
            <Nav.Link href="/Acessorios">Acessórios (4)</Nav.Link>   
            </Nav.Item>
            
            </Nav>
            </Col>
            
            <Col sm={10}>
            <h3>Consoles</h3>
            <br /><br />

            
            {produtos && produtos.map(item => <ModeloProduto imagem={item.imagem} descricao={item.descricao} precoCheio={item.precoCheio} precoDesconto={item.precoDesconto} categoria={item.categoria} />)}
            </Col>
            </Row>
        
    )
}