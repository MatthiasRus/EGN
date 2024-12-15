function curry(f){
    return function (a){
        return function (b){
           return f(a,b)
        }
    }
}

function sum(a,b){
    return a+b;
}

let curriedSum = curry(sum)

console.log(curriedSum(1)(2))


function letsCurry(curriedFunction){
    return function(firstParam){
        return function(secondParam){
            return function(thirdParam){
                return curriedFunction(firstParam,secondParam,thirdParam);
            }
        }
    }
}

function withThreeParam(a,b,c){
    return a * b + c;
}

function showingReusabilityOfCurry(a,b,c){
    return a +" "  + b + " " + c;
}
let createCurriedFunction = letsCurry(withThreeParam);
let reusableCurry = letsCurry(showingReusabilityOfCurry);

console.log(createCurriedFunction(2)(6)(3));
console.log(reusableCurry("Matthias")("Simon")("Bowen"))

// curry advanced 

function curryTwo(func){

    return function curried(...args){
        if (args.length >= func.length){
            return func.apply(this,args);
        }else{
            return function (...args2){
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

let newCurry = curryTwo(withThreeParam);
console.log(newCurry(1,2))
