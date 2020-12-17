import { Switch, Route } from 'react-router-dom';
import Home from './Páginas/Home';
import Produtos from './Páginas/Produtos';
import Pedidos from './Páginas/Pedidos';
import Controle from './Páginas/Controle';
import Lojas from './Páginas/Lojas';
import Contatos from './Páginas/Contatos';

function Rotas() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/produtos' component={Produtos} />
            <Route exact path='/pedidos' component={Pedidos} />
            <Route exact path='/controle' component={Controle} />
            <Route exact path='/lojas' component={Lojas} />
            <Route exact path='/contatos' component={Contatos} />
        </Switch>
    )
}

export default Rotas;