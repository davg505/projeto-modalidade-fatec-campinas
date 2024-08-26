import style from './BotaoExpansivoMenor.module.css';

export const BotaoExpansivoMenor = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text, text1, ...outrasProps} = props;
    return(
        <button className={style.BotaoExpansivoMenor}{...outrasProps}>
    <h1>{text}</h1> 
    <h2>{text1}</h2> 
    </button>
    );
};