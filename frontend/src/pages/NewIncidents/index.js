import React ,{useState}from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
export  default function NewIncidents(){
    const [title,setTitle] = useState('');
    const history = useHistory();
    const [description,setdescription]= useState('');
    const [value,setvalue] =useState('');
    const ongId = localStorage.ongId;
    async  function handlenewIncidents(e)
    {
        e.preventDefault();
        const data ={
            title,
            description,
            value          
        };
        try{
         await api.post('incidents',data,{
             headers:{
            Authorization:ongId,
        }})      
        alert('caso cadastrado com sucesso!');
        history.push('/profile');
        }
        catch{
            alert('Erro no cadastro caso tente novamente');
        }
    }
    return(
        <div className= "new-incidents-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar Novo caso</h1>          
                <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>
                <Link className= "back-link" to="/profile"><FiArrowLeft size ={16} color ="#E02041"/> Voltar para home</Link>
                </section>
                
            <form onSubmit={handlenewIncidents}>
            <input placeholder
            ="Titulo do caso"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
            <textarea placeholder
            ="Descrição"
            value={description}
            onChange={e=>setdescription(e.target.value)}
            />
            <input placeholder        
            ="Valor em reais"
            value={value}
            onChange={e=>setvalue(e.target.value)}
            />
            <button className="button" type="submit">Cadastrar</button>
            </form>
            
        </div>
        </div>
        );

}