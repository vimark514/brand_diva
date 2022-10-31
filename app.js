const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide div');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () =>{
    if(carouselImage[counter].id === 'firstClone'){
        carouselSlide.style.transform = "none";
        counter = carouselImage.length - counter + 1;
        console.log(carouselImage.length)
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else {
        carouselSlide.style.transition = 'transorm 0.4s ease';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

prevBtn.addEventListener('click', () =>{
    if(carouselImage[counter].id === 'lastClone'){
        carouselSlide.style.transform = "none";
        counter = carouselImage.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else {
        carouselSlide.style.transition = 'transorm 0.4s ease';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

carouselSlide.addEventListener("transitionend", () => {
    console.log("das1");
});