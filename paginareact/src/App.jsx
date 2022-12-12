import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Recomendaciones from './componentes/Recomendaciones'
import Navbar from './componentes/Navbar'

import Recomendacion from './componentes/Recomendacion'
import Nosotros from './componentes/Nosotros'
import Admin from './componentes/admin'


function App() {
  

  return (
    <div className="App">
      
      <Navbar/>
      <br />
      <BrowserRouter>
        <Routes>
          
            <Route index element={<Inicio/>}/>
            <Route path='/recomendaciones' element={<Recomendaciones/>}/>
            <Route path='/recomendaciones/:id' element={<Recomendacion/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/admin' element={<Admin/>}/>
          
          
            

            
            

        </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App
