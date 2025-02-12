let listaDeAmigos = [];

//Adiciona um novo nome no array
function adicionarAmigo() {
    let novoNome = document.getElementById('amigo').value;
    //Verifica se o usuário não digitou apenas um caractere
    if (novoNome.length <= 1) {
        alert('Por favor, digite um nome válido!');
        document.getElementById('amigo').value = [];
        return;
    }
    //Verifica se já não existe um nome igual no array
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

//Sortear um amigo aleatório
function sortearAmigo() {
    let mensagemResultado = document.getElementById('resultado');
    mensagemResultado.innerHTML = '';
    let numeroSorteado = Math.floor((Math.random () * listaDeAmigos.length));
    if (listaDeAmigos.length < 1) {
        alert('Não há amigos para sortear.');
    } else {
        mensagemResultado.innerHTML ='O amigo(a) secreto sorteado(a) é: ' + listaDeAmigos[numeroSorteado];
    }
}


