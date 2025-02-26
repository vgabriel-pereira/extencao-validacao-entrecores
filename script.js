function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove pontuação
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    return resto === parseInt(cpf.charAt(10));
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, ''); // Remove pontuação
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    const calcularDigito = (base, pesos) => {
        const soma = base.reduce((acc, num, idx) => acc + num * pesos[idx], 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const numeros = cnpj.split('').map(Number);
    const primeiroDigito = calcularDigito(numeros.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const segundoDigito = calcularDigito(numeros.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

    return numeros[12] === primeiroDigito && numeros[13] === segundoDigito;
}

// Função para exibir alerta
function exibirAlerta(mensagem) {
    if (document.getElementById('alertaValidador')) return;

    const overlay = document.createElement('div');
    overlay.id = 'alertaValidador';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;
        z-index: 10000;
    `;

    const alerta = document.createElement('div');
    alerta.style.cssText = `
        background-color: white; padding: 25px 35px; border-radius: 12px;
        text-align: center; font-size: 20px; font-weight: bold; width: 380px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;

    const mensagemEl = document.createElement('p');
    mensagemEl.textContent = mensagem;
    mensagemEl.style.marginBottom = '15px';

    const botaoOK = document.createElement('button');
    botaoOK.textContent = 'OK';
    botaoOK.style.cssText = `
        background-color: #007BFF; color: white; border: none; padding: 12px 24px;
        border-radius: 8px; cursor: pointer; font-size: 16px; 
    `;

    botaoOK.addEventListener('click', () => {
        overlay.remove(); 
    });

    alerta.appendChild(mensagemEl);
    alerta.appendChild(botaoOK);
    overlay.appendChild(alerta);
    document.body.appendChild(overlay);
}

// Validação ao clicar no botão "Consultar"
document.getElementById('btnConsultar')?.addEventListener('click', (e) => {
    const input = document.getElementById('txtConsulta');
    const valor = input?.value.trim();

    if (!valor) return;

    // Remove pontuação para facilitar a verificação
    const valorSemPontuacao = valor.replace(/\D/g, '');

    // Verifica se o valor é CPF ou CNPJ
    if (document.getElementById('rdCpf')?.checked) {
        if (valorSemPontuacao.length === 11 && !validarCPF(valor)) {
            e.preventDefault();
            exibirAlerta('CPF inválido!');
        } else if (valorSemPontuacao.length === 14 && !validarCNPJ(valor)) {
            e.preventDefault();
            exibirAlerta('CNPJ inválido!');
        } else if (valorSemPontuacao.length !== 11 && valorSemPontuacao.length !== 14) {
            e.preventDefault();
            exibirAlerta('O valor informado não é um CPF nem um CNPJ válido!');
        }
    }
});
