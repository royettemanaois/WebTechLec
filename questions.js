function Question(text, choice, answer){
    this.text = text;
    this.choice = choices;
    this.answer = answer;
}
Question.prototype.correntAnswer = function(choice){
    return choice == this.answer;
}