// Exercise 2:
// 
// 1. Create a function which should reorder an array of translations to an object where always the
// first parameter is the german translation and the other ones are stored in the i18n object.
// The parameter could also be changed in the constant below.
//
// 2. Check the performance of your code with jsbench.me
//
// Example 1:
// Input: [{cz: "Ahoj"}, {nl: "Hey"}, {de: "hallo"}]
// Output: { text: "hallo", i18n: { cz: { "text": "Ahoy"}, nl: { "text": "Hey"}} }

const aLocalizations = [{cz: "Ahoj"}, {nl: "Hey"}, {de: "hallo"}];
const local = "de";

function parseLocalisation(aLocalizations, local) {
	// Insert Code Here
}

console.log(parseLocalisation(aLocalizations, local));