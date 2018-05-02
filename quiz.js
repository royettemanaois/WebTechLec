function generateQuestionNav() {
	var questions = questionObj2[termQuestions];
	var d = document.getElementById('qNav');

	for(var i = 0; i < questions.length; i++){
		var newElement = "<span class='samp' id='q"+(i+1)+"' onclick='changeQuestion("+i+");'>"+(i+1)+"</span>";
		d.innerHTML += newElement;
	}
}
function displayResult(){
	var questions = questionObj2[termQuestions];
	var userAnswer = JSON.parse(localStorage.getItem("userAnswer"));


	var score = 0;
	document.getElementById('container').style.display = "none";
    document.getElementById('qNav').style.position = "fixed";
    document.getElementById('qNav').style.left = "50px";
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
	  var q = document.createTextNode("Question: "+questions[i].question);
	  li.appendChild(q);
	  li.appendChild(br.cloneNode());
	  var ans = document.createTextNode("Your answer: "+userAnswer[i]);
	  li.appendChild(ans);
	  li.appendChild(br.cloneNode());
	  var ans = document.createTextNode("The answer: "+questions[i].ans);
	  li.appendChild(ans);
	  li.appendChild(br.cloneNode());
	  ol.appendChild(li);

	  var e = document.getElementById("q"+(i+1));
	  
	  if(userAnswer[i].toUpperCase() == questions[i].ans.toUpperCase()){
			score++;
			li.className = "right";

	  }else{
			e.style.borderTop = "8px solid red";
			li.className = "wrong";
	  }

	 li.id = "question"+(i+1);
	 

	 var qNav = document.getElementById("qNav");
	 e.removeAttribute("onclick");
	 var a = document.createElement("a");
	 a.href = "#question"+(i+1);
	 a.appendChild(e);
	 qNav.appendChild(a);
	 
  
	}

  	d.appendChild(ol);
  	var span = document.createElement('span');
        var score = document.createTextNode("Score: "+score+"/"+questions.length);
        span.appendChild(score);
	span.id = "score";
        d.insertBefore(span, d.childNodes[0]);


    localStorage.removeItem('userAnswer');
}