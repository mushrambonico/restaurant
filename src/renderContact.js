import { changeClickedTab } from './helperFunctions';

export default function renderContact(event) {
    const content = changeClickedTab(event);
    // 
    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';
    // 
    const paragraph = document.createElement('p');
    paragraph.innerText = `You can contact us on our phone: +1 382 7893 or visit our store located at` +
                ` Mount Pyrus number 387, Greece. \n
                But remember! Our best services are delivery by drone, you should call us anyway.`;
    //
    contentWrapper.append(paragraph);
    content.append(contentWrapper);
}