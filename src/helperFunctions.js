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

const cleanContent = function() {
    const contentChilds = Array.from(content.childNodes);
    for (let i = 0; i < contentChilds.length; i++) {
        if (contentChilds[i].id == 'main-header' || contentChilds[i].id == 'main-nav' ) {
            continue;
        } else {
            content.removeChild(contentChilds[i]);
        }
    }
}

export {
    removeClickedBtn,
    toggleClickedBtn,
    cleanContent
}