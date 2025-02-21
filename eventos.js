document.addEventListener("DOMContentLoaded", () => {
    const tabelaCorpo = document.getElementById("tabela-corpo");
    const form = document.getElementById("cadastro-form");


    const registros = [
        { nome: "João Silva", jogoFavorito: "Minecraft" },
        { nome: "Maria Souza", jogoFavorito: "Fortnite" },
        { nome: "Pedro Almeida", jogoFavorito: "Call of Duty" },
        { nome: "Ana Costa", jogoFavorito: "The Legend of Zelda" },
        { nome: "Lucas", jogoFavorito: "Read Dead Redemption" },
        { nome: "Laura Pereira", jogoFavorito: "Animal Crossing" },
        { nome: "Rafael Gomes", jogoFavorito: "FIFA 21" },
        { nome: "Beatriz Martins", jogoFavorito: "League of Legends" },
        { nome: "Felipe Santos", jogoFavorito: "Grand Theft Auto V" },
        { nome: "Camila Lima", jogoFavorito: "The Witcher 3" }
    ];


    function adicionarRegistro(nome, jogoFavorito) {
        const linha = document.createElement("tr");
        linha.innerHTML = `<td>${nome}</td><td>${jogoFavorito}</td>`;
        tabelaCorpo.appendChild(linha);
    }


    registros.forEach(registro => {
        adicionarRegistro(registro.nome, registro.jogoFavorito);
    });


document.querySelector("button[type='button']").addEventListener("click", () => {
        const nome = document.getElementById("nome").value;
        const jogoFavorito = document.getElementById("jogo-favorito").value;


        if (nome && jogoFavorito) {
            adicionarRegistro(nome, jogoFavorito);
            form.reset();
        }
    });
});
