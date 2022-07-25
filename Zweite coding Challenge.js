function parseLocalisation(source) {
    const i18n = {};
    source.forEach(source => {
    const aKeys = Object.keys(source);
    i18n[aKeys[0]] = {text: source[aKeys[0]]};
  })
    const result = {text: i18n.de.text, i18n: i18n};
  delete i18n.de;
  return result;
}
// #### Ulrich Siebert



     parseLocalisation(key: string, properties: string[]): II18nProperty {
        const phrasesMap: Object[] = [];
        const result: II18nProperty = {};
        for (let property of properties) {
            //TODO
            //let phraseMap = this.localisationService.translateLocales(this.i18nPhrase(i18nKey, property));
            for (let phrase of phrasesMap) {
                for (let languageKey in phrase) {
                    if (languageKey === this.localisationService.getCurrentLocale()) {
                        // store current language in class attributes (root)
                        if (this.hasOwnProperty(property)) {
                            this[property] = phrase[languageKey];
                        }
                    } else {
                        // store different language in i18n property (child of root)
                        if (!result[languageKey]) {
                            result[languageKey] = {};
                        }
                        result[languageKey][property] = phrase[languageKey];
                    }
                }
            }
        }
        return result;
    }
// ### Simon Gaudek

// let input = [{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}];
console.log(parseLocalisation(input));
/* -------------------------------------- */
function parseLocalisation(source) {
    const local = "de";
    const result = {
    text : "",
    i18n : {}
  }
  source.forEach(s => {
    key = Object.keys(s)[0];
    text = s[key];
    if(key === local) {
        result.text = text; 
    } else {
      result.i18n[key] =  {text: text}
    }
  });
    return result;
}

// ## Daniel Zauner


// Das Ergebnis aus der Funktion soll dem nachfolgendem "output" entsprechen.
// expected input:
//[{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}]
//
// expected output:
//{ text: "hallo", i18n: { cz: { "text": "Ahoy"}, nl: { "text": "Hey"}} }
const local = "de";
let input = [{de: "hallo"}, {cz: "Ahoj"}, {nl: "Hey"}];
console.log(parseLocalisation(input));
/* -------------------------------------- */
function parseLocalisation(source) {
    const languObj = {};
  source.forEach((entry) => {Object.entries(entry).forEach(([key, msg]) => {languObj[key] = {text: msg}})});
    // Alternative
  // source.forEach((entry) => {
  //    const [key, msg] = Object.entries(entry)[0]
  //   languObj[key] = {text: msg};
  // });
  const defaultText = languObj[local] ? languObj[local].text : ""
  delete languObj[local];
    const result = {
    text: defaultText,
    i18n: languObj
  };
    return result;
}
// ### Florian Fechter

//  Kleine Coding-Challenge, weil ich mit meiner eigenen Methode noch nicht zufrieden bin  
// Natürlich darf auch jeder andere teilnehmen. Siehe https://jsfiddle.net/uL111/h29sqv8L/4/ Spoiler zur aktuellen Umsetzung: