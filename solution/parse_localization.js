// Erstelle eine Funktion, welche als Parameter nachfolgenden "input" erhält.
// Das Ergebnis aus der Funktion soll dem nachfolgendem "output" entsprechen.

// expected input
//[{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}]

//expected output
//{ text: "hallo", i18n: { cz: { "text": "Ahoy"}, nl: { "text": "Hey"}} }

let input = [{ de: "hallo" }, { cz: "Ahoj" }, { nl: "Hey" }];

console.log(parseLocalization(input));

/* -------------------------------------- */
function parseLocalization(aSource) {
  const result = {};

  result.text = aSource[0].de;
  result.i18n = {};

  for (let i = 1; i < aSource.length; i++) {
    result.i18n[Object.keys(aSource[i])] = {
      text: aSource[i][Object.keys(aSource[i])],
    };
  }

  return result;
}
