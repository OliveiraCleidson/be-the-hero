import React from 'react';
import {Link} from 'react-router-dom';

/* Importação de Estilos CSS */
import './style.css';
/* Importação de Imagens */
import logoImg from '../../assets/logo.svg';
/* Importação de Icone */
import {FiArrowLeft} from 'react-icons/fi';


export default function Newincident(){
    return(
        <div className="newincident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Logo" />
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar hérois que possam resolvê-lo.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size="16" color="#e02041" />
                    Voltar para Home
                </Link>
            </section>

            <form>
                <input placeholder="Titulo do Caso" />
                <textarea placeholder="Descrição do Caso" />
                <input placeholder="Valor em Reais" />
                <button className="button">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}