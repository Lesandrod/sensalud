import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav id='barra' class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" id='titulo' href="/">SensaludPE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>
                <span class="navbar-text">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="/nosotros">Nosotros</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="/recomendaciones">Recomendaciones</a>
                    </li>
                </ul>
                </span>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar