import { changeClickedTab } from './helperFunctions';

export default function renderMenu(event) {
    const content = changeClickedTab(event);
    // create content wrapper n add some props
    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';
    contentWrapper.classList.toggle('flex-row');
    // create menu items;
    const indPizza = document.createElement('div');
    const smallPizza = document.createElement('div');
    const medPizza = document.createElement('div');
    const largePizza = document.createElement('div');
    const homeBeer = document.createElement('div');
    //
    indPizza.innerText = `A 7 inches pizza for one mouth. \n
                    Available flavours: Pepperoni, Muzzarela 'n Home Special \n
                    Price: 4$
                    `;
    smallPizza.innerText = `A 10 inches pizza. Small but enough for some. \n
                        Available flavours: Pepperoni, Muzzarela 'n Home Special \n
                        Price: 6$
                        `;
    medPizza.innerText = `A 12 inches pizza. \n
                        Available flavours: Pepperoni, Muzzarela 'n Home Special \n
                        Price: 9$
                        `;
    largePizza.innerText = `A 15 inches stuffed pizza for you, your family and your friends. \n
                        Available flavours: Pepperoni, Muzzarela 'n Home Special \n
                        Price: 12$
                        `; 
    homeBeer.innerText = `Our beer is made here, it's very tasty and yummy! \n
                        Price: 3$ 
                        `;
    // append things
    contentWrapper.append(indPizza, smallPizza, medPizza, largePizza, homeBeer);
    content.append(contentWrapper);
}