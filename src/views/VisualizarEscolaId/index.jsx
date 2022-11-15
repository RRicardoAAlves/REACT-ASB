import React from 'react';

import {Link} from 'react-router-dom'


export default function index() {

  

  return (
    <div>
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rouded p-4 mt-2 shadow'>
            <h2 className="text center m-6">Escola</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID:</div>
                <div className="card-body">
                  <p className="card-title">
                    <b>Razão Social: </b> 
                  </p>
                  <p className="card-title">
                    <b>Cnpj: </b> 
                  </p>
                  <p className="card-title">
                    <b>Endereço Rua: </b> 
                  </p>
                  <p className="card-title">
                    <b>Endereço Numero: </b>
                  </p>
                  <p className="card-title">
                    <b>Endereço Bairro: </b>
                  </p>
                  <p className="card-title">
                    <b>Endereço Complemento: </b> 
                  </p>
                  <p className="card-title">
                    <b>Cep: </b> 
                  </p>
                  <p className="card-title">
                    <b>Cidade: </b>
                  </p>
                  <p className="card-title">
                    <b>Estado </b>
                  </p>
                  <p className="card-title">
                    <b>Nome do representante: </b> 
                  </p>
                  <p className="card-title">
                    <b>E-mail: </b> 
                  </p>
                  <p className="card-title">
                    <b>Telefone de contato: </b>
                  </p>
                  <Link
                    to="/homeCliente"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}