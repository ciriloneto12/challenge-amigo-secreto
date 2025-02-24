// Lista que armazenará os nomes dos amigos
const amigos = [];

const inputNomeAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Função para adicionar amigos à lista
const adicionarAmigo = () => {
    let nomeAmigo = inputNomeAmigo.value.trim();
    
    if (nomeAmigo) {
        if (amigos.includes(nomeAmigo)) {
            inputNomeAmigo.value = '';
            alert(`Já existe um amigo chamado ${nomeAmigo}`);
            return;
        }
        amigos.push(nomeAmigo);
        inputNomeAmigo.value = '';
        atualizarListaAmigos();
        return;
    }
    alert('Por favor, insira um nome válido');
};

// Função para atualizar a lista de amigos na interface
const atualizarListaAmigos = () => {
    listaAmigos.innerHTML = '';  // Limpa a lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    
    // Limpa o resultado anterior
    if (resultado.textContent) {
        resultado.textContent = '';
    }
};

// Função para sortear o amigo secreto
const sortearAmigo = () => {
    if (amigos.length) {
        // Embaralha a lista e sorteia o amigo secreto
        const indiceAmigoElegido = Math.floor(Math.random() * amigos.length);
        const amigoElegido = amigos.splice(indiceAmigoElegido, 1)[0]; // Retira o amigo da lista
        
        listaAmigos.innerHTML = ''; // Limpa a lista de amigos
        atualizarListaAmigos(); // Atualiza a lista após o sorteio

        // Exibe o nome do amigo escolhido
        resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoElegido}</strong>`;
    } else {
        resultado.innerHTML = 'Não há amigos para sortear';
    }
};
