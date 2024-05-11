const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const links = document.querySelectorAll('.apresentacao-links-botao');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    // Se o botão for marcado (página branca)
    body.style.backgroundColor = 'white';
    body.style.color = 'black';

    // Ajuste as cores dos botões de link
    links.forEach(link => {
      link.style.color = 'black'; // Cor do texto
      link.style.backgroundColor = 'white'; // Cor de fundo
      link.style.borderColor = 'black'; // Cor da borda
    });
  } else {
    // Se o botão não estiver marcado (página não branca)
    body.style.backgroundColor = 'var(--cor-primaria)';
    body.style.color = 'var(--cor-secundaria)';

    // Resetar as cores dos botões de link para os valores originais
    links.forEach(link => {
      link.style.color = 'var(--cor-secundaria)'; // Cor do texto original
      link.style.backgroundColor = 'transparent'; // Cor de fundo original
      link.style.borderColor = 'var(--cor-secundaria)'; // Cor da borda original
    });
  }
});
