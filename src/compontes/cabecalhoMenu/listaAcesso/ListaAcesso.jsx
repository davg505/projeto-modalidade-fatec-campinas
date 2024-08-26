import { Link } from 'react-router-dom';
import style from './ListaAcesso.module.css';

const ListaAcesso = (props) => {

    // eslint-disable-next-line react/prop-types
    const { nome, link } = props
    return (
    <li className={style.ListaAcesso}>
        <Link to={link}>{nome}</Link>
    </li>
    );

};

export { ListaAcesso };
