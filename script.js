//Para pegar uma classe de um elemento aqui no JS usamos o comando document.querySelector('.nomeDaClasse')

const count = document.querySelector('.count');
//const add = document.querySelector('.add');
//const subtract = document.querySelector('.subtract');
//const resetCounter = document.querySelector('.reset');
const buttons = document.querySelector('.buttons'); 

//Para pegar o click do JS no elemento que deseja  usamos o comando elemento.addEventListener('click', function(){})

// Nesse caso ao invés de fazer um addEventListener para cada elemento, podemos fazer um addEventListener
// para o elemento pai, que no caso é o buttons
//e depois pegar o click do elemento filho que no caso é o botão que queremos
// PEgamos o click utilizando o seguinte no add event listener
// Na arrow function vamos colocar o parametro e que vai ser o evento
// e dentro da arrow function vamos colocar um if para verificar se o elemento que foi clicado
// e com o o parametro e vamos utilizar o seguinte e.target.classList.contains('nomeDaClasse')
// com o e.target.value.classList podemos verificar a classe js do elemento que foi clicado
// e com isso executar a ação que queremos


buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')){
        count.innerHTML++;
        setColor();
    } else if(e.target.classList.contains('subtract')){
        count.innerHTML--;
        setColor();
    } else if(e.target.classList.contains('reset')){
        count.innerHTML = 0;
        setColor();
    }
}); //Aqui estamos pegando o click do elemento buttons

// na função setColor() vamos verificar se o count.innerHTML é maior que 0
// e com o element.style.color = 'cor' podemos mudar a cor do texto do elemento

function setColor()  {
    if(count.innerHTML > 0){
        count.style.color = 'green';
    } else if(count.innerHTML < 0){
        console.log('estou negativo')
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}