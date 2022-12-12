import axios from 'axios'

const allPersonajes = async (state) =>{
    const recomendacion = await axios.get('http://127.0.0.1:8000/Api/recomendaciones/')
    console.log(recomendacion.data)

    state(recomendacion.data)

}

const uniqueReco = async (id,state) =>{
    const recomendacion = await axios.get(`http://127.0.0.1:8000/Api/recomendaciones/${id}/`)
    console.log(recomendacion.data)

    state(recomendacion.data)

}

export{
    uniqueReco,
    allPersonajes
    
   
}