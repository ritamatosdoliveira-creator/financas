<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rita & Tiago — Gestão Financeira</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Barra de Estado Simulada (Estilo iOS) -->
    <div class="status-bar">
        <span>9:41</span>
        <div class="icons">📶 🔋</div>
    </div>

    <!-- Ecrã Principal da App -->
    <div class="app-container">
        <header>
            <button class="btn-secondary" onclick="limparFormulario()">Cancelar</button>
            <h1>Novo movimento</h1>
            <button class="btn-primary" onclick="guardarMovimento()">Guardar</button>
        </header>

        <main>
            <form id="movimentoForm">
                <div class="form-group">
                    <label for="descricao">Descrição</label>
                    <input type="text" id="descricao" placeholder="Ex: Supermercado">
                </div>

                <div class="form-group">
                    <label for="data">Data</label>
                    <input type="date" id="data">
                </div>

                <div class="form-group">
                    <label for="valorTotal">Valor total (€)</label>
                    <input type="number" id="valorTotal" step="0.01" placeholder="0,00">
                </div>

                <div class="form-group">
                    <label for="jaPago">Já pago (€)</label>
                    <input type="number" id="jaPago" step="0.01" placeholder="0,00">
                </div>

                <div class="form-group">
                    <label for="categoria">Categoria</label>
                    <select id="categoria">
                        <option value="">Selecione uma categoria</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Transportes">Transportes</option>
                        <option value="Casa">Casa</option>
                    </select>
                </div>
            </form>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>
