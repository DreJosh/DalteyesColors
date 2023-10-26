// filtro pagina protanopia

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

filIDS.innerHTML = '<svg id="dateyesColor" style="display: none"> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0 0.242,0.758,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
estiID.innerHTML = 'html{-webkit-filter:url(#protanopia);-moz-filter:(#protanopia);-ms-filter:(#protanopia);-o-filter:(#protanopia);filter:(#protanopia);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);