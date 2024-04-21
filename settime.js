console.log("hello world")

function func(){
    for(i=0;i<3;i++){
    return i*3
    }

}

console.log(setTimeout(func,4000));
console.log('hii after stTimoOut');