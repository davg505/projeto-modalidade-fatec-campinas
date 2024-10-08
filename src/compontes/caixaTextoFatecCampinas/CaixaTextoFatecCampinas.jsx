import { useState } from 'react';
import { BotaoExpansivo } from "../botaoExpansivo";
import style from './CaixaTextoFatecCampinas.module.css';
import imagem from './image/fateccampinas.png';

export const CaixaTextoFatecCampinas= () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return(
        <div>
        <BotaoExpansivo text="Fatec Campinas" text1="+" onClick={toggleExpand} />
        {isExpanded && (
            <div className={style.CaixaTextoFatecCampinas} style={{ marginTop: '0.80rem' }}>
            <p>O projeto visa aprimorar e centralizar o controle
            e agestão das informações de estágio
            realizadas pelos alunos, migrando os dados da
            planilha em Excel para um banco de dados
            relacional. Isso incluirá a criação de micro
            serviços para a entrada e consulta de dados.</p>
            <img src={imagem} alt="projeto" />
            </div>
        )}
    </div>
    )
    
}