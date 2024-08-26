import { CaixaTextoProjeto } from '../../compontes';
import { BlocoTextoDocumento } from '../../compontes/blocoTextoDocumento/BlocoTextoDocumento';
import { BlocoTextoGtech } from '../../compontes/blocoTextoGtech/BlocoTextoGtech';
import { BlocoTextoTutorial } from '../../compontes/blocoTextoTutorial/BlocoTextoTutorial';
import { CaixaTextoFatecCampinas } from '../../compontes/caixaTextoFatecCampinas/CaixaTextoFatecCampinas';
import style from './Inicial.module.css';

export const Inicial = () => {
    return(
    <div className={style.Inicial}>
    <CaixaTextoProjeto/>
    <CaixaTextoFatecCampinas/>
    <BlocoTextoGtech/>
    <div className={style.sideBySide}>
    <BlocoTextoDocumento/>
    <BlocoTextoTutorial/>
    </div>
    </div>
    );
};
