import React from "react";
import './style.css'


export default function Rodape(props){

    const rDarkMode = 'modo-escuro'
    const rLightMode = 'modo-claro'

    return(
        <footer className={props.atual ? rLightMode : rDarkMode}>
            <div className="limita-secao">
                <img className="element" src="../../assets/logo.png"/>
                <p className="rede-p outra-limitacao">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

                <div className="redes">
                    <img className="logo-rede" src="../../assets/facebook.png"/>
                    <img className="logo-rede" src="../../assets/twitter.png"/>
                    <img className="logo-rede" src="../../assets/linkedin.png"/>
                    <img className="logo-rede" src="../../assets/dribble.png"/>
                    <img className="logo-rede" src="../../assets/behance.png"/>
                    <img className="logo-rede" src="../../assets/google-plus.png"/>
                </div>
            </div>
            <p className="cred">Copyright 2022 @ <span className="yellow">Giansb</span></p>
        </footer>
    );
}