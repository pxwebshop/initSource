var openModalAK = document.getElementById('modalAK');
var modalAK = document.getElementById('modal1');
var closeModal1 = document.getElementById('btn-closeModal1');
openModalAK.onclick = function() {
    modalAK.style.display = "flex";
    document.body.style.backgroundColor = "#111";
}
closeModal1.onclick = function() {
    modalAK.style.display = "none";
    document.body.style.backgroundColor = "white";
}


var openModalTE = document.getElementById('modalTE');
var modalTE = document.getElementById('modal2');
var closeModal2 = document.getElementById('btn-closeModal2');
openModalTE.onclick = function() {
    modalTE.style.display = "flex";
    document.body.style.backgroundColor = "black";
}
closeModal2.onclick = function() {
    modalTE.style.display = "none";
    document.body.style.backgroundColor = "white";
}


var openModalYM = document.getElementById('modalYM');
var modalYM = document.getElementById('modal3');
var closeModal3 = document.getElementById('btn-closeModal3');
openModalYM.onclick = function() {
    modalYM.style.display = "flex";
    document.body.style.backgroundColor = "black";
}
closeModal3.onclick = function() {
    modalYM.style.display = "none";
    document.body.style.backgroundColor = "white";
}

// menu mobile
var menuList = document.getElementsByClassName('c-header__list')[0];

var menuMobile = document.getElementById('menuMobile');
var x = window.matchMedia("(max-width: 767px)");
menuMobile.onclick = function() {
    if (x.matches && menuList.style.display == "block") { // If media query matches
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}


