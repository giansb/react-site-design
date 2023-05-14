import React from "react";
import './style.css'

export default function Banner(props){

    const bannerDarkMode = 'banner-img-dark'
    const bannerLightMode = 'banner-img'
    
    return(
        <div className="banner">
            <div className={props.atual ? bannerLightMode : bannerDarkMode}></div>
            <div className="metade banner-cont">
                <p className="sub">Branding / ui / ux / tecnologia</p>
                <p className="titulo">Agência de Branding</p>
                <h1>e design Digital</h1>
            </div>
        </div>
    );
}