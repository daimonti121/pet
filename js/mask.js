
let elements = document.getElementsByClassName('imaskjs__input_tel');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{3}(800)000-00-00',
  });
}
