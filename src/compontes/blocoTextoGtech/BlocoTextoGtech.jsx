import { useState } from 'react';
import { BotaoExpansivo } from '../botaoExpansivo';
import style from './BlocoTextoGtech.module.css';
import imagem from './image/gtech.png';

export const BlocoTextoGtech = () =>{
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>
        <BotaoExpansivo text="G tech" text1="+" onClick={toggleExpand} />
        {isExpanded && (
            <div className={style.BlocoTextoGtech} style={{ marginTop: '0.80rem' }}>
            <p> A GTech é uma empresa especializada em consultoria
        para melhoria contínua de processos por meio da
        tecnologia. Desenvolvemos ferramentas que
        contribuem para a eficiência e produtividade da sua
        empresa.
        Na GTech nossos valores estão ligados em buscarmos
        a excelência em tudo o que fazemos, desde a
        qualidade de nossos serviços até a forma como nos
        relacionamos com nossos clientes e colaboradores.
        Valorizamos a criatividade e a inovação, sempre
        buscando novas soluções para os desafios que nossos
        clientes enfrentam</p>
            <img src={imagem} alt="gtech" />
            </div>
        )}
    </div>
    );
};