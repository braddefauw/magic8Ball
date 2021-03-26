$(document).ready(function(){
    var magic8Ball = {};
    magic8Ball.answers = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don’t count on it.', 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.', 'Yes.', 'Yes – definitely.' ,'You may rely on it.'];
    
    magic8Ball.question = function (question) {
        var index = Math.floor(Math.random()*this.answers.length);
        var answer = this.answers[index];
        console.log("Your question is: " + question + " and your answer is...: " + answer);
    };
});