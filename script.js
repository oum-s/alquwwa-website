// Liste des images, titres et paragraphes

const sliderData = [
  {
    image: "./style/img/boxe.jpg",
    title: "CARDIO BOXE",
    paragraph: "La cardio-boxe est une activité qui combine des mouvements de boxe (coups-de-poing, coups de pied, esquives) avec des exercices travaillant le cardio. C'est un entraînement sans contact, accessible à tous, qui améliore à la fois la condition physique et la coordination.",
    benefits:[
      "• Pour les femmes qui veulent brûler des calories tout en s'amusant. Celles qui cherchent à sculpter leur silhouette et à tonifier leurs muscles.",
      "• Pour déstresser et libérer leur énergie tout en se sentant plus fortes et confiantes. Pour les débutantes ou sportives expérimentées",
      "• C'est une activité parfaite pour vous défouler, brûler un maximum de calories, et révéler la combattante qui sommeille en vous.",
      "jj"
    ]
  },
  {
    image: "./style/img/boxe.jpg",
    title: " HIIT",
    paragraph: "Le HIIT (High-Intensity Interval Training) est idéal pour les femmes qui souhaitent optimiser leur temps et atteindre leurs objectifs rapidement, que ce soit.",
    benefits:[
      `Perte de poids : Brûlez des calories même après l'entraînement grâce à l'effet 'post-combustion`,
      "• • Renforcement musculaire : Gagnez en tonus sans passer des heures à la salle.",
      "• Gain d'énergie: Libérez le stress et boostez votre vitalité en peu de temps.",
      "• Flexibilité du planning : Parfait pour les femmes actives ou avec un emploi du temps chargé, les séances sont courtes (20 à 30 minutes suffisent). Le HIIT, c'est votre allié pour transformer votre corps et renforcer votre mental, sans compromis sur votre emploi du temps. Peu importe votre niveau, vous pouvez progresser et vous sentir plus forte, une séance à la fois. Avec Al Quwa, libérez votre force en action et montrez que vous êtes capable de tout!"
    ]
  },
  {
    image: "./style/img/pilate.jpg",
    title: "Fitness",
    paragraph: "Le fitness regroupe des activités physiques variées (renforcement musculaire, cardio, souplesse) visant à améliorer la condition physique, la santé et le bien-être général.",
    benefits:[
      "• Pour les femmes qui veulent prendre soin de leur corps et de leur esprit.",
      "• Celles qui cherchent à tonifier leurs muscles, perdre du poids ou simplement rester actives.",
      "• Adapté à tous les niveaux : que vous soyez débutante ou habituée au sport, les exercices peuvent être personnalisés.",
      "Le fitness, c'est bien plus qu'un sport : c'est un style de vie pour se sentir forte, confiante et pleine d'énergie."
    ]
  },
  {
    image: "./style/img/hiit.jpg",
    title: "Renforcement musculaire",
    paragraph: "Le renforcement musculaire consiste à travailler vos muscles avec des exercices ciblés pour les rendre plus forts, plus toniques et mieux sculptés. Il peut se pratiquer avec ou sans matériel (poids, élastiques, etc.)",
    benefits:[
      "• Pour les femmes qui veulent tonifier leur corps, améliorer leur posture ou se sentir plus fortes au quotidien.",
      "• Celles qui souhaitent prévenir les douleurs, renforcer leur dos, ou compléter un programme minceur.",
      "• Adapté à toutes : débutantes ou sportives confirmées.",
      "• Le renforcement musculaire, c'est l'assurance de sculpter votre corps tout en gagnant en confiance et en énergie."
    ]
  },
  {
    image: "./style/img/hiit.jpg",
    title: " Cross Fit",
    paragraph: "Le CrossFit est une méthode d'entraînement qui mélange des exercices de musculation, de cardio et de gymnastique, réalisés à haute intensité. Les séances, variées et dynamiques, visent à développer la force, l'endurance, la souplesse et l'explosivité.",
    benefits:[
      "• Pour les femmes qui aiment se dépasser et relever des défis",
      "•  Celles qui veulent sculpter leur corps, améliorer leur endurance et gagner en force.",
      "• Adapté à tous les niveaux : les exercices peuvent être ajustés pour les débutantes comme pour les plus expérimentées.",
      "• Le CrossFit, c'est bien plus qu'un sport : c'est un défi à relever à chaque séance."
    ]
  }
];

// Variables pour l'index actuel du slider
let currentIndex = 0;

// Accéder aux éléments HTML
const imageElement = document.getElementById("slider-image");
const titleElement = document.getElementById("slider-title");
const paragraphElement = document.getElementById("slider-paragraph");
const benefitsElement = [
  document.getElementById("slider-benefit1"),
  document.getElementById("slider-benefit2"),
  document.getElementById("slider-benefit3"),
  document.getElementById("slider-benefit4"),
];

// Fonction pour mettre à jour l'image et la description
function updateSlider() {
  const currentData = sliderData[currentIndex];
  imageElement.src = currentData.image;
  titleElement.textContent = currentData.title;
  paragraphElement.textContent = currentData.paragraph;

  // Mettre à jour les paragraphes
  currentData.benefits.forEach((benefit, index) => {
    if (benefitsElement[index]) {
      benefitsElement[index].textContent = benefit;
    }
  });
}
// Gérer le clic "Suivant"
document.getElementById("next").addEventListener("click", function() {
  // Passer à l'index suivant et revenir au début si on est à la fin
  currentIndex = (currentIndex + 1) % sliderData.length;
  updateSlider();
});
// Gérer le clic "Précédent"
document.getElementById("prev").addEventListener("click", function() {
  // Passer à l'index précédent et revenir à la fin si on est au début
  currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
  updateSlider();
});

// Initialiser le slider avec l'image et la description par défaut
updateSlider();
setInterval(() => updateSlider(currentIndex = (currentIndex + 1) % sliderData.length), 4000);

// slider testimonials
let currentIndexTestimonials = 0;
const testimonials = [
  {
    author: "Fatou Diay",
    paragraph: "First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."
  },
  {
    author: "Isleym Diar",
    paragraph: "First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."
  },
  {
    author: "Sylvie Pierrot",
    paragraph: "First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."
  },
  {
    author: "Ophelie Yun",
    paragraph: "First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."
  }
];

function updateTestimonial(){
  const testimonyText = document.getElementById("testimony-text");
  const testimonyAuthor = document.getElementById("testimony-author");

  if (testimonyText && testimonyAuthor) {
    testimonyText.textContent = testimonials[currentIndexTestimonials].paragraph;
    testimonyAuthor.textContent = testimonials[currentIndexTestimonials].author;
  }
}

setInterval(() => {
  currentIndexTestimonials = (currentIndexTestimonials + 1) % testimonials.length;
  updateTestimonial();
}, 4000);

updateTestimonial();

// questions-reponses
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const icon = header.querySelector('i');

    // Toggle the active class
    accordionContent.classList.toggle('active');

    // Set max-height based on the active class
    if (accordionContent.classList.contains('active')) {
      const allContents = document.querySelectorAll('.accordion-content');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      // Change icon to minus
      icon.classList.remove('fa-circle-plus');
      icon.classList.add('fa-circle-minus');
      allContents.forEach(content => {
        if (content !== accordionContent) {
          content.style.maxHeight = '0';
          content.classList.remove('active');
        }
      });
    } else {
      accordionContent.style.maxHeight = '0';
      // Change icon to plus
      icon.classList.remove('fa-circle-minus');
      icon.classList.add('fa-circle-plus');
    }
  });
});