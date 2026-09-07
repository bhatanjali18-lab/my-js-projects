let add=function (){
console.log(2+3);
}
add()
function runTwice(fun){
  fun();
  fun();
}
runTwice(function(){
  console.log('12b');
});
runTwice(add);