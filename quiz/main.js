/*** JSON file for easy creating questions and mapping answers and
	 run in localhost to record the answer of the user.
***/


	var questions = ["sample1 <br> 1","sample2","sample3"];
	var answers =  ["answer1","ANSWER2","AnsWer3"];

	var index = 1;

window.onload = function () {
	    nextQuestion(0);
		var userAnswer = new Array(questions.length);
		localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
		generateQuestionNav();
		
}

function nextQuestion(x){

	document.getElementById('question').innerHTML = questions[x];
	index = x;
	
	
}

function previousQuestion(x){

	document.getElementById('question').innerHTML = questions[x];
	index = x;
	submitAnswer(x+1);
}

function submitAnswer(x){
	var userAns = document.getElementById('answer').value;
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));
	userAnswer[x] = userAns;
	localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
	document.getElementById('answer').value = "";
	
	if(x < questions.length){
		updateNav(x);
	}
	
	changeEvents();



}


function changeEvents(){
	var i = index + 1;
	var v = index - 1;


	if(i == questions.length+1){
		document.getElementById('question').innerHTML = "FINISHED!";
		document.getElementById('nxtBtn').style.display = "none";
		document.getElementById('answer').style.display = "none";		
	}else{
		document.getElementById('nxtBtn').style.display = "inline-block";
		document.getElementById('answer').style.display = "inline-block";
		document.getElementById('question').innerHTML = questions[i-1];	
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
	var d = document.getElementById('qNav');

	for(var i = 0; i < questions.length; i++){
		var newElement = "<span class='samp' id='q"+(i+1)+"' onclick='changeQuestion("+i+");'>"+(i+1)+"</span>";
		d.innerHTML += newElement;
	}
}

function changeQuestion(x){
	document.getElementById('question').innerHTML = questions[x];
	index = x;
	changeEvents();
}

function updateNav(index){
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));

	if(userAnswer[index] != ""){
		document.getElementById("q"+(index+1)).style.borderTop = "8px solid green";
	}else{
		document.getElementById("q"+(index+1)).style.borderTop = "8px solid #1C6EA4";
	}

}