
const aInput = [{ de: "hallo" }, { cz: "Ahoj" }, { nl: "Hey" }];
const local = "de";

/****************************************** Daniel ********************************************************/
function parseLocalization(source, local) {
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

/****************************************** Flo ********************************************************/
// function parseLocalization(source) {
//     const languObj = {};
//   source.forEach((entry) => {Object.entries(entry).forEach(([key, msg]) => {languObj[key] = {text: msg}})});
//   // Alternative
//   // source.forEach((entry) => {
//   //    const [key, msg] = Object.entries(entry)[0]
//   //   languObj[key] = {text: msg};
//   // });
//   const defaultText = languObj[local] ? languObj[local].text : ""
//   delete languObj[local];
//     const result = {
//     text: defaultText,
//     i18n: languObj
//   };
//     return result;
// }

/****************************************** Uli ********************************************************/
// parseLocalization(key: string, properties: string[]): II18nProperty {
//         const phrasesMap: Object[] = [];
//         const result: II18nProperty = {};
//         for (let property of properties) {
//             //let phraseMap = this.localisationService.translateLocales(this.i18nPhrase(i18nKey, property));
//             for (let phrase of phrasesMap) {
//                 for (let languageKey in phrase) {
//                     if (languageKey === this.localisationService.getCurrentLocale()) {
//                         // store current language in class attributes (root)
//                         if (this.hasOwnProperty(property)) {
//                             this[property] = phrase[languageKey];
//                         }
//                     } else {
//                         // store different language in i18n property (child of root)
//                         if (!result[languageKey]) {
//                             result[languageKey] = {};
//                         }
//                         result[languageKey][property] = phrase[languageKey];
//                     }
//                 }
//             }
//         }
//         return result;
//     }

/****************************************** Thomas ********************************************************/
// function parseLocalization(aSource) {
//   const oResult = { text: "", i18n: {} };
//
//   for (const source of aSource) {
//     if (Object.keys(source) == "de") {
//       oResult.text = Object.keys(source).toString();
//     } else {
//       oResult.i18n[Object.keys(source)] = {
//         text: source[Object.keys(source)],
//       };
//     }
//   }
// 
//   aSource.forEach(source => {
//     const sKey = Object.keys(source)[0];
//     const sText = source[sKey]
//     if (sKey == "de") {
//       oResult.text = sText;
//     } else {
//       oResult.i18n[sKey] = { text: source[sKey] };
//     }
//   });
//
//   return oResult;
// }

console.log(parseLocalization(aInput));
