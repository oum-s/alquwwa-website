const slide = ["BOXE.jpg", "pilate.jpg", 'hiit.jpg']
let number = 0;
function ChangeSlide(sens){
  number = number + sens;
  if (number > slide.length - 1)
    number = 0;
  if (number < 0)
    number = slide.length - 1;
  document.getElementById('slide').src = "./style/img/" + slide[number]
}
// changement automatique
// SETiNTERVAL permet d'exectuer une fonction de manière périodique (ici toutes les 4sec)
setInterval("ChangeSlide(1)", 4000);