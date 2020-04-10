document.getElementById("aggre").style.display="none";
document.getElementById("go").style.display="none";
document.getElementById("calculate").onclick = function(){ calculateAggregate();};	
function calculateAggregate(){
var marks1=document.getElementById("marks1").value;
var marks2=document.getElementById("marks2").value;
if (marks1 === "" || marks2 == 0){
window.alert("Please Enter valid values");
return;
}
if (marks1 <=0 || marks2 ===""){
document.getElementById("go").style.display="none";
}
else{
document.getElementById("go").style.display="block";
}
var total=(((marks1*70)/1100)+((marks2*30)/400));
total=total.toFixed(3);
document.getElementById("aggre").style.display="block";
document.getElementById("go").innerHTML = total;
}
	
