//factorial***************
function fact(n){
    let facto=1;
    for(let i=1;i<=n;i++){
        facto*=i;
    }
    return facto;
}
console.log(fact(5));

//fibonacci***************
function fib(n){
    let t1=0,t2=1,t3;
    console.log(t1);
    console.log(t2);
    for(let i=2;i<=n;i++){
        t3=t1+t2;
        console.log(t3);
        t1=t2;
        t2=t3;
    }
}
fib(7);