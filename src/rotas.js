import { Switch, Route } from 'react-router-dom';
import Produtos from './Páginas/Produtos';
import Pedidos from './Páginas/Pedidos';

function Rotas() {
    return (
        <Switch>
            <Route exact path='/' component={Produtos} />
            <Route exact path='/produtos' component={Produtos} />
            <Route exact path='/pedidos' component={Pedidos} />
        </Switch>
    )
}

export default Rotas;