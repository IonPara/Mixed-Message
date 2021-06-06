const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

let joke = ["Knock Knock.","Who's there?"];

let answer = ['Tank','Luke','Figs','Annie','Cow says','Woo'];
// Create a function which generates a random joke 
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
    return `Your joke right now is: \n ${joke.join('\n')}`;

};

 
const characterMessage = {
    character: ['Joker','Clown','Harley Quinn','Funny Monkey','Aunt Funny','Donkey from Shrek'],
    sentence:  ['funny day','smiley day','big laugh',' day full of jokes','happy day']
};

let randomMessage = [];

for(let i in characterMessage){
  let randomIndex = randomNumber(characterMessage[i].length);
  if( i === 'character') {
      randomMessage.push(`Your character right now is "${characterMessage[i][randomIndex]}"`)
    } else  {
      randomMessage.push(`You will have a  "${characterMessage[i][randomIndex]}"`)
    };
};

const messageAndJoke = () => {
return(randomMessage.join('\n') + '\n' + randomJoke(answer))
}

console.log(messageAndJoke());
