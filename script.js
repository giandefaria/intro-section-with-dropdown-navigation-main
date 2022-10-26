/*const arrowDown = document.getElementById('arrowDown');
const arrowUp = document.getElementById('arrowUp')
function arrowChange() {
    
    if (arrowUp.style.display == 'none') {
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline-block';
    } else {
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'inline-block';
    }
}
*/
const selectedMenu = document.getElementsByClassName('selectedMenu');

for (let i = 0; i < selectedMenu.length; i++) {
    selectedMenu[i].addEventListener('click', function (e) {
        let IdArrowUp = selectedMenu[i].lastChild.lastChild.id;
        let IdArrowDown = selectedMenu[i].firstChild.firstElementChild.id;
        let event = e.path[1].nextElementSibling.id;
                
        const arrowDown = document.getElementById(IdArrowDown);
        const arrowUp = document.getElementById(IdArrowUp);
        const dropDown = document.getElementById(event);
        console.log(dropDown);

        if (arrowUp.style.display == 'none') {
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'inline-block';
            dropDown.style.display = 'block';
            } else {
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'inline-block';
            dropDown.style.display = 'none';
            }    
        }
    )
}


//function open menu in mobile view

const menuButton = document.querySelectorAll('#menuButton, .closeMenu');
const menu = document.querySelector('.menu');

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener('click', () => {
        menu.classList.toggle('menu--ativo');

    })
    
}
