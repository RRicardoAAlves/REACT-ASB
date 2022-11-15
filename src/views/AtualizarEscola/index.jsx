import React from 'react';

import {  Link} from 'react-router-dom';


export default function index() {
  return (
    <div className='contaner'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rouded p-4 mt-2 shadow'>
          <h2 className="text center m-4">Atualizar Escolas</h2>

          <form>
              <div class="mb-3">
                <label for="exampleInputRazaoSocial1" class="form-label">
                  Razão Social
                </label>
                <input 
               
                type="text" 
                class="form-control" 
                id="exampleInputRazaoSocial1" 
                aria-describedby="razaoSocialHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputCnpj1" class="form-label">
                Cnpj
                </label>
                <input
                
                type="text" 
                class="form-control" 
                id="exampleInputCnpj1" 
                aria-describedby="cnpjHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoRua1" class="form-label">
                EndereÇo Rua
                </label>
                <input
                
                type="text" 
                class="form-control" 
                id="exampleInputEnderecoRua1" 
                aria-describedby="enderecoRuaHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoNumero1" class="form-label">
                Endereço Numero 
                </label>
                <input 
                
                type="number" 
                class="form-control" 
                id="exampleInputEnderecoNumero1" 
                aria-describedby="enderecoNumero1lHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoBairro1" class="form-label">
                Endereço Bairro
                </label>
                <input 
                
                type="text" 
                class="form-control" 
                id="exampleInputEnderecoBairro1" 
                aria-describedby="enderecoBairroHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoComplemento1" class="form-label">
                Endereço Complemento
                </label>
                <input 
               
                type="text" 
                class="form-control" 
                id="exampleInputEnderecoComplemento1" 
                aria-describedby="enderecoComplementoHelp"
                 />
              </div>

              <div class="mb-3">
                <label for="exampleInputCep1" class="form-label">
                  Cep
                </label>
                <input 
                
                type="text" 
                class="form-control" 
                id="exampleInputCep1" 
                aria-describedby="cepHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputCidade1" class="form-label">
                  Cidade
                </label>
                <input
               
                type="text" 
                class="form-control" 
                id="exampleInputCidade1" 
                aria-describedby="cidadeHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEstado1" class="form-label">
                  Estado 
                </label>
                <input 
                
                type="text" 
                class="form-control" 
                id="exampleInputEstado1" 
                aria-describedby="estadolHelp"
                 />
              </div>

              <div class="mb-3">
                <label for="exampleInputNomeRepresentante1" class="form-label">
                Nome do Representante
                </label>
                <input 
               
                type="text" 
                class="form-control" 
                id="exampleInputNomeRepresentante1" 
                aria-describedby="nomeRepresentanteHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  E-mail
                </label>
                <input
                
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                 />
              </div>

              <div class="mb-3">
                <label for="exampleInputTelefoneContato1" class="form-label">
                Telefone Contato
                </label>
                <input 
               
                type="text" 
                class="form-control" 
                id="exampleInputTelefoneContato1" 
                aria-describedby="telefoneContatoHelp"
                 />
              </div>
              
            
            <button type="submit" class="btn btn-outline-success">Salvar</button>

            <Link to="/home" type="submit" class="btn btn-outline-danger mx-2">Cancelar</Link>

            <Link to="/visualizarTodasEscolas" type="submit" class="btn btn-outline-danger mx-2">Dados de cadastro</Link>

          </form>

        </div>
      </div>
    </div>
  )
}