


/*----------------------------------------------------------
						VARIABLES
 ---------------------------------------------------------*/
													
var userString;
var inputElement = document.getElementById("input");
var outputElement = document.getElementById("output");
console.log(outputElement);


/*----------------------------------------------------------
					PAGE RESPONSIVENESS
 ---------------------------------------------------------*/

inputElement.addEventListener("keyup", function(event){
	userString = inputElement.value;	
	// console.log(event);
	if (inputElement.value.match(/\d/)){
		alert("No numbers, plz");
		userString = "";
		inputElement.value = "";
	}
	if (event.key === "Enter"){
		palindrome(userString);
		if (userString === "reversal"){
			reversal(userString);
		}
		else if (userString === "alphabits"){
			alphabits(userString);
		}
	}
	// console.log(userString);
});



/*----------------------------------------------------------
						FUNCTIONS
 ---------------------------------------------------------*/

function reversal(string) {
	var reversed = string.split(' ');

	//using forEach()
	// reversed.forEach( function(item, index) {
	// 	scoop = item.split('').reverse().join('');
	// });
	// console.log(scoop);

	// using map()
	reversed = reversed.map(function (word){
		return word.split('').reverse().join('');
	});

	outputElement.innerHTML += `${reversed}<br>`;
}

function alphabits(string) {
	var alphaSort = string.split('');	
	alphaSort = alphaSort.sort();

	outputElement.innerHTML += `${alphaSort}<br>`;
}

function palindrome(string) {
	var palindromeTest = string.split('');
	var length = palindromeTest.length;
	// console.log('is odd?', length, 'divided by 2 =', length % 2);
	if (length % 2 !== 0) {
 		palindromeTest.splice(Math.floor(length / 2), 1);
		length = palindromeTest.length;
	}
	
	var firstHalf = palindromeTest.slice(0, Math.ceil(length / 2));
	console.log("first half", firstHalf);
	var secondHalf = palindromeTest.splice(Math.ceil(length / 2));
	console.log("secondhalf", secondHalf);

	if (firstHalf.join('') === secondHalf.reverse().join('')) {
		alert('palindrome!');
		outputElement.innerHTML += `${userString} is a palindrome!<br>`;
	}
}
