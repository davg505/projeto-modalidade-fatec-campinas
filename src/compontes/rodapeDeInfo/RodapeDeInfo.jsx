import { useState } from 'react';
import style from './RodapeDeInfo.module.css';
import emailIcon from './image/email.png'; // Substitua com o caminho correto do ícone
import gtechIcon from './image/gtech2.png';
import instagramIcon from './image/instagram.png'; // Substitua com o caminho correto do ícone
import youtubeIcon from './image/youtube.png'; // Substitua com o caminho correto do ícone

export const RodapeDeInfo = () => {
    const [pergunta, setPergunta] = useState(''); // Estado para armazenar a pergunta do usuário
    const [resposta, setResposta] = useState(''); // Estado para armazenar a resposta da "IA"

    // Função para lidar com o envio da pergunta
    const handleEnviarPergunta = () => {
        // Simula a resposta da IA
        setResposta('Olá, tudo bem, estamos em desenvolvimento');
    };


    return (
        <div className={style.RodapeDeInfo}>
            {/* Seção da URL do site */}
            <div className={style.siteInfo}>
            </div>
   {/* Seção da pergunta e resposta da "IA" */}
        <div className={style.contactSection}>
                <span>Faça uma pergunta:</span>
                <textarea
                    placeholder="Digite sua pergunta"
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)} // Atualiza a pergunta com o valor do input
                ></textarea>
                <button onClick={handleEnviarPergunta}>Enviar</button>
                {resposta && (
                    <div className={style.resposta}>
                        <p>Resposta: {resposta}</p>
                    </div>
                )}
            </div>

            {/* Ícones de redes sociais */}
            <div className={style.socialLinks}>
            <a href="https://dav-pr-tech.github.io/gtech-process/" target="_blank" rel="noopener noreferrer" title="Visite o site da GTech">
                    <img src={gtechIcon} alt="gtech" />
                </a>
                <a href="https://www.instagram.com/gtech_process/related_profiles/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/seucanal" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" />
                </a>
                {/* Seção da caixa de email */}
                <a href="mailto:gtech_contato@outlook.com" title="gtech_contato@outlook.com">
                    <img src={emailIcon} alt="email" />
                </a>
            </div>
        </div>
    );
};
