function populate(){
    if(quiz.isEnded()){
        showScores();
    }else{
        //showquestion
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choice.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices(i);
            guess("btn" + i, choice[i]);
        }
    }
}
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}
function showScores(){
    var gameOverHtml = "<h1> Result </h1>";
    gameOverHtml += "<h2 id = 'score'> Your Score:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}
function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}
var questions = {
    new Question{"Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"}
};

var quiz = new Quiz(questions);

populate();