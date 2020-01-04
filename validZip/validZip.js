function isValid(zip) {
    let zipCodeRegEx = /^\d{5}$/;
	return zipCodeRegEx.test(zip)
}

console.log('*** Testing isValid:')
console.log(`isValid("59001") expected: true , actual: `, isValid("59001"));
console.log(`isValid("853a7") expected: false , actual: `, isValid("853a7"));
console.log(`isValid("732 32") expected: false , actual: `, isValid("732 32"));
console.log(`isValid("393939") expected: false , actual: `, isValid("393939"));