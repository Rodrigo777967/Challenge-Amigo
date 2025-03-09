// Variável global para armazenar os nomes dos amigos
let listaDeAmigos = [];

function adicionarAmigo() {
    let valorInput = document.getElementById('amigo').value;
    if (valorInput.trim() === "") { // Verifica se o input está vazio
        alert('Por favor, insira um nome');
        return;
    }
    listaDeAmigos.push(valorInput); // Adiciona o nome à lista global
    let lista = document.getElementById('listaAmigos');
    
    // Cria um novo elemento 'li' e define seu texto como o valor do input
    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = valorInput;
    
    // Adiciona o novo 'li' à lista de amigos
    lista.appendChild(novoAmigo);
    
    // Limpa o campo de input após adicionar o amigo
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um amigo.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    
    // Limpa o conteúdo anterior do resultado
    resultado.innerHTML = "";
    
    // Exibe o nome sorteado no 'resultado'
    let itemResultado = document.createElement('li');
    itemResultado.textContent = amigoSorteado;
    resultado.appendChild(itemResultado);
}
