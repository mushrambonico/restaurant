import { removeClickedBtn, toggleClickedBtn, cleanContent } from './helperFunctions';

function renderAboutTab() {
    const content = document.getElementById('content');
    // creating img-container
    const imgContainer = document.createElement('div');
    // changing img-container props
    imgContainer.id = 'img-container';
    imgContainer.classList.toggle('regular-div-margin');
    // creating about container and childs
    const about = document.createElement('div');
    const paragraph = document.createElement('p');
    // changing about n childs props
    about.id = 'about';
    about.classList.toggle('regular-div-margin');
    paragraph.innerText =
        `Welcome to our Stuffed Pizza House!` +
        ` We deliver tasty stuffed pizzas to (almost) anywhere with our high-tech, eletric powered` +
        ` drones. \n\n Order now and mitigate environment damage caused by other Pizza Companies delivery services!` +
        ` As a bonus, eletric powered drones make almost no noise. Imagine a world where your street isn't polluted` +
        ` by thousand fossil powered vehicles making vrum vrum everyday? Yeah, i'd take that!` +
        ` If that wasn't enough, our Stuffed Pizzas are also between the most tasty, better and cheaper pizzas!` +
        ` Fine, don't believe me. But search Pizza rankings on iFood, TripAdvisor or RateMyPizza.` +
        `\n\n Order now, you will be pleased.`
    about.append(paragraph);
    // append everything to content div
    content.append(imgContainer, about);
    // log to assure everything is executed till this point
    console.log('page-rendered');
}

function renderAbout(event) {
    const content = document.getElementById('content');
    removeClickedBtn(); // remove 'clicked-btn' class from all btns
    // make menu btn appear 'clicked'
    toggleClickedBtn(event);
    // remove all childs from content (clean DOM) except from header and nav-bar
    cleanContent();
    renderAboutTab();
}

export {renderAbout, renderAboutTab};