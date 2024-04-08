const contacts = document.querySelector(".cont");
const main = document.querySelector(".main").clientHeight;
const cont_height = main * 2;


contacts.addEventListener('click', () =>{
    window.scrollBy({
        top: cont_height,
        behavior: 'smooth'
      });
});

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