let listaDeAmigos = [];

//Adiciona um novo nome no array
function adicionarAmigo() {
    let novoNome = document.getElementById('amigo').value;
    if (novoNome < 1) {
        alert('Por favor, digite um nome válido!');
    }
    if (listaDeAmigos.includes(novoNome)) {
        alert('Este nome já está na lista, digite outro nome');
        } else {
            listaDeAmigos.push(novoNome);
            atualizarLista();
        }
        document.getElementById('amigo').value = [];
    }

//Adiciona o nome inserido no input como um elemento <li/> dentro de uma lista no HTML exibida ao usuário
function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 
    for (i = 0; i < listaDeAmigos.length; i++) {
        let novoItem = document.createElement('li');
        novoItem.textContent = listaDeAmigos[i];
        lista.appendChild(novoItem);
    }

}


