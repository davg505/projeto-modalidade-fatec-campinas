import style from './CampoTexto.module.css';

const CampoText = (props) => {
    return (
        <input type="text" className={style.CampoText} {...props} />
    );

};

export { CampoText };
