import {renderAboutTab} from './renderAbout';

export default function render() {
    const content = document.getElementById('content');
    // creating header and childs
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const slogan = document.createElement('div');
    // changing header and childs properties
    header.id = 'main-header';
    header.classList.toggle('regular-div-margin');
    h1.innerText = 'Stuffed Pizza House';
    slogan.innerText = 'The most famous pizza man from Lisboa is now delivering pizzas anywhere!';
    header.append(h1, slogan);
    // creating nav and childs
    const nav = document.createElement('nav');
    nav.id = 'main-nav';
    const aboutBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const contactBtn = document.createElement('div');
    const areaBtn = document.createElement('div')
    // changing nav n childs props
    menuBtn.id = 'menu-btn';
    aboutBtn.id = 'about-btn';
    contactBtn.id = 'contact-btn';
    areaBtn.id = 'area-btn';
    aboutBtn.innerText = 'about';
    menuBtn.innerText = 'menu';
    contactBtn.innerText = 'contact';
    areaBtn.innerText = 'area';
    aboutBtn.classList.toggle('clicked-btn');
    nav.append(aboutBtn, menuBtn, contactBtn, areaBtn);
    // append default content
    content.append(header, nav);
    // render 'home tab (about)'
    renderAboutTab();
    // log to assure everything is executed till this point
    console.log('page-rendered');
}

