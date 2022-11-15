import React from 'react';

import "./style.css";

import { Link} from 'react-router-dom';



export default function index() {

   
  
    return (
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Cadastro de Demanda</h5>
  
            <form>
              <div className="mb-3 center">
                <label for="exampleInputDemanda1" className="form-label">
                  Demanda
                </label>
                <input 
                
                type="text" 
                className="form-control" 
                id="exampleInputDemanda1" 
                aria-describedby="demandalHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputDescricaoDemanda1" className="form-label">
                Descrição da demanda
                </label>
                <input
                
                type="text" 
                className="form-control" 
                id="exampleInputDescricaoDemanda1" 
                aria-describedby="descricaoDemandaHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputDia1" className="form-label">
                Dia
                </label>
                <input
                
                type="number" 
                className="form-control" 
                id="exampleInputDia1" 
                aria-describedby="diaHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputMes1" className="form-label">
                Mês
                </label>
                <input 
                
                type="number" 
                className="form-control" 
                id="exampleInputMes1" 
                aria-describedby="mes1lHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputAno1" className="form-label">
                Ano
                </label>
                <input 
               
                type="number" 
                className="form-control" 
                id="exampleInputAno1" 
                aria-describedby="anoHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputTipo1" className="form-label">
                Tipo
                </label>
                <input 
               
                type="text" 
                className="form-control" 
                id="exampleInputTipo1" 
                aria-describedby="tipoHelp"
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
  