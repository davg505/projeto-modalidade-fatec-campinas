import { CaixaLogin } from "../../compontes/caixaLogin";
import style from './LoginDocente.module.css';

export const LoginDocente = () => {
    return(
        <div className={style.LoginDocente}>
            <CaixaLogin text={"Docente"}/>
        </div>
    )
};