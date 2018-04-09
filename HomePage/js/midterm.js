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
    document.getElementById("dropdown1").classList.toggle("show");
}
function drop2() {
    document.getElementById("dropdown2").classList.toggle("show");
}


function resetdisplay(){
    document.getElementById("css1").style.display = 'none';
    document.getElementById("css2").style.display = 'none';
    document.getElementById("css3").style.display = 'none';
    document.getElementById("css4").style.display = 'none';
    document.getElementById("css5").style.display = 'none';
    document.getElementById("css6").style.display = 'none';
    document.getElementById("css7").style.display = 'none';
    document.getElementById("css8").style.display = 'none';
    document.getElementById("css9").style.display = 'none';
    document.getElementById("css10").style.display = 'none';
    document.getElementById("css11").style.display = 'none';
    document.getElementById("js1").style.display = 'none';
    document.getElementById("js2").style.display = 'none';
    document.getElementById("js3").style.display = 'none';
}

function showcss1(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css1").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}

function showcss2(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css2").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}

function showcss3(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css3").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}

function showcss4(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css4").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showcss5(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css5").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showcss6(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css6").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showcss7(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css7").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}

function showcss8(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css8").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showcss9(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css9").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showcss10(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css10").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showcss11(){
    resetdisplay();
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = 'none';
    document.getElementById("css11").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}


function showjs1(){
    resetdisplay();
    document.getElementById("js").style.display = "block";
    document.getElementById("css").style.display = 'none';
    document.getElementById("js1").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}

function showjs2(){
    resetdisplay();
    document.getElementById("js").style.display = "block";
    document.getElementById("css").style.display = 'none';
    document.getElementById("js2").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}

function showjs3(){
    resetdisplay();
    document.getElementById("js").style.display = "block";
    document.getElementById("css").style.display = 'none';
    document.getElementById("js3").style.display = 'block';
    document.getElementById("dropdown2").classList.toggle("show");
}
