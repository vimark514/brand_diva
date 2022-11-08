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

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


function nextPage(){
    if(carouselImage[counter].id === 'firstClone'){
        carouselSlide.style.transition = '0.5s ease';
        counter = carouselImage.length - counter -1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else {
        carouselSlide.style.transition = '0.5s ease';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}

function prevPage(){
    if(carouselImage[counter].id === 'lastClone'){
        carouselSlide.style.transition = '0.5s ease';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else {
        carouselSlide.style.transition = '0.5s ease';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}

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

const first_sm = document.querySelectorAll(".carousel-slide span");
const contacts = document.querySelector(".cont");
const main = document.querySelector(".main").clientHeight;
const first_height = main/3.5;
const second_height = first_height + main/3;
const third_height = second_height + main/3;
const cont_height = main * 2;

contacts.addEventListener('click', () =>{
    window.scrollBy({
        top: cont_height,
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