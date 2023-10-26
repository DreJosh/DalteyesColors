// filtro pagina deuteranopia

if (document.getElementById("mudID612481")) {
    estiID = document.getElementById("mudID612481").remove();
    filIDS = document.getElementById("filIDS471924").remove();
}
estiID = document.createElement('style');
estiID.id = "mudID612481";
document.body.appendChild(estiID);

filIDS = document.createElement('div');
filIDS.id = "filIDS471924";
filIDS.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filIDS);

filIDS.innerHTML = '<svg id="dateyesColor" style="display: none"> <defs> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
estiID.innerHTML = 'html{-webkit-filter:url(#deuteranopia);-moz-filter:(#deuteranopia);-ms-filter:(#deuteranopia);-o-filter:(#deuteranopia);filter:(#deuteranopia);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);