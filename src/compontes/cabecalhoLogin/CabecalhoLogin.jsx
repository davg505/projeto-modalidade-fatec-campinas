import style from "./CabecalhoLogin.module.css";

export const CabecalhoLogin = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text} = props;
    return(
        <div className={style.CabecalhoLogin}>
        <div >
        <h1 className={style.cabecalhotexto}><span> {text} </span></h1>
        <h5 className={style.cabecalhotexto}><span>
        Modalidades
            </span></h5>
        </div>
        </div>
    );
};



