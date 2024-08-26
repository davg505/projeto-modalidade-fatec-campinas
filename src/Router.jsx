import { Route, Routes } from "react-router-dom";
import { LayoutPadrao } from "./layout/layoutPadrao/LayoutPadrao";
import { Error404, Inicial, LoginAluno } from './pages';
import { LoginDocente } from "./pages/LoginDocente";
import { LoginEmpresa } from "./pages/LoginEmpresa";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao/>}>
            <Route path="/" element={<Inicial/>}/>
            <Route path="/aluno" element={<LoginAluno />} />
            <Route path="/docente" element={<LoginDocente />} />
            <Route path="/empresa" element={<LoginEmpresa />} />
            </Route>
            <Route path="*" element={<Error404/>}/>
        </Routes>

    );
};