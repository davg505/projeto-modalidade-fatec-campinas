import { CaixaLogin } from "../../compontes/caixaLogin";
import style from './LoginEmpresa.module.css';

export const LoginEmpresa = () => {
    return(
        <div className={style.LoginEmpresa}>
            <CaixaLogin text={"Empresa"}/>
        </div>
    )
};