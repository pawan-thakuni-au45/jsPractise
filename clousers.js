
// function x(){
// var b=10;
//     function y(){
//         console.log(b);
//     }
//     y()
// }
// x()

function z(){
    var a=10;
    function x(){
        var b=20;
        function y(){
            console.log(a,b);
        }
        y()
    }
    x()
}
z()