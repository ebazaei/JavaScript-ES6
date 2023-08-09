let divStage1 = document.getElementById('stage1');
let stageFor = document.getElementById('stageFor');
let stageForIn = document.getElementById('stageForIn');
let stageForOf = document.getElementById('stageForOf');


//ES6 - LOOP
let loopArr = [1,2,3,4,5,'test','x'];
let loopObject = {Name:'Ahmad' ,city:'Shiraz' ,Country:'Iran' };
let textArr = "";
let textArr2 = "";
let textObj = "";
let textFor = "";



//for...of : Array
for(let i of loopArr){
    textArr = textArr + "  " + i;
}
stageForOf.innerHTML = textArr;


//for...in : Onject
for(let i in loopObject){
    textObj += loopObject[i] + "  " ;
}
stageForIn.innerHTML = textObj;



//An example of for...of: Array
// Calculation of numbers greater than 50
let scores = [10,900,70,4,100,76];
var numst = 0;
var total = 0;
for (let i of scores){
    if(i > 50){
        total += 1;
    };
    numst+=1;
}
console.log(total);



//for 
for(i=0;i<loopArr.length;i++){
    textFor = textFor + "  " + loopArr[i];
}
stageFor.innerHTML = textFor;








//ES6 - Template Literal
//String by `Backtick`

let name = 'Ehsan';
let favColor = 'Blue';
let msg = `  Name:  ${name}  - Color: \' ${favColor} \'`;

divStage1.innerHTML = msg;




