window.onscroll = function() {myFunction()};

function myFunction() {
	var navbar = document.getElementById('nav');
    var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.className += ' sticky'
  } else {
    navbar.classList.remove('sticky');
  }
}