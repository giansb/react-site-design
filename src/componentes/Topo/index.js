import React from "react";
import './style.css'


export default function Topo(props){
    const iconLight='../../assets/sun.png'
    const iconDark='../../assets/moon.png'

    const topoDark = 'topo-dark'
    const topoLight = 'topo'

    
    return(

        <div className={props.atual? topoLight : topoDark}>
            <header>
                <img className="element" src="../../assets/logo.png"/>
                <button onClick={props.trocar}><img className="element2" src={props.atual ? iconDark : iconLight}/></button>

                
            </header>
        </div>
    );
}