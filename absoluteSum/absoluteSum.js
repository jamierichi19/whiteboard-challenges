function getAbsSum(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += Math.abs(arr[i])
	}
	return sum;
}

console.log('*** Testing getAbsSum:')
console.log(`getAbsSum([2, -1, 4, 8, 10]) expected: 25 , actual: `, getAbsSum([2, -1, 4, 8, 10]));
console.log(`getAbsSum([-3, -4, -10, -2, -3]) expected: 22 , actual: `, getAbsSum([-3, -4, -10, -2, -3]));
console.log(`getAbsSum([2, 4, 6, 8, 10]) expected: 30 , actual: `, getAbsSum([2, 4, 6, 8, 10]));
console.log(`getAbsSum([-1]) expected: 1 , actual: `, getAbsSum([-1]));
