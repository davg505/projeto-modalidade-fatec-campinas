import { useState } from 'react';
import { BotaoExpansivoMenor } from '../botaoExpansivoMenor/botaoExpansivoMenor';
import style from './BlocoTextoTutorial.module.css';


export const BlocoTextoTutorial = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);}
        ;

        const handleLegislationClick = () => {
            window.open('', '_blank');
        };
        const handleGuiaDoEstagíarioClick = () => {
            window.open('', '_blank');
            };
    return(
        <div>
        <BotaoExpansivoMenor text="Tutorial" text1="+" onClick={toggleExpand} />
        {isExpanded && (
            <div className={style.BlocoTextoTutorial} style={{ marginTop: '0.80rem' }}>
            <button  onClick={handleLegislationClick}>Tutorial inicial aplicação</button>
            <button  onClick={ handleGuiaDoEstagíarioClick}>Tutorial Aluno</button>
            <button  onClick={ handleGuiaDoEstagíarioClick}>Tutorial Professor</button>
            <button  onClick={ handleGuiaDoEstagíarioClick}>Tutorial Empresa</button>
            </div>
        )}
    </div>
    );
};