const button = document.getElementById('scrollButton');
const targetSection = document.getElementById('musicas');

  window.addEventListener('scroll', () => {
        const body = document.body;
        if (window.scrollY > 100) {
            body.classList.add('scrolled');
        } else if (window.scrollY < 30) {
            body.classList.remove('scrolled');
        }
    });
function rudder() {
    window.open('https://distrokid.com/hyperfollow/cosmus3/rudder', '_blank');
}
function show1() {
    window.open('https://byma.com.br/event/67ea523f2661dd000c95b9e6', '_blank');
}
function dance() {
    window.open('https://offstep.link/622550476683')
}
function ninehundredninety() {
    window.open('https://distrokid.com/hyperfollow/cosmus3/990', '_blank');
}
function scrollar(sectionNumber) {
    // Gera o ID da seção com base no número passado
    const sectionId = `section${sectionNumber}`;
    
    // Seleciona a seção correspondente
    const section = document.getElementById(sectionId);
    
    // Verifica se a seção existe antes de tentar rolar
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Rola suavemente
        block: 'center'      // Alinha ao topo
      });
    } else {
      console.error(`Seção com ID '${sectionId}' não encontrada.`);
    }
  }
  let slideIndex = 0;

  function mostrarSlide(n) {
      const slides = document.querySelectorAll('.carrossel-container img');
      const totalSlides = slides.length;
  
      // Atualiza o índice do slide
      slideIndex += n;
  
      // Verifica se o índice está fora dos limites
      if (slideIndex >= totalSlides) {
          slideIndex = 0; // Volta para o primeiro slide
      } else if (slideIndex < 0) {
          slideIndex = totalSlides - 1; // Vai para o último slide
      }
  
      // Move o container para mostrar o slide atual
      const offset = -slideIndex * 100;
      document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
  
      // Atualiza os indicadores de slide (se houver)
      atualizarIndicadores();
  }
  
  // Função para atualizar os indicadores de slide
  function atualizarIndicadores() {
      const pontos = document.querySelectorAll('.indicadores .ponto');
      pontos.forEach((ponto, index) => {
          if (index === slideIndex) {
              ponto.classList.add('ativo');
          } else {
              ponto.classList.remove('ativo');
          }
      });
  }
  
  // Adiciona indicadores de slide dinamicamente
  function criarIndicadores() {
      const slides = document.querySelectorAll('.carrossel-container img');
      const indicadoresContainer = document.querySelector('.indicadores');
  
      slides.forEach((_, index) => {
          const ponto = document.createElement('div');
          ponto.classList.add('ponto');
          if (index === 0) ponto.classList.add('ativo'); // Primeiro ponto ativo
          ponto.addEventListener('click', () => pularParaSlide(index));
          indicadoresContainer.appendChild(ponto);
      });
  }
  
  // Função para pular para um slide específico
  function pularParaSlide(index) {
      slideIndex = index;
      mostrarSlide(0); // Chama a função para atualizar o slide
  }
  
  // Inicializa o carrossel
  window.onload = () => {
      criarIndicadores(); // Cria os indicadores de slide
      mostrarSlide(0); // Exibe o primeiro slide
  };
