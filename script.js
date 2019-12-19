var answerButtons = document.getElementsByClassName("quizButton");
var question = "Which of the following is a school color?";
var answers = ['Red', 'Green', 'Blue', 'Yellow'];
var correct = 3;

document.getElementsById;("question").innerHTML = question;

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click',function(){
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style' , 'background-color:rgb(76,175,80);')
        } else{
            this.setAttribute('style','background-color:rgb(210,50,35);')
        }
    });


function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:rgb(210,50,35);')
}
}
