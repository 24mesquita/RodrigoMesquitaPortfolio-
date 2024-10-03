import React from 'react'
import './index.css';

function Menu() {
  return (
    <>
<div id="nav-icon3" onClick={openMenu}>
  <div onClick={openMenu}></div>
  <div onClick={openMenu}></div>
  <div onClick={openMenu}></div>
  <div onClick={openMenu}></div>
</div>

        <div className="menu" >
            <ul>
                <li ><a href="/" >home</a>
                    <div className="menu-line active"></div>
                </li>
                <li><a href="/journey">journey</a>
                    <div className="menu-line"></div>
                </li>
                <li><a href="/Skills">skills</a>
                    <div className="menu-line"></div>
                </li>
                <li><a href="#">hobbies</a>
                    <div className="menu-line"></div>
                </li>
                <li><a href="#">contact me</a>
                    <div className="menu-line"></div>
                </li>

            </ul>
        </div>
    </>


  
  )
}


//funtion that adds class open to the menu id nav-icon3
function openMenu() {
    const navIcon = document.getElementById("nav-icon3");
    const navIcon2 = document.getElementById("line");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li");
  
    // Toggle the "open" class on the nav icon and menu
    navIcon.classList.add("open");
    menu.classList.add("open");
  
    // Toggle the "aberto" class on the menu
    menu.classList.add("aberto");

    
  
    // Add a class to each list item with a delay
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("active");
      }, index * 500); // Change the delay time as needed
    });
  }
//se clicar fora do menu fecha o menu 
document.addEventListener("click", function (e) {
    const navIcon = document.getElementById("nav-icon3");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li");
    if (e.target !== menu && e.target !== navIcon) {
      navIcon.classList.remove("open");
      menu.classList.remove("open");
    
      // Toggle the "aberto" class on the menu
      menu.classList.remove("aberto");

  
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("active");
        }, index * 500); // Change the delay time as needed
      });
      
    
    }
  });




 

export default Menu;