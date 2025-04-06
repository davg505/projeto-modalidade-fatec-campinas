import style from './CabecalhoMenu.module.css';
import { ListaAcesso } from './listaAcesso';

export const CabecalhoMenu = () => {
    const tarefas = [
        { id: 1, nome: 'Home', link: '/' },
        { id: 2, nome: 'Aluno', link: '/aluno' },
        { id: 3, nome: 'Docente', link: '/docente' },
    ]
    return(
        <ul className={style.CabecalhoMenu}>
        <h5>
        {tarefas.map(item => (
                    <ListaAcesso key={item.id} nome={item.nome} link={item.link} />
                ))}
        </h5>
        </ul>
    );


};