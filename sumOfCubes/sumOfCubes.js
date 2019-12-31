function sumOfCubes(nums) {
	let sum = 0;
	for(i in nums){
		sum+=nums[i]*nums[i]*nums[i];
	}
	return sum;
}

console.log('*** Testing sumOfCubes:')
console.log(`sumOfCubes([1, 5, 9]) expected: 855 , actual: `, sumOfCubes([1, 5, 9]));
console.log(`sumOfCubes([3, 4, 5])) expected: 216 , actual: `, sumOfCubes([3, 4, 5]));
console.log(`sumOfCubes([2]) expected: 8 , actual: `, sumOfCubes([2]));
console.log(`sumOfCubes([]) expected: 0 , actual: `, sumOfCubes([]));