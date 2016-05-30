function counter(letter){

	console.log(letter,letter.length);
}

counter("hello world");

//////////////////////
function greeting(name){
	return console.log("hey "+ name + " " + name.length);
}

greeting("joe");

/////////////////

var list = document.getElementById("container");

var listItem = "";

for(var i=0;i<=100;i++){
		listItem += "<li>";

	if(i%3 === 0 && i%5===0){
		listItem += "fizzbuzz";
	}
	else if(i%3 ===0){
		listItem += "fizz";
	}
	else if(i%5 === 0){
		listItem += "buzz";
	}else{
		listItem += i;
	}

		listItem += "</li>"
	}

list.innerHTML += listItem;
///////////
var a;
console.log(a);
//////


function count(num){
var Alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	console.log(Alphabet[num].toString());
}

console.log(count(12));
//////

var data = [];

var reducer = function(accumulator, item){
	return accumulator + item ;
}


var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log(total);







