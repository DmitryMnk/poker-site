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
            deactivateLists(blackList, whiteList)
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

function activateLists(is_black_list, b_list, w_list, b_list_title, w_list_title, sw_buttons_block) {
    if (is_black_list) {
        b_list.style.display = 'flex'
        sw_buttons_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) 75%,  rgba(255,255,255,1) 100%)`

    } else {
        w_list.style.display = 'flex'
        sw_buttons_block.classList.add('white--active')
        sw_buttons_block.style.background = `linear-gradient(150deg, rgba(0,0,0,1) 10%,  rgba(255,255,255,1) 100%)`

    }
}

function deactivateLists(b_list, w_list) {
    b_list.style.display = 'none'
    w_list.style.display = 'none'
    document.body.style.paddingRight = ''
    document.body.style.overflow = ''
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

function conveyor(par_block) {
    
}
export {openModal}