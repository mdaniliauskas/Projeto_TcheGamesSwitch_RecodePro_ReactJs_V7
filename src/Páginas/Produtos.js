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
        console.log(dados);
    }, []);

    return (
        <Container>
            <Row>
                {produtos && <div> {produtos[0].descricao} </div>}
            </Row>
        </Container>
    )
}