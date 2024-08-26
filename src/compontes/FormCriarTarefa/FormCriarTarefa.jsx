import { Botao } from "../botao";
import { CampoText } from "../campoTexto";
import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {

    return(
        <form className={style.FormCriarTarefa}>
            <CampoText/>
            <Botao text="?"/>
        </form>
    )

};

export { FormCriarTarefa };
