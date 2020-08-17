import render from "./domElements";
import renderMenu from "./renderMenu";
import renderContact from "./renderContact";
import renderArea from "./renderArea";
import {renderAbout} from "./renderAbout";
// render home page
render();
// 'anchor' btns
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');
const areaBtn = document.getElementById('area-btn');
const aboutBtn = document.getElementById('about-btn');
// handling tab logic through imported functions
menuBtn.addEventListener('click', renderMenu);
contactBtn.addEventListener('click', renderContact);
areaBtn.addEventListener('click', renderArea);
aboutBtn.addEventListener('click', renderAbout);