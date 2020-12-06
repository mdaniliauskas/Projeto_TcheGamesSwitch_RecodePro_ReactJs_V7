import {useState} from 'react';
import { Form, Button, Row } from "react-bootstrap";


export default function Pedidos(props) {

    const [ form, setForm ] = useState({
        nomeClientes: "",
        email:"",
        telefone: "",
        endereco: "",
        produto: "",
        quantidade: ""
    });

    const alteracao = (evento) => {
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })        
    };  

    const Envio = async (evento) => {
        evento.preventDefault();
                
        const resposta = fetch("http://localhost/tchegames_React/src/php/pedidos.php", { method: "POST", body: new FormData(evento.target) });
    };   

    return (
        <div className="form-group col-md-6">            
                <h4>Realizar pedido</h4>
                <Form onSubmit={Envio}>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="nomeClientes" name="nomeClientes" placeholder="Nome completo" />
                   
                    <Form.Label>Email:</Form.Label>
                    <Form.Control onChange={alteracao} type="email" id="email" name="email" placeholder="Email" />
                   
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="telefone" nome="telefone" placeholder="Telefone" />

                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="endereco" name="endereco" placeholder="Endereço completo" />

                    <Form.Label>Nome do produto:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="produto" name="produto" placeholder="Nome do produto" />

                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="quantidade" name="quantidade" placeholder="Quantidade do produto" />

                    <Button variant="info" type="submit">Enviar</Button>
                </Form.Group>
                </Form>          
        </div>
    )
}