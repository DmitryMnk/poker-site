

function activateLists(is_black_list, b_list, w_list, b_list_title, w_list_title, sw_buttons_block) {
    if (is_black_list) {
        b_list.classList.add('black-list--active')
        b_list.style.display = 'flex'
        b_list_title.classList.add('title-black--active')
        sw_buttons_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) 75%,  rgba(255,255,255,1) 100%)`

    } else {
        w_list.classList.add('white-list--active')
        w_list.style.display = 'flex'
        sw_buttons_block.classList.add('white--active')
        w_list_title.classList.add('title-white--active')
        sw_buttons_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) 10%,  rgba(255,255,255,1) 100%)`

    }
}

function deactivateLists(b_list, w_list, b_list_title, w_list_title) {
    b_list.style.display = 'none'
    w_list.style.display = 'none'
    b_list_title.classList.remove('title-black--active');
    w_list_title.classList.remove('title-white--active');
    b_list.classList.remove('black-list--active');
    w_list.classList.remove('white-list--active');
    document.body.style.paddingRight = ''
    document.body.style.overflow = ''
}

function moveGrad(is_black, btn_block) {
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

function switchList(b_list, w_list, b_list_title, w_list_title, sw_buttons_block ) {
    if (b_list.classList.contains('black-list--active')) {
        moveGrad(false, sw_buttons_block)
        b_list.classList.remove('black-list--active');
        w_list.style.display = 'flex';
        setTimeout(() => {
            b_list.style.display = 'none';
            w_list.classList.add('white-list--active');
        }, 200)
    } else {
        moveGrad(true, sw_buttons_block)
        w_list.classList.remove('white-list--active');
        b_list.style.display = 'flex';
        setTimeout(() => {
            w_list.style.display = 'none';
            b_list.classList.add('black-list--active');
        }, 200)
    }
    b_list_title.classList.toggle('title-black--active')
    w_list_title.classList.toggle('title-white--active')
}

function openModal(is_black_list) {
    const modal = document.querySelector('.modal');
    const closeButton = modal.querySelector('.close-button');
    const switchButtonsBlock = modal.querySelector('.switch-buttons');
    const blackList = modal.querySelector('.black-list');
    const whiteList = modal.querySelector('.white-list');
    const blackListTitle = modal.querySelector('.title-black');
    const whiteListTitle = modal.querySelector('.title-white');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '15px'
    setTimeout(() => {
        modal.classList.add('modal--active');
    }, 10)

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal--active');
        setTimeout(() => {
            deactivateLists(blackList, whiteList, blackListTitle, whiteListTitle)
            modal.style.display = 'none';

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

export {openModal}