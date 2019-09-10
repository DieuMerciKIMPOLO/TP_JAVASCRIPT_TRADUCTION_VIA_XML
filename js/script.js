
function traduction(nomDuFichier){
  $.get(`data/${nomDuFichier}`).done(function (data) {
    var liste=data.getElementsByTagName('menuData')[0].getElementsByTagName('data');
    var title=data.getElementsByTagName('headerData')[0].getElementsByTagName('data')[0].textContent;
    let titre=$('#titre')[0]
    titre.textContent=title;
    for (let index = 0; index < liste.length; index++) {
      let li=$('#nav')[0].children[index].children[0];
      li.textContent=liste[index].textContent;
    }
    });
}
$(document).ready(function(){
    traduction('fr.xml');
    $('#lang').change(function(){
      traduction($(this).val())
    })
});