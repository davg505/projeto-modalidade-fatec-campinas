import { useState } from 'react';
import { BotaoExpansivo } from '../botaoExpansivo';
import style from './CaixaTextoProjeto.module.css';
import imagem from './image/imagemicep.jpg';

export const CaixaTextoProjeto = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div>
            <BotaoExpansivo text="Sobre o Projeto" text1="+" onClick={toggleExpand} />
            {isExpanded && (
                <div className={style.CaixaTextoProjeto} style={{ marginTop: '-0.25rem' }}>
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
    );
}