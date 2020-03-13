import React, {Component} from 'react'
import api from '../../services/services'
import {Link} from 'react-router-dom'
import './details.css'

export default class Usuario extends Component{
    
    state = {
        usuario:{
            nome: '',
            matricula: '',
            ativo: '',
            endereco: {
                cidade: '',
                estado: ''
            }
        }
    }

    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await api.get(`/usuarios/${id}`)

        this.setState({usuario: response.data})
    }
    
    render(){
        const {usuario} = this.state

        return (
            <div className='usuario-info'>
                <h1>{usuario.nome}</h1>
                <h1>{usuario.matricula}</h1>
                <h1>{usuario.ativo}</h1>
                <h1>{usuario.endereco.cidade}</h1>
                <h1>{usuario.endereco.estado}</h1>
                <Link to={'/'}>Voltar</Link><br/>
                <Link to={`/editarUsuario/${usuario._id}`}>Editar</Link><br/>
                <Link to={`/deletarUsuario/${usuario._id}`}>Editar</Link><br/>
            </div>
        )
    }
}