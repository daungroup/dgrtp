  // Daftar gambar yang tersedia
  const images = [
    "https://www.lotto21group.com/img/generator/ball-0.png",
    "https://www.lotto21group.com/img/generator/ball-1.png",
    "https://www.lotto21group.com/img/generator/ball-2.png",
    "https://www.lotto21group.com/img/generator/ball-3.png",
    "https://www.lotto21group.com/img/generator/ball-4.png",
    "https://www.lotto21group.com/img/generator/ball-5.png",
    "https://www.lotto21group.com/img/generator/ball-6.png",
    "https://www.lotto21group.com/img/generator/ball-7.png",
    "https://www.lotto21group.com/img/generator/ball-8.png",
    "https://www.lotto21group.com/img/generator/ball-9.png",
  ];
  
  let count = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let intervalId;
  let intervalId1;
  let intervalId2;
  let intervalId3;
  let intervalId4;
  let intervalId5;
  let randomIndex1;
  let randomIndex2;
  let randomIndex3;
  let randomIndex4;
  let randomIndex5;
  

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  function resetAll() {
    count = 0;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;

    clearInterval(intervalId);
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    clearInterval(intervalId5);
  }

  function displayRandomImages() {
resetAll();
 intervalId1 = setInterval(() => {
  document.getElementById("img1").src = images[count1 % 10];
  count1++;
  if (count1 >= 30 ) {
    clearInterval(intervalId1);
    displaySelectedNumber1(images);
  }
}, 100);

 intervalId2 = setInterval(() => {
  document.getElementById("img2").src = images[(count2+1) % 10];
  count2++;
  if (count2 >= 40) {
    clearInterval(intervalId2);
    displaySelectedNumber2(images);
  }
}, 100);

 intervalId3 = setInterval(() => {
  document.getElementById("img3").src = images[(count3+2) % 10];
  count3++;
  if (count3 >= 50) {
    clearInterval(intervalId3);
    displaySelectedNumber3(images);

  }
}, 100);

 intervalId4 = setInterval(() => {
  document.getElementById("img4").src = images[(count4+3) % 10];
  count4++;
  if (count4 >= 60) {
    clearInterval(intervalId4);
    displaySelectedNumber4(images);
  }
}, 100);

intervalId5 = setInterval(() => {
  document.getElementById("img5").src = images[(count5+3) % 10];
  document.getElementById("img6").src = images[(count5+3) % 10];
  count5++;
  if (count5 >= 62) {
    clearInterval(intervalId5);
    displaySelectedNumber(images);
  }

},100);
}

  function displaySelectedNumber1(images) {

   randomIndex1 = getRandomNumber(images.length);
  count1 = 0;
  intervalId1 = setInterval(() => {
    document.getElementById("img1").src = images[randomIndex1];

    count1++;
    if (count1 >= 30) {
      clearInterval(intervalId1);
    }
  }, 100);

};
function displaySelectedNumber2(images) {

   randomIndex2 = getRandomNumber(images.length);
  count2 = 0;
  intervalId2 = setInterval(() => {
    document.getElementById("img2").src = images[randomIndex2];

    count2++;
    if (count2 >= 40) {
      clearInterval(intervalId2);
      resolve(randomIndex2);
    }
  }, 100);

};
function displaySelectedNumber3(images) {

// return new Promise(resolve => {
   randomIndex3 = getRandomNumber(images.length);
  count3 = 0;
  intervalId3 = setInterval(() => {
    document.getElementById("img3").src = images[randomIndex3];

    count3++;
    if (count3 >= 50) {
      clearInterval(intervalId3);
      resolve(randomIndex3);
    }
  }, 100);

};
function displaySelectedNumber4(images) {

// return new Promise(resolve => {
   randomIndex4 = getRandomNumber(images.length);
  count4 = 0;
  intervalId4 = setInterval(() => {
    document.getElementById("img4").src = images[randomIndex4];
    count4++;
    if (count4 >= 60) {
      clearInterval(intervalId4);
      resolve(randomIndex4);
    }
  }, 100);

};
  

  function displaySelectedNumber(images) {
    resetAll();
    const randomIndex5 = getRandomNumber(images.length);
    const randomIndex6 = getRandomNumber(images.length);
    count5 = 0;
    intervalId = setInterval(() => {
      document.getElementById("img7").src = images[randomIndex1];
      document.getElementById("img8").src = images[randomIndex3];
      document.getElementById("img9").src = images[randomIndex1];
      document.getElementById("img10").src = images[randomIndex4];
      document.getElementById("img11").src = images[randomIndex5];
      document.getElementById("img12").src = images[randomIndex1];
      document.getElementById("img13").src = images[randomIndex6];
      document.getElementById("img14").src = images[randomIndex1];
      document.getElementById("img15").src = images[randomIndex2];
      document.getElementById("img16").src = images[randomIndex2];
      document.getElementById("img17").src = images[randomIndex3];
      document.getElementById("img18").src = images[randomIndex4];
      document.getElementById("img19").src = images[randomIndex5];
      document.getElementById("img20").src = images[randomIndex2];
      document.getElementById("img21").src = images[randomIndex2];
      document.getElementById("img22").src = images[randomIndex6];
      document.getElementById("img23").src = images[randomIndex3];
      document.getElementById("img24").src = images[randomIndex4];
      document.getElementById("img25").src = images[randomIndex5];
      document.getElementById("img26").src = images[randomIndex3];
      document.getElementById("img27").src = images[randomIndex3];
      document.getElementById("img28").src = images[randomIndex6];
      document.getElementById("img29").src = images[randomIndex4];
      document.getElementById("img30").src = images[randomIndex5];
      document.getElementById("img31").src = images[randomIndex6];
      document.getElementById("img32").src = images[randomIndex4];
      document.getElementById("img33").src = images[randomIndex6];
      document.getElementById("img34").src = images[randomIndex5];
      document.getElementById("img35").src = images[randomIndex1];
      document.getElementById("img36").src = images[randomIndex2];
      document.getElementById("img37").src = images[randomIndex1];
      document.getElementById("img38").src = images[randomIndex2];
      document.getElementById("img39").src = images[randomIndex3];
      document.getElementById("img40").src = images[randomIndex4];
      document.getElementById("img41").src = images[randomIndex5];
      document.getElementById("img42").src = images[randomIndex6];


      count5++;
      if (count5 >= 62) {
        clearInterval(intervalId);
      }
    }, 100);
  }
  
  function rotateImages() {
    displayRandomImages();
  }

  const generateButton = document.getElementById("generate");
  generateButton.addEventListener("click", rotateImages);

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// carousel
var carousel = document.querySelector('.carousel');
var carouselItems = carousel.querySelector('.carousel-items');
var carouselControls = carousel.querySelector('.carousel-controls');
var carouselIndicators = carousel.querySelector('.carousel-indicators');
var carouselControlPrev = carousel.querySelector('.carousel-control.prev');
var carouselControlNext = carousel.querySelector('.carousel-control.next');
var carouselIndicatorCount = carouselItems.children.length;
var currentSlide = 0;
var interval;

