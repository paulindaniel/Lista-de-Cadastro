// Array para armazenar os alunos
let alunos = [];

// Função para adicionar um aluno ao array
function adicionarAluno(nome, idade, curso) {
    const aluno = {
        nome: nome,
        idade: idade,
        curso: curso
    };
    
    // Adiciona o aluno ao array
    alunos.push(aluno);
}

// Função para exibir a lista de alunos na página
function exibirAlunos() {
    const listaAlunos = document.getElementById('lista-alunos');
    listaAlunos.innerHTML = ''; // Limpa a lista antes de reexibir

    // Exibe cada aluno na lista
    alunos.forEach((aluno, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Nome: ${aluno.nome} | Idade: ${aluno.idade} | Curso: ${aluno.curso} 
            <button class="remove-btn" onclick="removerAluno(${index})">Remover</button>
        `;
        listaAlunos.appendChild(li);
    });
}

// Função para remover um aluno da lista
function removerAluno(index) {
    alunos.splice(index, 1); // Remove o aluno do array
    exibirAlunos(); // Reexibe a lista de alunos após a remoção
}

// Lidar com o envio do formulário
document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;

    if (nome && idade && curso) {
        adicionarAluno(nome, idade, curso);
        exibirAlunos();

        // Limpar o formulário após adicionar
        document.getElementById('form-cadastro').reset();
    }
});

// Exibir a lista de alunos assim que a página carregar
window.onload = exibirAlunos;
