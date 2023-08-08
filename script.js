let divStage1 = document.getElementById('stage1');
let divStage2 = document.getElementById('stage2');


//ES6 - LOOP
let loopArr = [1,2,3,9,5,'test',7];
let loopObject = {a:1,b:2,c:3};



var res = "";
for(i=0;i<loopArr.length;i++){
    res = res + "  " + loopArr[i];
}

divStage2.innerHTML = res;



//ES6 - Template Literal
//String by `Backtick`

let name = 'Ehsan';
let favColor = 'Blue';
let msg = `  Name:  ${name}  - Color: \' ${favColor} \'`;

divStage1.innerHTML = msg;




