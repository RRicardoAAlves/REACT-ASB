
import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';



export default function index() {

  
    return (
        <div classNameName='container'>
            <div classNameName='py-4'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Razão Social</th>
                            <th scope="col">Cnpj</th>
                            <th scope="col">Endereço Rua</th>
                            <th scope="col">Endereço Número</th>
                            <th scope="col">Endereço Bairro</th>
                            <th scope="col">Endereço Complemento</th>
                            <th scope="col">Cep</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Nome do Representante</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone Contato</th>
                        </tr>
                    </thead>
                  
                        

                                <td>
                                    <Link to={`/visualizarEscolaId/`} className='btn btn-primary mx-2'>Ver por id</Link>

                                    <Link to={`/atualiazarEscola/}`} className='btn btn-success mx-2'>Editar</Link>


                                    <button className="btn btn-danger mx-2">Excluir</button>
                                </td>
                </table>

            </div>

        </div>
    )
}
