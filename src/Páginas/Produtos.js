import { Container, Row } from 'react-bootstrap';
import ModeloProduto from '../Components/Produtos';
import '../Components/Produtos/Produtos.css';
import { useState, useEffect } from 'react';


export default function Produtos() {
    const [ produtos, setProdutos ] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/tchegames_React/src/php/produtos.php");
        const dados = await resposta.json();
        setProdutos(dados);  
              
    }, []);

    return (
        <Container>
            <h3>Nossos produtos</h3>
            <br /><br />

            <Row className="text-center">
            {produtos && produtos.map(item => <ModeloProduto imagem={item.imagem} descricao={item.descricao} precoCheio={item.precoCheio} precoDesconto={item.precoDesconto} categoria={item.categoria} />)}
            </Row>
            </Container>
    )
}

