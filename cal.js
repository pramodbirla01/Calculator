function add() {
     let x=parseInt(document.getElementById("input1").value);
    let y=parseInt(document.getElementById("input2").value);
    var z = x+y;
    document.getElementById("output").innerHTML=z;
    
}
function sub(){
     let x=parseInt(document.getElementById("input1").value);
    let y=parseInt(document.getElementById("input2").value);
    var z = x-y;
    document.getElementById("output").innerHTML=z;
}
function into(){
     let x=parseInt(document.getElementById("input1").value);
    let y=parseInt(document.getElementById("input2").value);
    var z = x*y;
    document.getElementById("output").innerHTML=z;
}
function divide(){
     let x=parseInt(document.getElementById("input1").value);
    let y=parseInt(document.getElementById("input2").value);
    var z = x/y;
    document.getElementById("output").innerHTML=z;
}