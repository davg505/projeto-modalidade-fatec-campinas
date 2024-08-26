import style from "./CabecalhoLogin.module.css";

export const CabecalhoLogin = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text} = props;
    return(
        <div className={style.CabecalhoLogin}>
        <div>
        <h1><span>Modalidades</span></h1>
        <h5><span>`
            {text}
            </span></h5>
        </div>
        </div>
    );
};



