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
  const result = { text: "", i18n: {} };

  for (const source of aSource) {
    if (Object.keys(source) == "de") {
      result.text = Object.keys(source).toString();
    } else {
      result.i18n[Object.keys(source)] = {
        text: source[Object.keys(source)],
      };
    }
  }

  return result;
}