function goToSlide(n) {
  currentSlide = (n + carouselIndicatorCount) % carouselIndicatorCount;
  var translateX = -currentSlide * 100 / carouselIndicatorCount;
  carouselItems.style.transform = 'translateX(' + translateX + '%)';
  updateNavigation();
}

function updateNavigation() {
  var carouselIndicators = carousel.querySelectorAll('.carousel-indicator');
  for (var i = 0; i < carouselIndicators.length; i++) {
    if (i === currentSlide) {
      carouselIndicators[i].classList.add('active');
    } else {
      carouselIndicators[i].classList.remove('active');
    }
  }
}

for (var i = 0; i < carouselIndicatorCount; i++) {
  var carouselIndicator =document.createElement('div');
  carouselIndicator.classList.add('carousel-indicator');
  carouselIndicator.addEventListener('click', function(n) {
    clearInterval(interval);
    return function() {
      goToSlide(n);
      interval = setInterval(function() {
        goToSlide(currentSlide + 1);
      }, 5000);
    };
  }(i));
  carouselIndicators.appendChild(carouselIndicator);
}

carouselControlPrev.addEventListener('click', function() {
  clearInterval(interval);
  goToSlide(currentSlide - 1);
  interval = setInterval(function() {
    goToSlide(currentSlide + 1);
  }, 10000);
});

carouselControlNext.addEventListener('click', function() {
  clearInterval(interval);
  goToSlide(currentSlide + 1);
  interval = setInterval(function() {
    goToSlide(currentSlide + 1);
  }, 10000);
});

interval = setInterval(function() {
  goToSlide(currentSlide + 1);
}, 10000);

