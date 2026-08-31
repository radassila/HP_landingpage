// =========================================
// 1) Marca o link da navbar correspondente à section visível na tela
// =========================================
const SECOES_FILMES = document.querySelectorAll(".filme");
const LINKS_NAV = document.querySelectorAll(".lista-nav a");

const OBSERVADOR = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const id = entrada.target.getAttribute("id");

        // remove a classe "ativo" de todos os links...
        LINKS_NAV.forEach((link) => link.classList.remove("ativo"));

        // ...e adiciona apenas no link que aponta para a section atual
        const LINK_ATIVO = document.querySelector(`.lista-nav a[href="#${id}"]`);
        if (LINK_ATIVO) {
          LINK_ATIVO.classList.add("ativo");
        }
      }
    });
  },
  { threshold: 0.4 } // considera "visível" quando 40% da section aparece na tela
);

SECOES_FILMES.forEach((secao) => OBSERVADOR.observe(secao));

// =========================================
// 2) Botão "Voltar ao topo"
// =========================================
const BOTAO_TOPO = document.getElementById("btn-topo");

BOTAO_TOPO.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
