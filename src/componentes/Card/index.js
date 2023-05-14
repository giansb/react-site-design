import React from "react";
import './style.css'


export default function Card(props){

    const contDark= 'exp-titulo-dark'
    const contLight='exp-titulo'

    return(
        <div className="card">
            <div className="til">
                <p className="data">{props.data}</p>
                <h3 className={props.atual? contLight : contDark}>{props.profissao}</h3>
                <p className="empresa">{props.empresa}</p>
            </div>
            <p className="descricao">{props.descricao}</p>


        </div>
    );
}