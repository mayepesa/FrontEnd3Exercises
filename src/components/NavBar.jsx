import React from 'react'

const NavBar = () => {

    const titulos = ["Home", "Catalogo", "About Us", "Contacto"]
  return (
    <div className="nav-bar">
    {titulos.map((item,index)=>(
        <div key={index} className={"navbar-item"}>
            <h4>{item}</h4>
        </div>
    ))}
    </div>
  )
}

export default NavBar