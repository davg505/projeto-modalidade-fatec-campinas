import { Outlet } from "react-router-dom";
import { CabecalhoMenu } from "../../compontes";
import { Cabecalho } from "../../compontes/cabecalho";
import { Conteudo } from "../../compontes/conteudo";
import { Rodape } from "../../compontes/rodape";

export const LayoutPadrao = () => {
    return (
    <>
    <Cabecalho/>
    <CabecalhoMenu/>
    <Conteudo>
    <Outlet/>
    </Conteudo>
    <Rodape/>
    </>
    );
};