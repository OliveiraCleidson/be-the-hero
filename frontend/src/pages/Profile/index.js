import React from 'react';
import {Link} from 'react-router-dom';

/* Importação de Estilos CSS */
import './style.css';
/* Importação de Imagens */
import logoImg from '../../assets/logo.svg';
/* Importação de Icone */
import {FiPower, FiTrash2} from 'react-icons/fi';


export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar Novo Caso
                </Link>
                <button type="button">
                    <FiPower size="18" color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
            <li>
                    <strong>CASO:</strong>
                    <p>Caso teste!</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p> 
                    <button type="button">
                        <FiTrash2 size="20" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste!</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size="20" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste!</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size="20" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste!</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size="20" />
                    </button>
                </li>
            </ul>
        </div>
    );
}