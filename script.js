function switchTab(tabId) {
    // Esconde todos os conteúdos das abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Desativa todos os botões de navegação
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostra o conteúdo da aba selecionada
    const targetContent = document.getElementById(`tab-${tabId}`);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // Ativa o botão correspondente na barra inferior
    const targetBtn = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(`'${tabId}'`)
    );
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}
