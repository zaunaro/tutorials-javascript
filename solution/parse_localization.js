// Erstelle eine Funktion, welche als Parameter nachfolgenden "input" erhält.
// Das Ergebnis aus der Funktion soll dem nachfolgendem "output" entsprechen.

// expected input
//[{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}]

//expected output
//{ text: "hallo", i18n: { cz: { "text": "Ahoy"}, nl: { "text": "Hey"}} }

let aInput = [{ de: "hallo" }, { cz: "Ahoj" }, { nl: "Hey" }];

console.log(parseLocalization(aInput));

/* -------------------------------------- */
function parseLocalization(aSource) {
  const oResult = { text: "", i18n: {} };

  for (const source of aSource) {
    if (Object.keys(source) == "de") {
      oResult.text = Object.keys(source).toString();
    } else {
      oResult.i18n[Object.keys(source)] = {
        text: source[Object.keys(source)],
      };
    }
  }

  aSource.forEach(source => {
    const sKey = Object.keys(source)[0];
    const sText = source[sKey]
    if (sKey == "de") {
      oResult.text = sText;
    } else {
      oResult.i18n[sKey] = { text: source[sKey] };
    }
  });

  return oResult;
}
