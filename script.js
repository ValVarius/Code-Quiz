// Creating all the Objects with all the questions
var questions = [
 {
    ask: "What does HTML stand for?",
    option1: "Hyper Text Markup Language",
    option2: "Hyperlinks and Text Markup Language",
    option3: "Hypertrophy To My Ligamenets",
    option4: "Hail To My Leader",
    correct: "Hyper Text Markup Language"
},
 {
    ask: "What is the correct HTML element for inserting a line break?",
    option1: "<break>",
    option2: "<breaking>",
    option3: "<Breaking Bad>",
    option4: "<br>",
    correct: "<br>"
},
 {
    ask: "What is the correct HTML for creating a hyperlink?",
    option1: '<a>href="http://www.google.com"</a>',
    option2: '<a href="http://www.google.com"></a>',
    option3: '<a http://www.google.com></a>',
    option4: '<a href="http://www.google.com">',
    correct: '<a href="http://www.google.com"></a>'
},
 {
    ask: "How can you make a numbered list?",
    option1: "ol",
    option2: "ul",
    option3: "al",
    option4: "el",
    correct: "ol"
}

];


// creating variable targeting elements on the page

var Quest = document.querySelector("#quest");
var options = document.querySelector("#list");
var start = document.querySelector("#buttonStart");

var allButtons = document.getElementsByClassName("press");

var button1 = document.querySelector("#buttonFirst");
var button2 = document.querySelector("#buttonSecond");
var button3 = document.querySelector("#buttonThird");
var button4 = document.querySelector("#buttonFourth");
var clock = document.querySelector("#timer");
var scores = document.querySelector("#pills-home-tab")
var corrected = document.querySelector("#correction");

var correctAnswers = 0;
var clicks = 0;
var time = 20;



 

function finale() {
    correction.style.visibility ="hidden";
    options.style.visibility = "hidden";
    Quest.textContent = "Test is Over! " + "You answerd correctly " + correctAnswers + " times!";
}


// Creating a function that receives a string with a reference to the question and displays.
function displayQuestion(question) {
    Quest.textContent = question.ask;
    button1.textContent = question.option1;
    button2.textContent = question.option2;
    button3.textContent = question.option3;
    button4.textContent = question.option4;
    
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", leggi);}
}

function leggi() {
    
    console.log(this.textContent);
    console.log(questions[clicks].correct)
    if(this.textContent === questions[clicks].correct)
    {
        correctAnswers++;
        correction.style.visibility ="visible";
        correction.textContent = "Correct!";
    }
    else
    {
        correction.style.visibility ="visible";
        correction.textContent = "Wrong!!";  
    }

    if(clicks === questions.length-1)
    {
        finale();
    }
    else
    {console.log(clicks);
    displayQuestion(questions[++clicks]);
    console.log(clicks);}
}

// Creating the event Listeners for each button

start.addEventListener("click", function(){

    clock.textContent= time;
    setInterval(function(){ 
        time--;
        clock.textContent= time;
        if (time === 0)
        {
            clearInterval();
            // finale2();
        }
    }, 1000);
    correctAnswers = 0;
    clicks = 0;
    start.remove();
    Quest.style.visibility = "visible";
    options.style.visibility = "visible";
    
    displayQuestion(questions[clicks]);
    
})

