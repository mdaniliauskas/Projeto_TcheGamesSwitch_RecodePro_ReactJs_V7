import React from 'react';
import { Container, Image } from 'react-bootstrap';


export default function Home() {

    return (
        <Container>
        <div>
        <h2>Seja bem-vindo(a)!</h2>
        <br /><br />
        <p>A Tche Games Switch é a sua loja especializada em Nintendo Switch&trade;</p>
        <p>Aqui você encontra todos os últimos lançamentos, os melhores preços e entrega rápida de consoles, jogos e acessórios!</p> 
        <p>Em nosso site e em nossas lojas você sempre tem a sua disposição um antendente especializado para prontamente tirar suas dúvidas.</p>  
        <br /><br /><br /><br />
        </div>  

        <div>
        <img src={require('../Components/Produtos/img/produtos/Consoles/Switch_Azul_Vermelho.jpg').default} alt="Produtos" width="200px" />
        <img src={require('../Components/Produtos/img/produtos/Acessorios/Organizador.jpg').default} alt="Produtos" width="200px" />
        <img src={require('../Components/Produtos/img/produtos/Acessorios/Pelicula.jpg').default} alt="Produtos" width="200px" />
        <img src={require('../Components/Produtos/img/produtos/Acessorios/Charging_Dock.jpg').default} alt="Produtos" width="200px" />
        </div> 
        </Container>

    )}
