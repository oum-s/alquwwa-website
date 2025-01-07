// Liste des images, titres et paragraphes

const sliderData = [
  {
    image: "./style/img/boxe.jpg",
    title: "BOXE",
    paragraph: "firstthing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!.",
    benefits:[
      "ONELorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "DEUXLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "trousLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "uatreLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque."
    ]
  },
  {
    image: "./style/img/pilate.jpg",
    title: "PILATE",
    paragraph: "second ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!.",
    benefits:[
      "ONELorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "DEUXLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "trousLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "uatreLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque."
    ]
  },
  {
    image: "./style/img/hiit.jpg",
    title: "HIIT",
    paragraph: "thirdLorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!.",
    benefits:[
      "ONELorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "DEUXLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "trousLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque.",
      "uatreLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, porro? Eligendi voluptatibus sapiente veniam velit libero dolorem voluptate veritatis soluta? Minus aliquid, fugiat dignissimos commodi cupiditate omnis tempora similique atque."
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
    {author: "Fatou Diay",
  paragraph: "First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."},

  {author: "Isleym Diar",
  paragraph: `"First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."`},
  
  {author: "Sylvie Pierrot",
  paragraph: `"First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."`},

  {author: "Ophelie Yun",
  paragraph: `"First thing ipsum dolor sit amet, consectetur adipisicing elit. Architecto modi nulla aliquid ab nobis aut sequi omnis dolor, molestiae cumque doloribus explicabo possimus, numquam minus. Doloremque provident reprehenderit numquam animi!."`},
]

function updateTestimonial(){
  const testimonyText = document.getElementById("testimony-text");
  const testimonyAuthor = document.getElementById("testimony-author");

  if (testimonyText && testimonyAuthor) {
    alert('hey');
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
// au click sur le plus, afficher le paragraphe response et changer l'icone plus par l'icone moins 
// récuperer les élements
// let plus = document.querySelectorAll('fa-solid fa-circle-plus');
document.getElementById('toggle-response').addEventListener('click', function() {
  const response = document.getElementById('response');
  const qr = response.closest('.q_r');

  if (response) {
    if (response.classList.contains('show')) {
      response.classList.remove('show');
      qr.style.height = 'auto';
    } else {
      response.classList.add('show');
      qr.style.height = 'auto';
    }
  }
  this.classList.toggle('fa-circle-plus');
  this.classList.toggle('fa-circle-minus');
});

document.querySelector('.pricing__item.third').addEventListener('mouseover', function() {
  const previousItem = this.previousElementSibling;
  if (previousItem) {
    previousItem.classList.add('hovered');
  }
});

document.querySelector('.pricing__item.third').addEventListener('mouseout', function() {
  const previousItem = this.previousElementSibling;
  if (previousItem) {
    previousItem.classList.remove('hovered');
  }
});