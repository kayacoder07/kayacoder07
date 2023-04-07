var up = document.getElementById('up');
var down = document.getElementById('down');
var showKilo = document.getElementById('showKilo');
var kilo = 0
function addKilo(){
	kilo+=1;
	if (kilo>=10){
		kilo =10;
	}
	showKilo.innerText=kilo +" Kg";
	if(kilo==8){
		alert("abey gadhey itna kha lega ?")
	}
	
}

function subtractKilo(){
	kilo-=1;
	if(kilo<=0){
		alert("abey pagal hogya hai kya ?")
	}
	if (kilo<0){
		kilo =0;
	}

	showKilo.innerText=kilo+" Kg";
}

up.addEventListener('click',addKilo);
down.addEventListener('click',subtractKilo);