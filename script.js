const hamburger = document.querySelector('.hamburger');
const closes = document.querySelector('.closebtn');
const mobile = document.querySelector('.nav-mobile');

if (hamburger && mobile) {
  hamburger.addEventListener('click', () => {
    mobile.style.display = 'block';
    hamburger.style.display = 'none';
    closes.style.display = 'block';
  });
}

if (closes) {
  closes.addEventListener('click', () => {
    mobile.style.display = 'none';
    hamburger.style.display = 'block';
    closes.style.display = 'none';
  });
}

const lectures = [
  {
    id: 1,
    image: 'img/jo1.jpg',
    name: 'Josue Rushanika',
    titre: 'Im a Software develloper and Network Engineer',
    about: 'Josue has vast knowledge in IT and Web Development.',
  },

  {
    id: 2,
    image: 'img/jo2.jpg',
    name: 'Lawrence',
    titre: 'Computer scientist and Co-founder of Google',
    about: 'Page was the chief executive officer of Google from 1997 until August 2001, then from April 2011 until July 2015 when he moved to become CEO of Alphabet Inc..',
  },

  {
    id: 3,
    image: 'img/jo3.jpg',
    name: 'Brendan Eich',
    titre: 'A computer programmer and technology executive',
    about: 'He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.',
  },

  {
    id: 4,
    image: 'img/jo4.png',
    name: 'Philip Emeagwali',
    titre: 'Computer scietist won the Gordon Bell Prize - the Nobel Prize for computation',
    about: 'His computers are currently being used to forecast the weather and to predict the likelihood and effects of future global warming.',
  },

  {
    id: 5,
    image: 'img/jo5.jpg',
    name: 'Tang Xiaoou',
    titre: 'computer scientist and the founder of SenseTime, an artificial intelligence company.',
    about: 'He is a Chinese billionaire and remains a professor at the Chinese University of Hong Kong with the Department of Information Engineering.',
  },

  {
    id: 6,
    image: 'img/jo6.jpg',
    name: 'Tang Xiaoou',
    titre: 'computer scientist and the founder of SenseTime, an artificial intelligence company.',
    about: 'He is a Chinese billionaire and remains a professor at the Chinese University of Hong Kong with the Department of Information Engineering.',
  },

];

const plusBtn = document.querySelector('#plus');
const withdrawBtn = document.querySelector('#withdraw');
const lecturedisplay = document.querySelector('.lecture-display');

for (let i = 0; i < lectures.length; i += 1) {
  lecturedisplay.innerHTML += `<div class="lecture-all">
    <img src="${lectures[i].image}" alt="" class="image-lecture">
    <div class="lecture-desc">
      <h4 class="lecture-nom">${lectures[i].name} </h4>
      <p class="lecture-titre">${lectures[i].titre} </p>
      <p class="lecture-resu">${lectures[i].about} </p>
    </div>
 </div> `;

  const lectureall = document.querySelectorAll('.lecture-all');
  if (i > 1) {
    lectureall[i].classList.add('hide-lecture');
  }
}

const lectureall = document.querySelectorAll('.lecture-all');
plusBtn.addEventListener('click', () => {
  lectureall.forEach((josue) => {
    josue.classList.remove('hide-lecture');
    plusBtn.classList.add('hide-lecture');
    withdrawBtn.classList.remove('hide-lecture');
  });
});

withdrawBtn.addEventListener('click', () => {
  lectureall.forEach((josue, index) => {
    if (index > 1) {
      josue.classList.add('hide-lecture');
    }

    plusBtn.classList.remove('hide-lecture');
    withdrawBtn.classList.add('hide-lecture');
  });
});