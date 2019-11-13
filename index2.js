const brain = require('brain.js');
const data = require('./data.json');

//recurrent neural network using long short-term memory in
//order to deal w/ strings 
const network = new brain.recurrent.LSTM();

//using json data: input will be text, output will be category
const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 1000  //the maximum times to iterate the training data --> number greater than 0
});

const output = network.run('the code was buggy')

//takes a while to run, be patient 
//output will be 'software' or 'hardware'
console.log(`Category: ${output}`);

