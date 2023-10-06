/* 
 * strict : ["error","global"] 
 */
'use strict';
/**
 * semi: ["error","always"], 
 * no-extra-semi:"error", 
 * semi-spacing:"error"
 * multiline-comment-style:["error","starred-block"]
 * spaced-comment : "error"
 * indent : "error"
 */
console.log("Global Log");


/* 
 * space-before-function-paren : ["error", {"anonymous":"always","name":"never","asyncArrow":"always"}]
 * brace-style:"error" 
 * arrow-spacing : "error"
 * space-infix-ops :"error" 
 * space-before-blocks : "error"
 * keyword-spacing : "error"
 */
const arrowFunDemo = () => {
    const a = 2; 
    if ( a == 2 ) {
        console.log('arrow function log');
    } else {
        console.log("arrow function log false");
    }
    
};


/* 
 * space-before-function-paren : ["error", {"anonymous":"always","name":"never","asyncArrow":"always"}]
 * brace-style:"error" 
 * array-bracket-spacing :["error","nerver"]
 * comma-style : ["error", "last"]
 * comma-dangle : ["error", "always-multiline"]
 */
function demoFun() { 
    const a = 4 + 5;
    const arrayA = ["apple", 1, 101];
    const objectA = {
        "name": "Apple",
        "type": "fruit",
    };
    console.log("Hello there",a,arrayA,objectA);
}


/* 
 * keyword-spacing : "error"
 * space-before-function-paren : ["error",{"anonymous":"always", "named": "never", "asyncArrow":"always"}]
 * semi : ["error","always"]
 * no-extra-semi : "error"
 * semi-spacing : "error"
 * newline-per-chained-call : "error"
 */  
function chainedFuncDemo() {
    fetch('https://google.com')
        .then((data) => {
            console.log("Sucess Response 1", typeof(data));
        })
        .then(() => {
            console.log("Success Response 2 Block");
        })
        .catch((err) => {
            console.log(err);
        });
}


/*
 * semi: ["error","always"] 
 * no-extra-semi:"error" 
 * semi-spacing:"error"
 * multiline-comment-style : ["error", "starred-block"]
 */
demoFun(); 
arrowFunDemo(); 
chainedFuncDemo();

