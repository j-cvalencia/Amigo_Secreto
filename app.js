let amigos = [];

function agregarAmigo(){
  let inputValue = document.querySelector('#amigo').value;
  if (inputValue.trim() !== '') {
    amigos.push(inputValue.trim());
    document.querySelector('#amigo').value = '';
    recorrerArray();
  } else {
    alert('Porfavor insertar un nombre');
  }
}

function recorrerArray(){
  let listaAmigos = document.querySelector('#listaAmigos');
  listaAmigos.innerHTML = '';
  amigos.forEach((amigo)=>{
    let li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  })
}

function sortearAmigo(){
  if (amigos.length > 0){
    let numero = Math.floor(Math.random()*amigos.length);
    let li = document.createElement('li');
    li.textContent = amigos[numero];
    if (document.querySelector('#resultado').children[0]) {
      document.querySelector('#resultado').children[0].remove();
      document.querySelector('#resultado').appendChild(li);
    } else {
      document.querySelector('#resultado').appendChild(li);
    }
  } else {
    alert('No hay amigos en el sorteo')
  }
}
