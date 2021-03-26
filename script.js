$(document).ready(function(){
    var magic8Ball = {};
    magic8Ball.answers = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don’t count on it.', 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.', 'Yes.', 'Yes – definitely.' ,'You may rely on it.'];
    $("#answer").hide();
    
    magic8Ball.output = function (question) {
        var index = Math.floor(Math.random()*this.answers.length);
        var answer = this.answers[index];
        $("#answer").fadeIn(4000);
        $("#answer").text(answer);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    };
        
    var onClick = function () {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout(function(){
            var question = prompt("ASK A YES/NO QUESTION!");
			$("#8ball").effect("shake");
            magic8Ball.output(question);
        }, 500);
    };
        
    $("#questionButton").click(onClick);
    });