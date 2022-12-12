import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useEffect,useState} from 'react'
import { allPersonajes } from '../funciones/funcion'




const Recomendaciones = () => {
    const [recomendacion, setRecomendacion] = useState(null)
    useEffect(()=>{
        allPersonajes(setRecomendacion)
    },[])  
    

  return (
    
    <div className='espa '>
      
      
        {recomendacion != null ? (recomendacion.map(reco=> (

          <div className='container' id='contenedor'>
            <div id='borde' class="card m-2" key={reco.id} >
              <div class="card-body">
                <h5 id="justi" class="card-title">{reco.titulo}</h5>
                <hr/>
                <p class="card-text">{reco.detalles}</p>
                <a class="btn btn-outline-danger" href={`/recomendaciones/${reco.id}`}>ver</a>

                
              </div>
              
            </div>
            
            

          </div>


            

            
            ))
            ):('No hay recomendaciones') }
    
    </div>
  )
}

export default Recomendaciones