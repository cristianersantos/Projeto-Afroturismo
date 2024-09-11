function pesquisarCidade() {
    let cidade = document.getElementById("cityInput").value.toLowerCase().trim(); // Obtém o valor digitado, converte para minúsculo e remove espaços extras
    let info = document.getElementById("info"); 
    
    // Limpa o conteúdo anterior
    info.innerHTML = '';
       
    // Verifica se a cidade digitada existe na base de dados
    if (data[cidade]) {
        // Adiciona o título, conteúdo e o link ao resultado
        info.innerHTML = `
            <h2>${data[cidade].title}</h2>
            <p>${data[cidade].content}</p>
            <a href="${data[cidade].link}" target="_blank">Saiba mais!</a>
        `;
    } else {
        info.innerHTML = "<p>Cidade não encontrada. Tente digitar Salvador, Rio de Janeiro ou São Paulo.</p>";
    }
    // Limpa o campo de input após a pesquisa
    document.getElementById("cityInput").value = '';
}



