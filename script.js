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

const menuButton = document.querySelectorAll('#menuButton, .closeMenu');
const menu = document.querySelector('.menu');
//const buttonCloseMenu = document.querySelector('.closeMenu')/

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener('click', () => {
        menu.classList.toggle('menu--ativo');

    })
    
}



//adicionar uma class nas duas li. Usar o for para mapear o índice. Atribuir uma variável para selecionar essas classes.
//adicioar um eventlineter com o índice dessa variável da classe. Fazer esse event listener repassar para a função as informações
//pegar as informações e identificar a id pelo target e depois criar a string variável de acordo com o elemento clicado