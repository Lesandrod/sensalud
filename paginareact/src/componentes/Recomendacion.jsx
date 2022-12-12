import React from 'react'
import { uniqueReco } from '../funciones/funcion'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Recomendacion = () => {

    const [recomenda, setRecomenda] = useState(null)
    const params=useParams()
    useEffect(()=>{
        uniqueReco(params.id,setRecomenda)
    },[])  

  return (
    <div className="espa">
        {recomenda != null ? (
            <div className='container'>
                <h2>{recomenda.titulo}</h2>
                <p>{recomenda.detalles}</p>
                
                
                
            </div>
        ):('Cargando......') }
        
    </div>
  )
}

export default Recomendacion