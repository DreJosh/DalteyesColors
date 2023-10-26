//Aqui nos lemos oq o usuario escolheu e mudamos a pagina 
//Mandamos a mudança com JavcScript

/* Esse comando armazena o filtro selecionado para quando o mouse para de passar o mouse
sobre o filtro ele seja aplicado  */
window.selectedFilter = null;

// Aqui obtemos o check-box selecionado 
window.onload = function() {
  if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function(result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};

// Define o filtro selecionado no armazenamento e retorna o valor de entrada
function defSelecao(value) {
  try {
    chrome.storage.local.set({ key: value }, function() {
      document.getElementById(value).checked = true;
    });
  } catch {}
}

// Aqui inplantamos o filtro na tela
function inpFiltro(fileName) {
  chrome.tabs.executeScript({ file: fileName });
}

document.querySelectorAll(['[id^="radio"]']).forEach(radioButton => {
  const filtro = radioButton.parentElement.id.replace("opcao", "");
  radioButton.addEventListener("click", function() {
    // Aqui mudamos a pagina com um filtro específicos 
    defSelecao(radioButton.id);
    inpFiltro(`filtro/${filtro}.js`);
    // check-box seleção
    aplFiltro((window.selectedFilter = filtro));
  });
});
