import React from 'react';
import {Link} from 'react-router-dom';

/* Icons */
import { FiArrowLeft } from 'react-icons/fi';
/* Importação de Estilos CSS */
import './style.css';
/* Importação de Imagens */
import logoImg from '../../assets/logo.svg';

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#e02041" />
                        Já Tenho Cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-Mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 80}} />
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}