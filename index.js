const threeLine = document.getElementById('threeLine');
const crossIcon = document.getElementById('crossIcon');
var counter = 0;
document.getElementById("mobile-btn").addEventListener('click', () => {
    if(counter == 0){
        hide(threeLine);
        display(crossIcon);
        counter++;
    }
    else{
        hide(crossIcon);
        display(threeLine);
        counter = 0;
    }
})
function display(e){
    var className = e.classList.value;
    e.classList.remove(className);
    e.classList.add('show');
}
function hide(res){
    var className = res.classList.value;
    res.classList.remove(className);
    res.classList.add('hide');
}

const mobileNav = document.getElementById('mobileNav');
const searchBtn = document.getElementById('searchBtn');
const menuBtn = document.getElementById('menuBtn');

function mobileNavBarShow(){
    display(mobileNav);
}

function mobileNavBarHide(){
    hide(mobileNav);
}

function showSearch(){
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = "block";
    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', ()=> {
        searchBox.style.display = "none";
    });
}