const mudCSS = type =>
  `#rainbow{-webkit-filter:url(#${type});-moz-filter:(#${type});-ms-filter:(#${type});-o-filter:(#${type});filter:(#${type});}`;
const mudSVG = (type, filterValues) =>
  `<svg id="dateyesColor" style="display: none"> <defs> <filter id="${type}"> <feColorMatrix type="matrix" values="${filterValues}" in="SourceGraphic" /> </filter> </defs> </svg>`;
// Variaveis globais para obter o HTML interno da pagina e fazer a mudanças com os filtros SVG e Style bibliotecas JS
const filtros = {
  achromatopsiaSVG: mudSVG(
    "achromatopsia",
    "0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0"
  ),
  achromatopsiaStyles: mudCSS("achromatopsia"),
  deuteranopiaSVG: mudSVG(
    "deuteranopia",
    "0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"
  ),
  deuteranopiaStyles: mudCSS("deuteranopia"),
  protanopiaSVG: mudSVG(
    "protanopia",
    "0.567,0.433,0,0,0 0.558,0.442,0,0,0 0 0.242,0.758,0,0 0,0,0,1,0"
  ),
  protanopiaStyles: mudCSS("protanopia"),
  tritanopiaSVG: mudSVG(
    "tritanopia",
    "0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"
  ),
  tritanopiaStyles: mudCSS("tritanopia")
};

function aplFiltro(filtro) {
  // Ignora o filtro normal, cria um evento para o evento de remover filtros seja desativado e aplica a mudança
  if (filtro === "normal")
    return delFiltro({ target: { id: window.selectedFilter } });

  // remove any currently applied filters
  if (
    document.getElementById("mudID") &&
    document.getElementById("filIDS")
  ) {
    document.getElementById("mudID").remove();
    document.getElementById("filIDS").remove();
  }
  estiID = document.createElement("style");
  estiID.id = "mudID";
  document.body.appendChild(estiID);

  filIDS = document.createElement("div");
  filIDS.id = "filIDS";
  filIDS.setAttribute(
    "style",
    "height: 0; padding: 0; margin: 0; line-height: 0;"
  );
  document.body.appendChild(filIDS);

  // obtem a matriz SVG da pagina aplica o CSS nas globais 
  filIDS.innerHTML = filtros[filtro + "SVG"];
  estiID.innerHTML = filtros[filtro + "Styles"];
  /* Os scroll nos usamos para forçar uma atualização da 
  pagina e corrige as pagina ate os filtros serem aplicados */
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

/* Essa função verifica se há um nome de filtro valido pela seleção 
e em então aplica na pagina chamando a aplFiltro() */
function seleFiltro(evt) {
  if (!evt) return;

  const filtro = getID(evt.target);
  console.log("applying filter ", filtro);
  if (!filtro) return;
  aplFiltro(filtro);
}

function getID(element) {
  let filIDS = element.id.replace("opcao", "");
  // retorna o ID que existe ou se a DIV for filha dessa ID
  return !!filIDS ? filIDS : getID(element.parentNode);
}

// remove a seleção selecionada 
function delFiltro(evt) {
  if (!evt) return;

  const filtro = getID(evt.target);
  console.log("Removendo filtros", filtro);
  if (!filtro) return;

  estiID = document.getElementById("mudID");
  filIDS = document.getElementById("filIDS");
  if (estiID && filIDS) {
    estiID.remove();
    filIDS.remove();
  }
}

/* Obtem todas as divs que contenham um padrão que se encaixe
no padrão querySelectorAll que esta a baixo */
const opcoes = document.querySelectorAll('[id^="opcao"]');

// Reage em todos as DIVS contendo os botões de opções e rótulos
opcoes.forEach(opcao => {
  opcao.addEventListener("mouseover", seleFiltro, false);
  opcao.addEventListener(
    "mouseout",
    evt => {
      removeFilter(evt);
      // Reaplica todos os filtros selecionados
      if (window.selectedFilter) aplFiltro(window.selectedFilter);
    },
    false
  );
});
