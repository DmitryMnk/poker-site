function openModal(is_black_list) {
    const modal = document.querySelector('.modal');
    const closeButton = modal.querySelector('.close-button');
    const switchButtonsBlock = modal.querySelector('.switch-buttons');

    const blackList = modal.querySelector('.black-list');
    const whiteList = modal.querySelector('.white-list');
    const blackListTitle = modal.querySelector('.title-black');
    const whiteListTitle = modal.querySelector('.title-white');

    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('modal--active');
    }, 10)

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal--active');
        setTimeout(() => {
            modal.style.display = 'none';
            blackList.classList.remove('black-list-hidden');
            whiteList.classList.remove('white-list-hidden');
            blackListTitle.classList.remove('title-black--active');
            whiteListTitle.classList.remove('title-white--active');
            switchButtonsBlock.classList.remove('white--active');

        }, 200)
    })

    activateLists(is_black_list, blackList, whiteList, blackListTitle, whiteListTitle, switchButtonsBlock)
    whiteListTitle.addEventListener('click', () => {
        if (!whiteListTitle.classList.contains('title-white--active')) {
            switchList(blackList, whiteList, blackListTitle, whiteListTitle, switchButtonsBlock)
        }
        
    })

    blackListTitle.addEventListener('click', () => {
        if (!blackListTitle.classList.contains('title-black--active')) {
            switchList(blackList, whiteList, blackListTitle, whiteListTitle, switchButtonsBlock)
        }
        
    })
}

function activateLists(is_black_list, b_list, w_list, b_list_title, w_list_title, sw_buttons_block) {
    if (is_black_list) {
        display
        w_list.classList.add('white-list-hidden')
        b_list_title.classList.add('title-black--active')
        sw_buttons_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) 75%,  rgba(255,255,255,1) 100%)`

    } else {
        w_list_title.classList.add('title-white--active')
        b_list.classList.add('black-list-hidden')
        sw_buttons_block.classList.add('white--active')
        sw_buttons_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) 10%,  rgba(255,255,255,1) 100%)`

    }
}

function deactivateLists(b_list, w_list) {

}

function moveGrad(is_black, btn_block, b_list, w_list) {
    if (is_black) {
        let pos = 10;
        const mover = setInterval(() => {
            btn_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) ${pos}%,  rgba(255,255,255,1) 100%)`
            pos += 1;
            if (pos > 75) {
                clearInterval(mover)
            }
        }, 3)

    } else {
        let pos = 75;
        const mover = setInterval(() => {
            btn_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) ${pos}%,  rgba(255,255,255,1) 100%)`
            pos -= 1;
            if (pos < 10) {
                clearInterval(mover)
            }
        }, 3)
    }
}

export {openModal}