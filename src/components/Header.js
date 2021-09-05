import React from "react"
import "./c-style/Header.css"
import Typed from 'react-typed'
import ContactsBtn from "./contactez-moi"




const Header = () => {
    return ( 
        <div className="header-wrapper">
            <div className="main-info">
                <h1>“Le succès ne s'imite pas, il se crée.”</h1>
                <Typed className="typed-text" 
                strings={["Cours","Exercices","Problémes","Examens Nationaux et régionaux","Examens blancs"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <br/>
                <ContactsBtn/>
               
            </div>
        </div>
    )
} 

export default Header
