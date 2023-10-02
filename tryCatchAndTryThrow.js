//w a try.. catch block
/*function addTwoNums(a, b) {
try {
console.log(a+b)

} catch(err) {
//do something here…
	console.log(err)
	console.log('There was an error')
	console.log('The error was saved in the error log')
}
console.log("My program does not stop")
}
addTwoNums(5, "5") */

//if the passed-in arguments are not numbers, throw an error
function addTwoNums(a, b) {
	try {
		if(typeof(a) != 'number') {
			throw new ReferenceError('the first argument is not a number')
		} else if (typeof(b) != 'number') {
			throw new ReferenceError('the second argument is not a numnber')
		} else {
			console.log(a+b)
		} 
		} catch(err) {
			console.log(err)
		}
}
addTwoNums(5, "5")