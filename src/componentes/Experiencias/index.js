import React from "react";
import './style.css'
import Card from "../Card";

export default function Experiencias(props){

    const fundoLightMode='tema-claro'
    const fundoDarkMode ='tema-escuro'

    const contDark= 'exp-titulo-dark'
    const contLight='exp-titulo'



    return(
        <div className={props.atual ? fundoLightMode : fundoDarkMode}>
            <section className="experiencias">
            <div className="limita-secao">
                <div className="flex">
                <div className="experiencias-cont">
                    <h2 className={props.atual ? contLight : contDark}>Experiências De Trabalho</h2>
                    <div className="borda"></div>
                    <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
                </div>
                <div className="experiencias-container">
                    <Card atual={props.atual} data='junho 2012 - 2016' profissao='Web Designer' empresa='Pied Piper StartUp.' descricao='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'/>
                    <Card atual={props.atual} data='agosto 2016 - 2019' profissao='Product Designer' empresa='E Corp.' descricao='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'/>
                    <Card atual={props.atual} data='fevereiro 2019 - 2021' profissao='Digital Consulting' empresa='Arasaka inc.' descricao='Consultoria em estratégicas digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'/>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
}