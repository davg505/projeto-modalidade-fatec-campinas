import { Link } from 'react-router-dom';
import { CabecalhoLogin } from "../cabecalhoLogin/cabecalhoLogin";
import style from './CaixaLogin.module.css';
import imagemBaixa from './image/fateccampinas.png';
import imagemAlta from './image/imagemicep.jpg';

export const CaixaLogin = (props) => {
    const {text} = props;
    return (
        <div className={style.CaixaLogin}>
            <CabecalhoLogin text={text}/>
            <div className={style.login}>
            <h1>Entrar</h1>
            <h4> Insira seu Email (sem pontos e traços) e senha.</h4>
            <h3>Email</h3>
            <input type="text" />
            <h3>Senha</h3>
            <input type="password" />
            <button>Entrar</button>
            <Link>Esqueci a senha</Link>
            </div>
            <div className={style.imagem}>
                <div>
                <img className={style.imagemBaixa} src={imagemBaixa} alt="Imagem baixa" />  
                </div>
                <div>
                <img className={style.imagemAlta} src={imagemAlta} alt="Imagem alta" />
                </div>
            </div>
        </div>
    );
};
