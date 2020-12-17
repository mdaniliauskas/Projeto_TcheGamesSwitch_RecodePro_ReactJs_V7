

function ModeloProduto(props) {
    return (     

        <figure className={props.categoria}>
            <img src={require(`${props.imagem}`).default} alt="Produtos" width="120px" />
            <figcaption>
                <p className="nome-prod">
                    {props.descricao}
                </p>
                <p className="precofinal-prod">
                    R$ {props.precoCheio}
                </p>
                <p className="precofinal-prod">
                    R$ {props.precoDesconto}
                </p>
            </figcaption>
        </figure>
    )
}

export default ModeloProduto;