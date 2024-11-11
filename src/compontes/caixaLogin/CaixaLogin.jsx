import { useState } from 'react'; // Adicionei o useState que estava faltando
import { Link } from 'react-router-dom';
import { CabecalhoLogin } from "../cabecalhoLogin/cabecalhoLogin";
import style from './CaixaLogin.module.css';
import imagemAlta from './image/imagemicep.jpg';

export const CaixaLogin = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para autenticar o usuário
        console.log('Username:', username);
        console.log('Password:', password);
    
        if (username === 'aluno@fatec.br' && password === 'aluno') {
            // Redireciona para uma URL externa
            window.location.href = 'https://davg505.github.io/projeto-modalidade-fatec-campinas-aluno/';
        } else if (username === 'professor@fatec.br' && password === 'professor') {
            // Redireciona para uma URL externa
            window.location.href = 'https://davg505.github.io/projeto-modalidade-fatec-campinas-professor/';
        } else if (username === 'empresa@fatec.br' && password === 'empresa'){
            // Redireciona para uma URL externa
            window.location.href = 'https://davg505.github.io/projeto-modalidade-fatec-campinas-empresa/';
        }else {
            alert('Usuário ou senha inválidos');
        }
    };
    // eslint-disable-next-line react/prop-types
    const { text } = props;
    return (
        <div className={style.CaixaLogin}>
            <CabecalhoLogin text={text} />
            <div className={style.login}>
                <h1>Entrar</h1>
                <h4>Insira seu Email (sem pontos e traços) e senha.</h4>
                <h3>Email</h3>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                />
                <h3>Senha</h3>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button type="submit" onClick={handleSubmit}>Entrar</button>
                <Link to="/recuperar-senha">Esqueci a senha</Link>
            </div>
            <div className={style.imagem}>
                <div>
                    <img className={style.imagemAlta} src={imagemAlta} alt="Imagem alta" />
                </div>
            </div>
        </div>
    );
};
