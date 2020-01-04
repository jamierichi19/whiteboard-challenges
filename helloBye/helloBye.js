function sayHelloBye(name, num) {
	const upper = name.charAt(0).toUpperCase() + name.substring(1);
	if(num === 1){
		return 'Hello ' + upper 
	} else {
		return 'Bye ' + upper
	}
}

console.log('*** Testing sayHelloBye:')
console.log(`sayHelloBye("alon", 1) expected: "Hello Alon" , actual: `, sayHelloBye("alon", 1));
console.log(`sayHelloBye("Tomi", 0) expected: "Bye Tomi" , actual: `, sayHelloBye("Tomi", 0));
console.log(`sayHelloBye("jose", 0) expected: "Bye Jose", actual: `, sayHelloBye("jose", 0));

 
 
 