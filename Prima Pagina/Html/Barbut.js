n1 = 4
var a =[]

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function  gameBarbut() {
n1 = 4
var a =[]
for(var i = 0 ; i < n1 ; i++)
    a[i] = getRandomArbitrary(1,7) ;

document.getElementById("s1").innerHTML=a[0] + a[1];
document.getElementById("s2").innerHTML=a[2] + a[3];

if( a[0] + a[1] > a[2] + a[3]){
     var element = document.getElementById("id01");
element.innerHTML = "Primul jucator a castigat";
    var element = document.getElementById("id02");
element.innerHTML = "";
}else if( a[0] + a[1] === a[2] + a[3]){
    var element = document.getElementById("id01");
element.innerHTML = "Este remiza";
    var element = document.getElementById("id02");
element.innerHTML = "Este remiza";
}else{
    var element = document.getElementById("id02");
element.innerHTML = "Al doilea jucator a castigat";
    var element = document.getElementById("id01");
element.innerHTML = "";
}
}