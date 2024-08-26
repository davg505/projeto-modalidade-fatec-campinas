import style from './BotaoExpansivo.module.css';

export const BotaoExpansivo = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text, text1, ...outrasProps} = props;
    return(
        <button className={style.BotaoExpansivo}{...outrasProps}>
    <h1>{text}</h1> 
    <h2>{text1}</h2> 
    </button>
    );
};