const contacts = document.querySelector(".cont");
const main = document.querySelector(".main").clientHeight;
const cont_height = main * 2;

contacts.addEventListener('click', () =>{
    window.scrollBy({
        top: cont_height,
        behavior: 'smooth'
      });
});

function myFunction() {
    var copyText = 'https://lucky-melba-0e136c.netlify.app/722-01.html';
    navigator.clipboard.writeText(copyText);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Link are copied";
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}