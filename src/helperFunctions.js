const removeClickedBtn = function() {
    // 'clean' clicked btns
    const nav = document.getElementById('main-nav');
    const navChilds = Array.from(nav.childNodes);
    for (let i = 0; i < navChilds.length; i++) {
        navChilds[i].classList.remove('clicked-btn');
    }
}
const toggleClickedBtn = function(event) {
    // make clicked btn appear 'clicked'
    event.target.classList.toggle('clicked-btn')
}
const cleanContent = function(content) {
    // clean everything ...
    const contentChilds = Array.from(content.childNodes);
    for (let i = 0; i < contentChilds.length; i++) {
        // except for these three things ...
        if (contentChilds[i].id == 'main-header' || contentChilds[i].id == 'main-nav' || contentChilds[i].id == 'main-footer') {
            continue; 
        } else {
            content.removeChild(contentChilds[i]);
        }
    }
}
const changeClickedTab = function(event) {
    // wrap module functions 'n redudant features among all tabs to export 
    const content = document.getElementById('content');
    removeClickedBtn();
    toggleClickedBtn(event);
    cleanContent(content);
    return content;
}
 export {changeClickedTab};