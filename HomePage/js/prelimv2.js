//document.getElementById("www1-link").addEventListener("click", showwww1);
//document.getElementById("www2-link").addEventListener("click", showwww2);
//document.getElementById("www3-link").addEventListener("click", showwww3);
//document.getElementById("www1-link").onclick = function() { showwww1()};
//document.getElementById("www2-link").onclick = function() { showwww2()};
//document.getElementById("www3-link").onclick = function() { showwww3()};

function resetDisplay(){
  document.getElementById("www1").style.display = 'none';
  document.getElementById("www2").style.display = 'none';
  document.getElementById("www3").style.display = 'none';
  document.getElementById("html-intro").style.display = 'none';
  document.getElementById("html1").style.display = 'none';
  document.getElementById("html2").style.display = 'none';
  document.getElementById("html3").style.display = 'none';
  document.getElementById("html4").style.display = 'none';
  document.getElementById("http1").style.display = 'none';
  document.getElementById("http2").style.display = 'none';
  document.getElementById("http3").style.display = 'none';
}

function toggleMenu(togggleTopic){
  if(togggleTopic.style.display === 'none'){
    togggleTopic.style.display = 'block';
  }else {
    togggleTopic.style.display = 'none';
  }
}
//show www
function show_www_content_page(){
  var www_topic = document.getElementById("www-topic");
  toggleMenu(www_topic);
  www_content_page();
  showwww1();
}
function www_content_page(){
  document.getElementById("html-topic").style.display = "none";
  document.getElementById("http-topic").style.display = "none";
  document.getElementById("www-content-page").style.display = 'block';
  document.getElementById("html-content-page").style.display = 'none';
  document.getElementById("http-content-page").style.display = 'none';
}
function showwww1(){
  resetDisplay();
  document.getElementById("www1").style.display = 'block';
  www_content_page();
}
function showwww2(){
  resetDisplay();
  document.getElementById("www2").style.display = 'block';
  www_content_page();
} 
function showwww3(){
  resetDisplay();
  document.getElementById("www3").style.display = 'block';
  www_content_page();
}
//show html
function show_html_content_page(){
  var html_topic = document.getElementById("html-topic");
  toggleMenu(html_topic);
  html_content_page();
  showhtml_intro();
}
function html_content_page(){
  document.getElementById("www-content-page").style.display = 'none';
  document.getElementById("html-content-page").style.display = 'block';
  document.getElementById("http-content-page").style.display = 'none';
}
function showhtml_intro(){
  resetDisplay();
  document.getElementById("html-intro").style.display = 'block';
  html_content_page();
}
function showhtml1(){
  resetDisplay();
  document.getElementById("html1").style.display = 'block';
  html_content_page();
}
function showhtml2(){
  resetDisplay();
  document.getElementById("html2").style.display = 'block';
  html_content_page();
} 
function showhtml3(){
  resetDisplay();
  document.getElementById("html3").style.display = 'block';
  html_content_page();
}
function showhtml4(){
  resetDisplay();
  document.getElementById("html4").style.display = 'block';
  html_content_page();
}
//show http
function show_http_content_page(){
  var http_topic = document.getElementById("http-topic");
  toggleMenu(http_topic);
  http_content_page();
  showhttp1();
}
function http_content_page(){
  document.getElementById("www-topic").style.display = "none";
  document.getElementById("html-topic").style.display = "none";
  document.getElementById("www-content-page").style.display = 'none';
  document.getElementById("html-content-page").style.display = 'none';
  document.getElementById("http-content-page").style.display = 'block';
}
function showhttp1(){
  resetDisplay();
  document.getElementById("http1").style.display = 'block';
  http_content_page();
}
function showhttp2(){
  resetDisplay();
  document.getElementById("http2").style.display = 'block';
  http_content_page();
} 
function showhttp3(){
  resetDisplay();
  document.getElementById("http3").style.display = 'block';
  http_content_page();
} 
