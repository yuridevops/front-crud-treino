import React, {Component} from 'react'
import './insert.css'
import {Redirect} from 'react-router-dom'

class CriarUsuario extends Component{
    state = {
        usuario:{
            nome: '',
            matricula: 0,
            ativo: false,
            endereco: {
                cidade: '',
                estado: ''
            }
        },
        Redirect: false
    }

    render() {
        const {Redirect} = this.state
        if(Redirect){
            return <Redirect to='/'/>
        }else{
            return( 
                <form onSubmit={this.handleSubimit}>
                    <legend>Criar Usuario</legend>
                    <div className = 'usuario-insert'>
                        <label htmlFor='nome'>Nome</label>
                        <br/>
                        
                    </div>
                </form>
            )
        }
    }
}