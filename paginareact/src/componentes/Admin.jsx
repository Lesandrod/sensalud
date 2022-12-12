import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



class Admin extends Component{
  constructor(props){
    super(props);
    this.state = ({
      recomendaciones:[],
      pos:null,
      banner: 'Nuevo',
      id: 0,
      titulo: '',
      detalles: '',
      
    })
    this.cambioTitulo = this.cambioTitulo.bind(this);
    this.cambiodetalles = this.cambiodetalles.bind(this);
   
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/Api/recomendaciones/')
    .then(res =>{
      console.log(res.data);
      this.setState({recomendaciones: res.data})
    })
  }

  cambioTitulo(e){
    this.setState({
      titulo: e.target.value
    })
  }

  cambiodetalles(e){
    this.setState({
      detalles: e.target.value
    })
  }

  

  mostrar(cod,index){
    axios.get('http://127.0.0.1:8000/Api/recomendaciones/'+cod)
    .then(res => {
      this.setState({
        pos: index,
        banner: 'Editar',
        id: res.data.id,
        titulo: res.data.titulo,
        detalles: res.data.detalles,
        
      })
    })
  }

  guardar(e){
    e.preventDefault();
    let cod = this.state.id;
    const datos = {
      titulo: this.state.titulo,
      detalles: this.state.detalles,
      
    }
    if(cod>0){
      //edición de un registro
      axios.put('http://127.0.0.1:8000/Api/recomendaciones/'+cod,datos)
      .then(res =>{
        let indx = this.state.pos;
        this.state.recomendaciones[indx] = res.data;
        var temp = this.state.recomendaciones;
        this.setState({
          pos:null,
          banner:'Editar',
          id:0,
          titulo: '',
          detalles: '',
         
          recomendaciones: temp
        });
      }).catch((error) =>{
        console.log(error.toString());
      });
    }else{
      //nuevo registro
      axios.post('http://127.0.0.1:8000/Api/recomendaciones/',datos)
      .then(res => {
        this.state.recomendaciones.push(res.data);
        var temp = this.state.recomendaciones;
        this.setState({
          id:0,
          titulo:'',
          detalles: '',
          
          recomendaciones: temp
        });
      }).catch((error)=>{
        console.log(error.toString());
      });
    }
  }

  eliminar(cod){
    let rpta = window.confirm("¿Desea Eliminar?");
    if(rpta){
      axios.delete('http://127.0.0.1:8000/Api/recomendaciones/'+cod)
      .then(res =>{
        var temp = this.state.recomendaciones.filter((recomendaciones)=>recomendaciones.id !== cod);
        this.setState({
          recomendaciones: temp
        })
      })
    }
  }
 

  render(){
    return(
      
    <div  className="espa container" >
      <h1>Administración de Recomendaciones Sensalud</h1>
      <br />
      <div className="">
        <div class="row justify-content-center">
          <div class="col-8">
            <div className='tabla'>
              <table class="table table-bordered border-primary">
                <thead>
                  
                  <tr>
                    
                    <th scope="col">ID</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descripción</th>
                    
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                      {this.state.recomendaciones.map( (recomendaciones,index) =>{
                        return (
                          <tr key={recomendaciones.id}>
                              <td>{recomendaciones.id}</td>
                              <td>{recomendaciones.titulo}</td>
                              <td>{recomendaciones.detalles}</td>
                              
                              <td>
                              
                                <button class="btn btn-primary" onClick={() => this.mostrar(recomendaciones.id, index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
                                <div></div>
                              <br />
                                <button class="btn btn-danger" onClick={() => this.eliminar(recomendaciones.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>
                              </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
            
          </div>
          <div class="col-4">
            <div className='formulario'>
              <h3>{this.state.banner}</h3>
              
              <form onSubmit={this.guardar}>
                <input type="hidden" value={this.state.id} />
                <div class="mb-3">
                  <label  class="form-label">Titulo</label>
                  <input type="text" class="form-control"  value={this.state.titulo} onChange={this.cambioTitulo} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Descripcion</label>
                  
                  <textarea name="textarea" class="form-control" rows="4" cols="50" value={this.state.detalles} onChange={this.cambiodetalles}  ></textarea>
                  
                </div>
                <button className="btn btn-success" >Guardar</button>

                
               
              </form>

            </div>
            
          </div>
        </div>

        
        
          


      </div>
      
        

    </div>)
  }
}

export default Admin