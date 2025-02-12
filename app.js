let listaDeAmigos = [];


function adicionarAmigo() {
    let novoNome = document.getElementById('amigo').value;
    if (novoNome < 1) {
        alert('Por favor, digite um nome válido!');
    }
    listaDeAmigos.push(novoNome);
    document.getElementById('amigo').value = [];
}

