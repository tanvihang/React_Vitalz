"use client"

import './header.css'
import HeaderButton from '../buttons/headerButton/HeaderButton'

export default function Header(){

    function showMenu(e){
        e.target.nextElementSibling.classList.toggle("header-right-show")
    
    }

    return(
        <div className = "header-container">
            <div className = "header-left">
                <div className = "header-left-image">
                </div>
            </div>

            <div className = "header-right">
                <div className = "header-menu-btn" onClick={showMenu}>
                </div>
                <div className = "header-right-selection">
                    <HeaderButton title = "Home"></HeaderButton>
                    <HeaderButton title = "About Us"></HeaderButton>
                    <HeaderButton title = "Store"></HeaderButton>
                    <HeaderButton title = "Service"></HeaderButton>
                    <HeaderButton title = "Package"></HeaderButton>
                    <HeaderButton title = "Contact Us"></HeaderButton>
                    <HeaderButton title = "Provider"></HeaderButton>
                    <HeaderButton title = "Refund Policy"></HeaderButton>
                    <HeaderButton title = "Privacy Policy"></HeaderButton>
                </div>

            </div>
        </div>
    )

}
