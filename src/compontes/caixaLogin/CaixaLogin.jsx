import { useState } from 'react'; // Adicionando o useState que estava faltando
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Email:', username);
    console.log('Password:', password);

    try {
      // Envia uma requisição POST para o back-end para autenticar
      //const response = await fetch('http://localhost:3001/api/login', {
      const response = await fetch('https://backend-fatec.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,   // O email do formulário
          senha: password,   // A senha do formulário
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Se a resposta for bem-sucedida, redireciona conforme o tipo de usuário

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        console.log("Login bem-sucedido, redirecionando...");
       

        if (data.tipo === 'aluno') {
          localStorage.setItem('authToken', data.token); 
          window.location.replace('https://davg505.github.io/projeto-modalidade-fatec-campinas-aluno/');
         // window.location.replace('http://localhost:5173/projeto-modalidade-fatec-campinas-aluno/');
        } else if (data.tipo === 'professor') {
          window.location.replace('https://davg505.github.io/projeto-modalidade-fatec-campinas-professor/');
        }
      } else {
        alert(data.message || 'Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente.');
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
       
        <form onSubmit={handleSubmit}>
          <h3>E-mail</h3>
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
          <button type="submit">Entrar</button>
        </form>

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
