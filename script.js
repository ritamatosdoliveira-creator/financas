function guardarMovimento() {
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const valorTotal = document.getElementById('valorTotal').value;
    const jaPago = document.getElementById('jaPago').value;
    const categoria = document.getElementById('categoria').value;

    if (!descricao || !valorTotal) {
        alert('Por favor, preencha a Descrição e o Valor Total.');
        return;
    }

    // Cria o objeto do movimento
    const movimento = { descricao, data, valorTotal, jaPago, categoria };
    
    // Mostra os dados guardados numa caixa de aviso
    alert(`Movimento "${movimento.descricao}" guardado com sucesso para a conta de Rita & Tiago!`);
    
    limparFormulario();
}

function limparFormulario() {
    document.getElementById('movimentoForm').reset();
}
