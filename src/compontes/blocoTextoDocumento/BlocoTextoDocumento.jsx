import { useState } from 'react';
import { BotaoExpansivoMenor } from '../botaoExpansivoMenor/botaoExpansivoMenor';
import style from './BlocoTextoDocumento.module.css';

export const BlocoTextoDocumento = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);}
        ;

        const handleLegislationClick = () => {
            window.open('https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm', '_blank');
        };
        const handleGuiaDoEstagíarioClick = () => {
            window.open('https://fateccampinas.com.br/site/images/Est%C3%A1gio_Supervisionado/1-GUIA_DO_ESTAGI%C3%81RIO-_FATEC__revis%C3%A3o_03_08_2022.pdf', '_blank');
            };
    return(
        <div>
        <BotaoExpansivoMenor text="Documentos" text1="+" onClick={toggleExpand} />
        {isExpanded && (
            <div className={style.BlocoTextoDocumento} style={{ marginTop: '0.80rem' }}>
            <button  onClick={handleLegislationClick}>Legislação para Estágio</button>
            <button  onClick={ handleGuiaDoEstagíarioClick}>Guia do Estagíario</button>
            </div>
        )}
    </div>
    );
};