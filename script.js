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
        let inputIdArrowUp = selectedMenu[i].lastChild.lastChild.id;
        let inputIdArrowDown = selectedMenu[i].firstChild.firstElementChild.id;
        
        const arrowDown = document.getElementById(inputIdArrowDown);
        const arrowUp = document.getElementById(inputIdArrowUp);
        console.log(arrowDown);

        if (arrowUp.style.display == 'none') {
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'inline-block';
            } else {
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'inline-block';
            }    
        }
    )
}
    


//adicionar uma class nas duas li. Usar o for para mapear o índice. Atribuir uma variável para selecionar essas classes.
//adicioar um eventlineter com o índice dessa variável da classe. Fazer esse event listener repassar para a função as informações
//pegar as informações e identificar a id pelo target e depois criar a string variável de acordo com o elemento clicado