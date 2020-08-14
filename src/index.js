import render from "./domElements";
import renderMenu from "./renderMenu";
import renderContact from "./renderContact";
import renderArea from "./renderArea";
import {renderAbout} from "./renderAbout";

render();

const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');
const areaBtn = document.getElementById('area-btn');
const aboutBtn = document.getElementById('about-btn');

menuBtn.addEventListener('click', renderMenu);
contactBtn.addEventListener('click', renderContact);
areaBtn.addEventListener('click', renderArea);
aboutBtn.addEventListener('click', renderAbout);

console.log('Its working');