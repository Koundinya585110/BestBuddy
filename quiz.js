const questions =[
    {
        question:"What is my Favourite Colour Combination ?",
        option1:"Blue & Red",
        option2:"Black & White",
        option3:"Red & Orange",
        option4:"Yellow & Black",
        option5:"None of the above",
        correctAnswer:"Yellow & Black",
    },
    {
        question:"What is my time to Watch TV ?",
        option1:"11-12",
        option2:"8-9",
        option3:"9:30-11",
        option4:"1-2:30",
        option5:"Always",
        correctAnswer:"1-2:30",
    },
    {
        question:"What is my Favourite Food ?",
        option1:"Biryani",
        option2:"Fried Rice",
        option3:"Dal Rice",
        option4:"Ice Cream",
        option5:"Everything",
        correctAnswer:"Fried Rice",
    },
    {
        question:"What is my NickName ?",
        option1:"Buddy",
        option2:"Lucky",
        option3:"Candy",
        option4:"Bunny",
        option5:"None",
        correctAnswer:"Lucky",
    },
    {
        question:"What is my Favourite Car ?",
        option1:"BMW",
        option2:"Rolls Royce",
        option3:"Benz",
        option4:"Bugatti",
        option5:"Toyota",
        correctAnswer:"Benz",
    },
    {
        question:"What is my Favourite Place To Visit ?",
        option1:"Niagara Falls",
        option2:"London, England",
        option3:"Barcelona, Spain",
        option4:"Palawan Island, Philippines",
        option5:"Home",
        correctAnswer:"Home",
    },
    {
        question:"What is my Favourite Cricketer ?",
        option1:"Kholi",
        option2:"Dhoni",
        option3:"Sachin",
        option4:"Kapil Dev",
        option5:"Hate Cricket",
        correctAnswer:"Dhoni",
    },
]    
var question = document.getElementById("question");
var opt1 =document.getElementById("option1");
var opt2 =document.getElementById("option2");
var opt3 =document.getElementById("option3");
var opt4 =document.getElementById("option4");
var opt5 =document.getElementById("option5");
var next = document.getElementById("next");
var totalScore = document.getElementById("score");

var i=1;
var cmnt=0;
var score=0;
var count=0;

function load(){
    question.innerHTML=questions[count].question;
    opt1.innerHTML=questions[count].option1;
    opt2.innerHTML=questions[count].option2;
    opt3.innerHTML=questions[count].option3;
    opt4.innerHTML=questions[count].option4;
    opt5.innerHTML=questions[count].option5;

    opt1.onclick=()=>{
        if(i>7){
            opt1.disable=true;
        }
        if(questions[count].option1===questions[count].correctAnswer){
            score++;
        }
        i++;
    };
    opt2.onclick=()=>{
        if(i>7){
            opt2.disable=true;
        }
        if(questions[count].option2===questions[count].correctAnswer){
            score++;
        }
        i++;
    };
    opt3.onclick=()=>{
        if(i>7){
            opt3.disable=true;
        }
        if(questions[count].option3===questions[count].correctAnswer){
            score++;
        }
        i++;
    };
    opt4.onclick=()=>{
        if(i>7){
            opt4.disable=true;
        }
        if(questions[count].option4===questions[count].correctAnswer){
            score++;
        }
        i++;
    };
    opt5.onclick=()=>{
        if(i>7){
            opt5.disable=true;
        }
        if(questions[count].option5===questions[count].correctAnswer){
            score++;
        }
        i++;
    };
    next.onclick=()=>{
        if(i>7){
            next.disable=true;
            totalScore.innerHTML="Your score out of 7 is"+score+"<br>"+"I think you are good friend of mine !"+"<br>"+"Send me the Score to Me in WhatsApp";
        }
        else{
            count++;
            load();
        }
    }
}
load();
