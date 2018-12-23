var questions = [{
    ques: "Who invented the first Automobile?",
    ans: ["Henry Ford", "Karl Benz", "Marcel Renault", "Adam Opel"],
    name: "firstCar",
    correct: "Karl Benz",
    divClass: ".firstCar"
},
{
    ques: "What year was the first automobile sold?",
    ans: ["1903", "1883", "1885", "1905"],
    name: "firstProduction",
    correct: "1885",
    divClass: ".firstProduction"
},
{
    ques: "Who invented the pickup truck?",
    ans: ["Chevrolet", "Dodge", "Ford", "Datson"],
    name: "FirstTruck",
    correct: "Ford",
    divClass: ".FirstTruck"
},
{
    ques: "What is the most manufactured car in history?",
    ans: ["Model-T", "VW Bettle", "Honda Accord", "Toyota Corolla"],
    name: "mostMade",
    correct: "Toyota Corolla",
    divClass: ".mostMade"
},
{
    ques: "Who is the largest car manufacturer in the world?",
    ans: ["Volkswagen", "Ford", "GMC", "Toyota"],
    name: "biggist",
    correct: "Volkswagen",
    divClass: ".biggist"
},
{
    ques: "What is the Oldest Car Companies in the World?",
    ans: ["Ford", "Peugeot ", "Tatra", "Opel"],
    name: "oldest",
    correct: "Peugeot",
    divClass: ".oldest"
},
{
    ques: "Which country produces most cars?",
    ans: ["USA", "Japan", "China", "Germany"],
    name: "where",
    correct: "China",
    divClass: ".where"
},
{
    ques: "What is the least expensive new car you can buy today?",
    ans: ["Smart Fortwo", "Mitsubishi Mirage", "Chevrolet Spark", "Nissan Versa"],
    name: "cheapest",
    correct: "Nissan Versa",
    divClass: ".cheapest"
},
{
    ques: "Who makes the most expensive car in the world?",
    ans: ["Lamborghini", "Rolls Royce", "Koenigsegg", "Mclaren"],
    name: "mostExpensive",
    correct: "Rolls Royce",
    divClass: ".mostExpensive"
},
{
    ques: "What car can fly?",
    ans: ["The General Lee", "All of them", "None of them", "depends how big the ramp is"],
    name: "fly",
    correct: "All of them",
    divClass: ".fly"
}
]

// end questions 

var labels = ["first", "second", "third", "forth"];

// click to start game
var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// displays the questions
var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();
    // loops through the questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // radio buttons
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // wrong answers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();


            clearInterval(timer);
            return;
        }
    }, 1000);

    // submit button to stop timer
    $('#sub-but').on('click', function () {
        clearInterval(timer);
    })
};


// score counter
var gradeQuiz = $('#sub-but').on('click', function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    countdown();
    $('.container').fadeOut(500);
    $('#answerScreen').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);
}); 