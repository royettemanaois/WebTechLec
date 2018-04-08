/*** JSON file for easy creating questions and mapping answers and
	 run in localhost to record the answer of the user.
***/

function storeData(fileName, localID) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", fileName, true);
	xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		     var res = this.responseText;
		     var string = JSON.stringify(res);
		     localStorage.setItem(localID, string);
		}
	};
	xhttp.send();
}

	

	if(!localStorage.getItem("questions")){
		storeData("questions.json","questions");
	}
		
	
	var questionsObjJSON = localStorage.getItem("questions");
	var questionsObj = JSON.parse(questionsObjJSON);
	eval("var questionObj2 ="+questionsObj);


	
	var index = 0;

	

window.onload = function () {
	
	generateQuestionNav();
	nextQuestion(0);
	
	
	
	if(!localStorage.getItem("userAnswer")){
		//var userAnswer = new Array(questionObj2['Prelim Questions'].length);

			var userAnswer = [];

			for(var i = 0; i < questionObj2['Prelim Questions'].length; i++){
					userAnswer.push("");
			}


		localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
	}else{
		for(var i = 0; i < questionObj2['Prelim Questions'].length; i++){
			updateNav(i);

			changeEvents();
		}

		document.getElementById('q1').style.borderTop = "8px solid yellow";
	}
}


var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));

function nextQuestion(x){
	var questions = questionObj2['Prelim Questions'];
	document.getElementById('question').innerHTML = questions[x].question.replace(/--/g,"<br>");
	index = x;

  
	document.getElementById('q'+(index+1)).style.borderTop = "8px solid yellow";
		
}

function previousQuestion(x){

	//document.getElementById('question').innerHTML = questions[x];
	index = x;
	document.getElementById('q'+(index+1)).style.borderTop = "8px solid yellow";
	submitAnswer(x+1);
}

function submitAnswer(x){
	var userAns = document.getElementById('answer').value;
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));
	userAnswer[x] = userAns;
	localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
	document.getElementById('answer').value = "";
	
	if(x < questionObj2['Prelim Questions'].length){
		updateNav(x);
	}
	
	changeEvents();
}


function changeEvents(){
	var i = index + 1;
	var v = index - 1;
	var questions = questionObj2['Prelim Questions'];

	if(i == questions.length){
		document.getElementById('question').innerHTML = questions[i-1].question.replace(/--/g,"<br>");
		document.getElementById('chkBtn').style.display = "inline-block";
		document.getElementById('nxtBtn').style.display = "none";
	}else{
		document.getElementById('nxtBtn').style.display = "inline-block";
		document.getElementById('answer').style.display = "inline-block";
		document.getElementById('chkBtn').style.display = "none";
		document.getElementById('question').innerHTML = questions[i-1].question.replace(/--/g,"<br>");	
	}


	if(v < 0){
		document.getElementById('bckBtn').style.display = "none";	
	}else{
		document.getElementById('bckBtn').style.display = "inline-block";	
	}	
	
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));
	

	document.getElementById('answer').value = userAnswer[i-1];
	document.getElementById('nxtBtn').onclick = function () {nextQuestion(i);  submitAnswer(i-1); }
	document.getElementById('bckBtn').onclick = function () {previousQuestion(v);   }	
}



function generateQuestionNav() {
	var questions = questionObj2['Prelim Questions'];
	var d = document.getElementById('qNav');

	for(var i = 0; i < questions.length; i++){
		var newElement = "<span class='samp' id='q"+(i+1)+"' onclick='changeQuestion("+i+");'>"+(i+1)+"</span>";
		d.innerHTML += newElement;
	}
}

function changeQuestion(x){
	var questions = questionObj2['Prelim Questions'];
	document.getElementById('question').innerHTML = questions[x].question.replace(/--/g,"<br>");
	var prevIndex = index;
	index = x;
	document.getElementById("q"+(index+1)).style.borderTop = "8px solid yellow";
	document.getElementById("q"+(prevIndex+1)).style.borderTop = "8px solid #1C6EA4";
	changeEvents();
}

function updateNav(index){
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));

	if(index == 0){
		document.getElementById("q"+(index+1)).style.borderTop = "8px solid yellow";
	}

	if(userAnswer[index]){
		document.getElementById("q"+(index+1)).style.borderTop = "8px solid green";
	}else{
		document.getElementById("q"+(index+1)).style.borderTop = "8px solid #1C6EA4";
	}




}


	


function displayResult(){
	var questions = questionObj2['Prelim Questions'];
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));


	var score = 0;
	document.getElementById('container').style.display = "none";
	document.getElementById('result').style.display = "block";
	var d = document.getElementById('result');
	var ol = document.createElement("ol");

	
	for(var i = 0; i < questions.length; i++){
 	  
	   if(!userAnswer[i]){
	   		userAnswer[i] = "no answer";
	   		localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
	   }

	  var li = document.createElement("li");
	  var br = document.createElement("br");
	  var q = document.createTextNode(questions[i].question);
	  li.appendChild(q);
	  li.appendChild(br.cloneNode());
	  var ans = document.createTextNode("Your answer: "+userAnswer[i]);
	  li.appendChild(ans);
	  li.appendChild(br.cloneNode());
	  var ans = document.createTextNode("The answer: "+questions[i].ans);
	  li.appendChild(ans);
	  li.appendChild(br.cloneNode());
	  ol.appendChild(li);
	  
	  if(userAnswer[i].toUpperCase() == questions[i].ans.toUpperCase()){
			score++;
			li.className = "right";
	  }else{
			document.getElementById("q"+(i+1)).style.borderTop = "8px solid red";
			li.className = "wrong";
	  }
	 
  
	}

  	d.appendChild(ol);
  	var span = document.createElement('span');
    var score = document.createTextNode(score);
    span.appendChild(score);
    d.insertBefore(span, d.childNodes[0]);


    localStorage.removeItem('userAnswer');
}
