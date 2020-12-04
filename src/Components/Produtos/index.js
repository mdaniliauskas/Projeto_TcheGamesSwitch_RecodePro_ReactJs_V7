

function ModeloProduto(props) {
    return (     

        <figure className={props.categoria}>
            <img src={require(`./img/produtos/Acessorios/${props.imagem}`).default} alt="teste" />
            <figcaption>
                <p className="nome-prod">
                    {props.nome}
                </p>
                <p className="precofinal-prod">
                    R$ {props.preco}
                </p>
            </figcaption>
        </figure>
    )
}

export default ModeloProduto;