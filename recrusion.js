function countdown(n){
    console.log(n);
    let newn=n-1;
    if(newn>0){
        countdown(newn);
    }
}
countdown(4);

function print(n){
    // console.log(n);
    let newno=n+1;
    if(n<10){
        print(newno);
    }
    console.log(n);
}
print(1);

function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));

function fibonacci(n){
    if(n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
let n=6;
for(let i=0;i<=n;i++){
console.log(fibonacci(i));
}