// erstelle eine funktion, welche als paramenter nachfolgenden "input" erhält.
// Das Ergebnis aus der Funktion soll dem nachfolgendem "output" entsprechen.

// expected input
//[{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}]

//expected output
//{ text: "hallo", i18n: { cz: { "text": "Ahoy"}, nl: { "text": "Hey"}} }


let input = [{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}];
console.log(parseLocalisation(input));


/* -------------------------------------- */
function parseLocalisation(source) {
	const result = {};

	// do your magic

	return result;
}