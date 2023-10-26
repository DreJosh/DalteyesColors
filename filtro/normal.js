// filtro pagina normal

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

estiID.innerHTML = 'html{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);