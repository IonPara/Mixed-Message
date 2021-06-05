const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

let joke = ["Knock Knock.","Who's there?"];

let answer = ['Tank','Luke','Figs','Annie','Cow says','Woo'];

const randomJoke = (array) => {
    let randomAnswer = array[randomNumber(array.length)];
    switch(randomAnswer){
        case 'Tank':
            joke.push("Tank.","Tank who?","You're welcome.");
        break;
        
        case 'Luke':
            joke.push('Luke.','Luke who?','Luke through the peep hole and find out.');
        break;
        
        case 'Figs':
            joke.push('Figs.','Figs who?',"Figs the doorbell, it's not working!");
        break;
        
        case 'Annie':
            joke.push('Annie.','Annie who?','Annie thing you can do, I can do too!');
        break;
        
        case 'Cow says':
            joke.push('Cow says.','Cow says who?','No, a cow says mooooo!');
        break;
        
        case 'Woo':
            joke.push('Woo.','Woo who?',"Glad you're excited,too!");
        break;
        
    };
    return joke.join('\n')

};
console.log(randomJoke(answer))