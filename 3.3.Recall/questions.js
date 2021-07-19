let selectElementsStartingWithA = (array) => {
    return array.filter((word) => word.startsWith("a"));
    
    return 'Write your method here';
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
    return 'Write your method here';
}

let removeNullElements = (array) => {
    
    return array.filter(function(val) {
        return val !== null;
    })
}

let removeNullAndFalseElements = (array) => {
return array.filter((elem) => elem || elem === 0);
}

let reverseWordsInArray = (array) => {
    return array.map((elem) => {
        return elem.split("").reverse().join("");
    });
  
}

let everyPossiblePair = (array) => {
    return array
     .sort()
    .map((elem, i) => {
      if (i === array.length - 1) {
        return [array[i], array[0]];
      } else {
        return [array[i], array[i + 1]];
      }
    })
    .map((elem) => elem.sort())
    .sort();
}
let allElementsExceptFirstThree = (array) => {
   return array.slice(3);
}

let addElementToBeginning = (array, element) => {
   array.unshift(element);
   return array;
}

let sortByLastLetter = (array) => {
   return array.sort(
     (a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
   );
}

let getFirstHalf = (string) => {
   return string.slice(0, Math.round(string.length /2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(
        (element) => element === element.split("").reverse().join("")
    );
}

let shortestWord = (array) => {
    return array.reduce((a,b) =>(a.length <= b.length ? a : b));
}

let longestWord = (array) => {
    return array.reduce((a,b) => (a.length < b.length ? b : a), "");
}

let sumNumbers = (array) => {
    return array.reduce((a,b) => a + b, 0);
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => a + b,0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,6);
}

let convertArrayToObject = (array) => {
    return
}

let getAllLetters = (array) => {
    return [... new Set(array)].join("").split("").sort();
}

let swapKeysAndValues = (object) => {
    return Object.assign(
        {},
        ...Object.entries(object).map(([a,b]) => ({ [b] : a}))
    );
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
