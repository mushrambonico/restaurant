import { changeClickedTab } from './helperFunctions';

export default function renderArea(event) {
    const content = changeClickedTab(event);
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