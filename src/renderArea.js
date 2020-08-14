import { removeClickedBtn, toggleClickedBtn, cleanContent } from './helperFunctions';

export default function renderArea(event) {
    const content = document.getElementById('content');
    removeClickedBtn(); // remove 'clicked-btn' class from all btns
    // make menu btn appear 'clicked'
    toggleClickedBtn(event);
    // remove all childs from content (clean DOM) except from header and nav-bar
    cleanContent();
    //
    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';
    //
    const paragraph = document.createElement('p');
    paragraph.innerText = `If you're anywhere on the EU, US, China, Japan or Brazil we can reach your location` +
                        ` ASAP with our drones. \n
                        For any other location, please check our number on contact tab and call us. We may or` +
                        ` not be able to deliver your order.`;
    //
    contentWrapper.append(paragraph);
    content.append(contentWrapper);
}