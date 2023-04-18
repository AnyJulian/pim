import React from 'react'

function headerCustom() {
  return (
    <nav>
    <div class="hamburger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <ul class="menu-items">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </nav>
  )
}

export default headerCustom