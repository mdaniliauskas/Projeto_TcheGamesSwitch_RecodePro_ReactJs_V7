import { Container, Row } from 'react-bootstrap';
import ModeloProduto from '../Components/Produtos';
import '../Components/Produtos/Produtos.css';
import { useState, useEffect } from 'react';

export default function Controle() {
    const [ controle, setControle ] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/tchegames_React/src/php/controle.php");
        const dados = await resposta.json();
        setControle(dados);   
        console.log(dados);     
    }, []);

    

    return (
       <h4>Controle de pedidos</h4>
       
    );
}


