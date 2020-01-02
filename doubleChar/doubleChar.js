function doubleChar(str) {
	let result = [];
	for(let i=0; i < str.length; i++){
		result.push(str[i]);
		result.push(str[i]);
	}
	result = result.join("");
	return result;
}

console.log('*** Testing doubleChar:')
console.log(`doubleChar("String") expected: "SSttrriinngg" , actual: `, doubleChar("String"));
console.log(`doubleChar("Hello World!") expected: "HHeelllloo  WWoorrlldd!!" , actual: `, doubleChar("Hello World!"));
console.log(`ddoubleChar("1234!_ ") expected: "11223344!!__  " , actual: `, doubleChar("1234!_ "));



