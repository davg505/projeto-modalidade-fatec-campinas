import { CaixaLogin } from "../../compontes/caixaLogin";
import style from './LoginAluno.module.css';

export const LoginAluno = () => {
    return(
        <div className={style.LoginAluno}>
            <CaixaLogin text={"Aluno"}/>
        </div>
    )
};