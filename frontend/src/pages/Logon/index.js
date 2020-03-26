import React from 'react';

/* Icons */
import { FiLogIn } from 'react-icons/fi';
/* Importação de Estilos CSS */
import './styles.css';
/* Importação de Imagens */
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size="16" color="#E02041" />
                        Não tenho cadastro</a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}