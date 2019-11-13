const brain = require('brain.js');

const network = new brain.NeuralNetwork();

//training data 
// network.train([
//     {input: [0,0,0], output: [0]},
//     {input: [0,0,1], output: [0]},
//     {input: [0,1,1], output: [0]},
//     {input: [1,0,1], output: [1]},
//     {input: [1,1,1], output: [1]}
// ]);

//2nd set training data 
network.train([
    {input: [1,2], output: [1]}, //Team 1 loose
    {input: [1,3], output: [1]}, //Team 1 loose
    {input: [2,3], output: [0]}, //Team 3 loose
    {input: [2,4], output: [1]},//Team 2 loose
    {input: [1,2], output: [0]},//Team 2 loose
    {input: [1,3], output: [0]},//Team 3 loose
    {input: [3,4], output: [0]}//Team 4 loose
    
    
]);

const output = network.run([1,4]) //network will predict [1,4]'s output 
console.log(`Prob: ${output}`) //0.49-> 49% chance outout will be a 1 ---> 49% chance team 1 loose