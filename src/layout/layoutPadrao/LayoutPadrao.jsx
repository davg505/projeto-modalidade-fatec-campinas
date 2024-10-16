import { Outlet } from "react-router-dom";
import { CabecalhoMenu, RodapeDeInfo } from "../../compontes";
import { Cabecalho } from "../../compontes/cabecalho";
import { Conteudo } from "../../compontes/conteudo";
import { Rodape } from "../../compontes/rodape";
import style from './LayoutPadrao.module.css';

export const LayoutPadrao = () => {
    return (
        <div className={style.container}>
            <Cabecalho />
            <CabecalhoMenu />
            <Conteudo>
            <Outlet />
            </Conteudo>
            <RodapeDeInfo />
            <Rodape />
        </div>
    );
};