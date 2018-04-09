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
function drop1() {
    if(document.getElementById("dropdown2").classList.contains("show")){
        document.getElementById("dropdown2").classList.toggle("show");
    }
    document.getElementById("dropdown1").classList.toggle("show");
}
function drop2() {
    if(document.getElementById("dropdown1").classList.contains("show")){
        document.getElementById("dropdown1").classList.toggle("show");
    }
    document.getElementById("dropdown2").classList.toggle("show");

}
function resetdisplay(){
    document.getElementById("www1").style.display = 'none';
    document.getElementById("www2").style.display = 'none';
    document.getElementById("www3").style.display = 'none';
    document.getElementById("html1").style.display = 'none';
    document.getElementById("html2").style.display = 'none';
    document.getElementById("html3").style.display = 'none';
    document.getElementById("html4").style.display = 'none';
    document.getElementById("http1").style.display = 'none';
    document.getElementById("http2").style.display = 'none';
    document.getElementById("http3").style.display = 'none';
}

function showwww1(){
    resetdisplay();
    document.getElementById("html").style.display = 'none';
    document.getElementById("www").style.display = "block";
    document.getElementById("http").style.display = 'none';
    document.getElementById("www1").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}

function showwww2(){
    resetdisplay();
    document.getElementById("html").style.display = 'none';
    document.getElementById("www").style.display = "block";
    document.getElementById("http").style.display = 'none';
    document.getElementById("www2").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}

function showwww3(){
    resetdisplay();
    document.getElementById("html").style.display = 'none';
    document.getElementById("www").style.display = "block";
    document.getElementById("http").style.display = 'none';
    document.getElementById("www3").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}
function showhttp1(){
    resetdisplay();
    document.getElementById("html").style.display = 'none';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'block';
    document.getElementById("http1").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}
function showhttp2(){
    resetdisplay();
    document.getElementById("html").style.display = 'none';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'block';
    document.getElementById("http2").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}
function showhttp3(){
    resetdisplay();
    document.getElementById("html").style.display = 'none';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'block';
    document.getElementById("http3").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}
function showhtml1(){
    resetdisplay();
    document.getElementById("html").style.display = 'block';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'none';
    document.getElementById("html1").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}

function showhtmlw(){
    resetdisplay();
    document.getElementById("html").style.display = 'block';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'none';
    document.getElementById("html2").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}

function showhtml3(){
    resetdisplay();
    document.getElementById("html").style.display = 'block';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'none';
    document.getElementById("html3").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}

function showhtml4(){
    resetdisplay();
    document.getElementById("html").style.display = 'block';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'none';
    document.getElementById("html4").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}
function showhtml5(){
    resetdisplay();
    document.getElementById("html").style.display = 'block';
    document.getElementById("www").style.display = "none";
    document.getElementById("http").style.display = 'none';
    document.getElementById("html5").style.display = 'block';
    document.getElementById("dropdown1").classList.toggle("show");
}

function showcss(){
    document.getElementById("css").style.display = 'block';
    document.getElementById("js").style.display = "none";
    document.getElementById("dropdown2").classList.toggle("show");
}

function showjs(){
    document.getElementById("css").style.display = 'none';
    document.getElementById("js").style.display = "block";
    document.getElementById("dropdown2").classList.toggle("show");
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
