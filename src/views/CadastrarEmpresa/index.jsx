import React from 'react';

import "./style.css";

import {Link} from 'react-router-dom';


export default function index() {
 
   
  
    return (
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Cadastro de Empresas</h5>
  
            <form>
              <div className="mb-3 center">
                <label for="exampleInputRazaoSocial1" className="form-label">
                  Razão Social
                </label>
                <input 
                
                type="text" 
                className="form-control" 
                id="exampleInputRazaoSocial1" 
                aria-describedby="razaoSocialHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputCnpj1" className="form-label">
                Cnpj
                </label>
                <input
                
                type="text" 
                className="form-control" 
                id="exampleInputCnpj1" 
                aria-describedby="cnpjHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEnderecoRua1" className="form-label">
                EndereÇo Rua
                </label>
                <input
                
                type="text" 
                className="form-control" 
                id="exampleInputEnderecoRua1" 
                aria-describedby="enderecoRuaHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEnderecoNumero1" className="form-label">
                Endereço Numero 
                </label>
                <input 
                
                type="number" 
                className="form-control" 
                id="exampleInputEnderecoNumero1" 
                aria-describedby="enderecoNumero1lHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEnderecoBairro1" className="form-label">
                Endereço Bairro
                </label>
                <input 
               
                type="text" 
                className="form-control" 
                id="exampleInputEnderecoBairro1" 
                aria-describedby="enderecoBairroHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEnderecoComplemento1" className="form-label">
                Endereço Complemento
                </label>
                <input 
               
                type="text" 
                className="form-control" 
                id="exampleInputEnderecoComplemento1" 
                aria-describedby="enderecoComplementoHelp"
                 />
              </div>

              <div className="mb-3  center">
                <label for="exampleInputCep1" className="form-label">
                  Cep
                </label>
                <input 
               
                type="text" 
                className="form-control" 
                id="exampleInputCep1" 
                aria-describedby="cepHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputCidade1" className="form-label">
                  Cidade
                </label>
                <input
                
                type="text" 
                className="form-control" 
                id="exampleInputCidade1" 
                aria-describedby="cidadeHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEstado1" className="form-label">
                  Estado 
                </label>
                <input 
                
                type="text" 
                className="form-control" 
                id="exampleInputEstado1" 
                aria-describedby="estadolHelp"
                 />
              </div>

              <div className="mb-3  center">
                <label for="exampleInputNomeRepresentante1" className="form-label">
                Nome do Representante
                </label>
                <input 
               
                type="text" 
                className="form-control" 
                id="exampleInputNomeRepresentante1" 
                aria-describedby="nomeRepresentanteHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEmail1" className="form-label">
                  E-mail
                </label>
                <input
               
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                 />
              </div>

              <div className="mb-3  center">
                <label for="exampleInputTelefoneContato1" className="form-label">
                Telefone Contato
                </label>
                <input 
              
                type="text" 
                className="form-control" 
                id="exampleInputTelefoneContato1" 
                aria-describedby="telefoneContatoHelp"
                 />
              </div>

              <div className="mb-3  center">
                <label for="exampleInputUsuario1" className="form-label">
                Usuario
                </label>
                <input 
               
                type="number" 
                className="form-control" 
                id="exampleInputUsuario1" 
                aria-describedby="usuarioHelp"
                 />
              </div>
              
              <button type="submit" className="btn btn-outline-success">Salvar</button>
  
              <Link to="/home" type="submit" className="btn btn-outline-danger mx-2">Cancelar</Link>

              <Link to="/visualizarTodasEmpresas" type="submit" className="btn btn-outline-danger mx-2">Dados Empresas</Link>
  
            </form>
  
          </div>
        </div>
      </div>
    )
  }
  