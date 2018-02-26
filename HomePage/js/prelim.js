window.onscroll = function() {scrolls()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function scrolls() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
var toggleStatus = 1;
function drop() {
    document.getElementById("dropdown").classList.toggle("show");
}

function showwww(){
    document.getElementById("www").style.display = "block";
    document.getElementById("http").style.display = "none";
    document.getElementById("html").style.display = "none";
    document.getElementById("dropdown").classList.toggle("show");    
}
function showhttp(){
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("dropdown").classList.toggle("show");
}
function showhtml(){
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = "none";
    document.getElementById("html").style.display = "block";
    document.getElementById("dropdown").classList.toggle("show");
}
function showInformational(div) {
    var x = document.getElementById("informational");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showSuccess(div) {
    var x = document.getElementById("Success");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showRedirection(div) {
    var x = document.getElementById("Redirection");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showClient(div) {
    var x = document.getElementById("Client");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showServer(div) {
    var x = document.getElementById("Server");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
