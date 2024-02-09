function openReg(){
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display ='block';
}

function closeReg(){
    document.getElementById('light').style.display ='none';
    document.getElementById('fade').style.display ='none';
}

function subs(){
    document.getElementById('unSub').style.display ='none';
    document.getElementById('sub').style.display ='block';
}

function unSubs(){
    document.getElementById('unSub').style.display ='block';
    document.getElementById('sub').style.display ='none';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("up-top").style.display = "block";
    } else {
        document.getElementById("up-top").style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide div');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImage[0].clientWidth;
let x = 0;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


function nextPage(){
    x = 1;
    if(counter < carouselImage.length){
        if(carouselImage[counter].id === 'firstClone'){
            carouselSlide.style.transition = '0.5s ease';
            counter = 0;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        } else {
            carouselSlide.style.transition = '0.5s ease';
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    }
}

function prevPage(){
    x = 1;
    if(carouselImage[counter].id === 'lastClone'){
        carouselSlide.style.transition = '0.5s ease';
        counter = carouselImage.length - 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else {
        carouselSlide.style.transition = '0.5s ease';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}

const carouselItems = document.querySelectorAll(".carousel_item");

setInterval(()=> {
    if(x === 0){
        if(carouselImage[counter].id === 'firstClone'){
            carouselSlide.style.transition = '0.5s ease';
            counter = 0;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        } else {
            carouselSlide.style.transition = '0.5s ease';
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    }
    else {
        setTimeout(1000);
        x = 0;
    }
}, 3000)

const carouselPage = document.querySelector('.carousel-for-pages');
const carouselNav = document.querySelectorAll('.carousel-for-pages nav');

const prevBtn_juste = document.querySelector('#prevBtn-juste');
const nextBtn_juste = document.querySelector('#nextBtn-juste');

const size_juste = carouselNav[0].clientWidth;


nextBtn_juste.addEventListener('click', () =>{
    carouselPage.style.transition = 'none';
    carouselPage.style.transform = 'translateX(' + (-size_juste * 1) + 'px)';
});

prevBtn_juste.addEventListener('click', () =>{
    carouselPage.style.transition = 'none';
    carouselPage.style.transform = 'translateX(' + (-size_juste * 0) + 'px)';
});

const radio_one = document.querySelector('#to-page-two');
const radio_two = document.querySelector('#to-page-one');

radio_one.addEventListener('click', () =>{
    carouselPage.style.transition = 'transition 0.4s ease';
    carouselPage.style.transform = 'translateX(' + (-size_juste * 1) + 'px)';
});

radio_two.addEventListener('click', () =>{
    carouselPage.style.transition = 'transition 0.4s ease';
    carouselPage.style.transform = 'translateX(' + (-size_juste * 0) + 'px)';
});

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

const first_sm = document.querySelectorAll(".see-more-first");
const container = document.querySelectorAll(".container-for-colection");
const container2 = document.querySelector(".container-for-juste");
const contacts = document.querySelector(".cont");
const main = document.querySelector(".main").clientHeight;

const first_height = getOffset(container[0]).top / 1.2;
const second_height = getOffset(container[0]).top / 0.6;
const third_height = getOffset(container[0]).top / 0.4;
const cont_height = main * 2;

contacts.addEventListener('click', () =>{
    window.scrollBy({
        top: main,
        behavior: 'smooth'
      });
});

first_sm[0].addEventListener('click', () =>{
    window.scrollTo({
        top: first_height,
        behavior: 'smooth'
      });
});

first_sm[1].addEventListener('click', () =>{
    window.scrollTo({
        top: second_height,
        behavior: 'smooth'
      });
});

first_sm[2].addEventListener('click', () =>{
    window.scrollTo({
        top: third_height,
        behavior: 'smooth'
      });
});
