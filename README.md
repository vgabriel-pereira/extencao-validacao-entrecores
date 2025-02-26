# Validador de CPF/CNPJ - EntreCores

## ✨ Visão Geral
Esta extensão de navegador foi desenvolvida para o site [Entre-COREs](https://entrecores.confere.org.br/), com o objetivo de validar CPF e CNPJ inseridos no campo de consulta. Ao detectar um CPF ou CNPJ inválido, a extensão exibe um alerta fixo e visualmente destacado, impedindo a consulta até que o usuário confirme clicando em "OK".

---

## 📝 Funcionalidades
- Validação precisa de CPF e CNPJ com base nos algoritmos oficiais.
- Exibição de alerta fixo em tons de vermelho para chamar a atenção do usuário.
- O alerta permanece até que o usuário clique no botão "OK".
- Integração direta com a página de consulta do site Entre-COREs.

---

## ⚙️ Instalação
1. Clone este repositório ou baixe os arquivos.
2. Acesse `chrome://extensions/` no Chrome.
3. Ative o **Modo de desenvolvedor** no canto superior direito.
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto.
5. A extensão será carregada e estará pronta para uso no site Entre-COREs.

---

## 📚 Estrutura do Projeto
```
├── manifest.json         # Configurações e permissões da extensão
├── background.js         # (Opcional) Arquivo para futuras funcionalidades em segundo plano
├── script.js             # Lógica de validação e exibição de alertas
├── popup.html            # Interface do popup da extensão (se aplicável)
└── icons/                # Ícones utilizados na extensão
```

---

## 🛠️ Como Usar
1. Acesse o site [Entre-COREs](https://entrecores.confere.org.br/).
2. Digite um CPF ou CNPJ no campo de consulta.
3. Clique no botão **Consultar**.
4. Se o documento for inválido, um alerta vermelho fixo será exibido com a mensagem de erro.
5. Clique em **OK** para fechar o alerta e corrigir o valor inserido.

---

## 🔧 Tecnologias Utilizadas
- **HTML5** e **CSS3** para estrutura e estilo do popup.
- **JavaScript (ES6)** para a lógica de validação e interação com o DOM.
- **Manifest V3** para configuração da extensão no Chrome.

---

## 💪 Contribuição
Sinta-se à vontade para contribuir! Para sugerir melhorias ou relatar bugs:
1. Faça um fork do projeto.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha melhoria'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## 🛡️ Licença
Este projeto é de uso interno e não possui uma licença pública atrelada. Entre em contato para mais informações.

---

## 👨‍💻 Desenvolvedor
**Vitor Gabriel Pereira Trindade**  
✉️ Email: gabrielptrindade02@gmail.com  
📞 Telefone: (61) 99225-1984  

---

## 🚀 Demonstração Visual
> "Atenção: CPF inválido!"  
![Exemplo de alerta vermelho fixo com botão OK](./icons/exemplo-alerta.png)
<<<<<<< HEAD

---


=======
>>>>>>> origin
