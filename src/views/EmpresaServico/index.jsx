import React  from 'react';

import "./style.css";

import {  Link} from 'react-router-dom';



export default function index() {

    
  
    return (
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Cadastro de Serviços</h5>
  
            <form>
           
  
              <div className="mb-3  center">
                <label for="exampleInputDescricao1" className="form-label">
                Descrição dos serviços
                </label>
                <input
                
                type="text" 
                className="form-control" 
                id="exampleInputDescricao1" 
                aria-describedby="descricaoHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleServicos1" className="form-label">
                Serviços prestados
                </label>
                <input
               
                type="text" 
                className="form-control" 
                id="exampleInputServicos1" 
                aria-describedby="servicosHelp"
                 />
              </div>
              
              <button type="submit" className="btn btn-outline-success">Salvar</button>

              <Link to="/servicos" type="submit" className="btn btn-outline-danger mx-2">Voltar</Link>
  
              <Link to="/home" type="submit" className="btn btn-outline-danger mx-2">Cancelar</Link>

            </form>
  
          </div>
        </div>
      </div>
    )
  }
  