// card list
const prevBtn = document.querySelector('.prevslot');
const nextBtn = document.querySelector('.nextslot');
const cardListSlot = document.querySelector('.card__list__slot');

let index = 0;
const slotWidth = 95; // width of each slot item including margin-right
let autoSlide = null;
let isAutoSlideRunning = false; // variable to check if the slider is running automatically

function moveNext() {
  if (index < cardListSlot.children.length - 5) {
    index++;
  } else {
    index = 0;
  }
  const maxTranslateX = -855; // nilai maksimum translateX yang diinginkan
  const translateX = -slotWidth * index; // nilai translateX saat ini
  cardListSlot.style.transform = `translateX(${translateX}px)`;
  if (translateX < maxTranslateX) {
    cardListSlot.style.transform = `translateX(0px)`; // kembali ke slide pertama
    index = 0; // reset nilai index
  }
}

function startAutoSlide() {
  isAutoSlideRunning = true; // set isAutoSlideRunning to true
  autoSlide = setInterval(() => {
    moveNext();
  }, 2000);
}

function stopAutoSlide() {
  isAutoSlideRunning = false; // set isAutoSlideRunning to false
  clearInterval(autoSlide);
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  moveNext();
  if (!isAutoSlideRunning) { // check if the slider is running automatically
    setTimeout(() => {
      startAutoSlide();
    }, 2000);
  }
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  if (index > 0) {
    index--;
  } else {
    index = cardListSlot.children.length - 5;
  }
  const translateX = -slotWidth * index; // nilai translateX saat ini
  cardListSlot.style.transform = `translateX(${translateX}px)`;
  if (!isAutoSlideRunning) { // check if the slider is running automatically
    setTimeout(() => {
      startAutoSlide();
    }, 2000);
  }
});

startAutoSlide();




// //modals
// const modalBtn = document.querySelector('#modal-btn');
// const closeBtn = document.querySelector('.close');

// // Events
// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

// // Open
// function openModal() {
//   const target = modalBtn.getAttribute('data-target');
//   const modal = document.querySelector(target);
//   modal.style.display = 'block';
// }

// // Close
// function closeModal() {
//   const target = modalBtn.getAttribute('data-target');
//   const modal = document.querySelector(target);
//   modal.style.display = 'none';
// }

// // Close If Outside Click
// function outsideClick(e) {
//   const target = modalBtn.getAttribute('data-target');
//   const modal = document.querySelector(target);
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }


// Show the modal
function showModal() {
  modal.classList.add('fade-in');
}

$(".modal-trigger-rtp").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"flex"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".close-modal, .modal-sandbox").click(function(){
  $(".modal-rtp").css({"display":"none"});
  // tambahkan kode berikut
  originalTextList = [];
  const bubbletextList = document.querySelectorAll('.bubbletext');
  bubbletextList.forEach(bubbletext => {
    bubbletext.textContent = '';
  });
});

function copyToClipboard(input) {
  navigator.clipboard.writeText(input.value)
  .then(() => {
    console.log('Text copied to clipboard');
    Swal.fire({
      title: 'Link Alternatif di Copy!',
      icon: 'success',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      titleFontSize: '8px'
    });
  })
  .catch((err) => {
    console.error('Failed to copy text: ', err);
  });
}

//POPUP BANNER RTP
function showPopup(popup) {
  // Set the popup style to "popup-show" after a 2 second delay
  setTimeout(() => {
    popup.style.animation = 'popup-show 3s ease forwards';
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  const modalRTPs = document.querySelectorAll('.modal-rtp');

  modalRTPs.forEach(modalRTP => {
    const popup = modalRTP.querySelector('#popup');
    if (popup) {
      showPopup(popup);
    }
  });
});


// const popup = document.querySelector('#popup');

// function popupLoop() {
//   // Wait for 1 second before showing the popup
//   setTimeout(() => {
//     popup.style.animation = 'popup-show 2s ease forwards';
    
//     // Wait for 3 seconds before hiding the popup
//     setTimeout(() => {
//       popup.style.animation = 'popup-hide 3s ease forwards';
      
//       // Reset the popup to its original position after the hide animation is complete
//       popup.addEventListener('animationend', () => {
//         popup.style.animation = 'none';
//         popup.style.margin = '450px';
//         popupLoop();
//       }, {once: true});
//     }, 15000);
//   }, 1000);
// }

// // Start the popup loop
// popupLoop();