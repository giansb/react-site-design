import React from "react";
import Topo from "../Topo";
import { useState } from "react";
import Banner from "../Banner";
import Experiencias from "../Experiencias";
import Rodape from "../Rodape";

export default function PaginaPrincipal(){

    const LightMode = 'teste'
    const DarkMode = 'teste'

    const[temaAtualzado, setTemaAtualizado] = useState(false)

    const Alteratema = () => {
        setTemaAtualizado(!temaAtualzado)
    }

    return(
        <div>
            <Topo trocar={Alteratema} atual={temaAtualzado}/>
            <Banner atual={temaAtualzado}/>
            <Experiencias atual={temaAtualzado}/>
            <Rodape atual={temaAtualzado}/>
        </div>
    );
}