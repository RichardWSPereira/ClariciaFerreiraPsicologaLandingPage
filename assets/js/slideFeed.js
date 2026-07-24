let indiceAtual = 0;

function gerenciarClassesLayout() {
  const track = document.getElementById('sliderTrack');
  // Seleciona todas as imagens do slider que devem ter o efeito zoom no desktop
  const imgs = document.querySelectorAll('#sliderTrack img');
  
  if (!track) return;

  if (window.innerWidth > 900) {
    // --- MODO DESKTOP ---
    // 1. Restaura o estado da Track (Grid)
    track.classList.remove('slider-track');
    track.classList.add('grid');
    track.style.transform = 'translateX(0)';
    indiceAtual = 0;

    // 2. Traz a classe 'img-transform' de volta para todas as imagens
    imgs.forEach(img => {
      img.classList.add('img-transform');
    });

  } else {
    // --- MODO MOBILE ---
    // 1. Aplica o layout de Slider
    track.classList.add('slider-track');
    track.classList.remove('grid');

    // 2. Remove o efeito de hover do desktop para não quebrar a tela no mobile
    imgs.forEach(img => {
      img.classList.remove('img-transform');
    });
  }
}

// 1. Executa assim que o HTML carregar na tela
document.addEventListener('DOMContentLoaded', gerenciarClassesLayout);

// 2. Executa sempre que o usuário redimensionar a janela do navegador
window.addEventListener('resize', gerenciarClassesLayout);

// 3. Função chamada pelos botões de avançar/voltar
function mudarSlide(direcao) {
  // Se estiver no Desktop, desativa a função
  if (window.innerWidth > 900) return;

  const track = document.getElementById('sliderTrack');
  const totalSlides = track.children.length;

  indiceAtual += direcao;

  if (indiceAtual >= totalSlides) {
    indiceAtual = 0;
  } else if (indiceAtual < 0) {
    indiceAtual = totalSlides - 1;
  }

  const deslocamento = -indiceAtual * 100;
  track.style.transform = `translateX(${deslocamento}%)`;
}