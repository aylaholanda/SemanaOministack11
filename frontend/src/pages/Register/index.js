import React,{useState} from 'react';
import './styles.css'
import{FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
export default function Register ()
{
const[name,setname]=useState('');
const[email,setemail]=useState('');
const[whatsapp,setwhatsapp]=useState('');
const[city,setcity]=useState('');
const[uf,setuf]=useState('');
  async  function handleRegister(e)
    {
        e.preventDefault();
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try{
        const response= await api.post('ongs',data);      
        alert(`Seu id de Acesso : ${response.data.id}`);
        }
        catch{
            alert('Erro no cadastro tente novamente');
        }
    }
    return(
        <div className= "register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>          
                <p>Faça seu cadastro , entre na plantaforma e ajude pessoas a encontrarem  a sua ong</p>
                <Link className= "back-link" to="/"><FiArrowLeft size ={16} color ="#E02041"/> Já tenho cadastro</Link>
                </section>
                
            <form onSubmit={handleRegister}>
            <input placeholder="Nome da Ong"
            value ={name} onChange={e=> setname(e.target.value)}  />
            <input type="email" placeholder="email"
            value ={email} onChange={e=> setemail(e.target.value)}
            />
            <input placeholder="Whatsapp"
            value ={whatsapp} onChange={e=> setwhatsapp(e.target.value)}
            />
            <div className="input-group">
            <input placeholder="Cidade"
            value ={city} onChange={e=> setcity(e.target.value)}
            />
            <input placeholder="UF"
            value ={uf} onChange={e=> setuf(e.target.value)}
            style={{width :80}}/>
            </div>
            <button className="button" type="submit">Cadastrar</button>
            </form>
            
        </div>
        </div>
    );
}

