const string =
  `Hey, this is a playground to repeat all API methods for strings, this is a test string. ` +
  `Please make a copy of this string and paste it into a new variable. ` +
  `Then, use the API methods to manipulate the string. ` +
  `Finally, print the result to the console.`;

// at: obviously does what you think it does
console.log('at: ', string.at(0), typeof string.at(0));

// charAt: same as at, but does not accept negative indices
console.log('charAt: ', string.charAt(0), typeof string.charAt(0));

// charCodeAt: returns UTF-16 code unit (0-65535), does not accept negative indices
console.log('charCodeAt: ', string.charCodeAt(0), typeof string.charCodeAt(0));

// codePointAt: returns Unicode code point (can exceed 65535 for characters outside Basic Multilingual Plane)
// does not accept negative indices
console.log('codePointAt: ', string.codePointAt(0), typeof string.codePointAt(0));

// concat: concatenates given string to the end of current string, but does not mutate original string
const concatString = 'Hello, world!';
console.log('concat: ', concatString.concat(' This is concatenated string.'), 'Result:', concatString);
// can accept multiple arguments: {string1, string2, ...strings} -> string1.concat(string2, ...strings) or string1.concat(...strings)

// endsWith: checks if string ends with given substring
const endsWithString = '!';
console.log(
  `endsWith: '${concatString}' is ending with '${endsWithString}'? -> ${concatString.endsWith(endsWithString)}`,
); // endPosition is optional, setting up end position of a string, so not full string is checked.

// includes: checks if string contains given substring
const includesString = 'Hello';
console.log(
  `includes: '${concatString}' includes '${includesString}'? -> ${concatString.includes(includesString)} starting from position 5? -> ${concatString.includes(includesString, 5)}`,
); // startPosition is optional, setting up start position of a string, so not full string is checked.

// indexOf: returns index of the first occurrence of given substring, starting from given startPosition
const indexOfString = 'world';
console.log(
  `indexOf: '${concatString}' index of '${indexOfString}'? -> ${concatString.indexOf(indexOfString)}, starting from position 5? -> ${concatString.indexOf(indexOfString, 5)}`,
); // startPosition is optional, setting up start position of a string, so not full string is checked.

// isWellFormed: checks if string is well-formed, meaning it is a valid string according to Unicode standard (why would you need this? I have no idea)
const isWellFormedString = 'ab\uD800';
console.log(
  `isWellFormed: '${isWellFormedString}' is well-formed? -> ${isWellFormedString.isWellFormed()}, 'abc' is well-formed? -> ${'abc'.isWellFormed()}`,
);

// lastIndexOf: returns index of the last occurrence of given substring, starting from given startPosition
const lastIndexOfString = 'world';
console.log(
  `lastIndexOf: '${concatString}' last index of '${lastIndexOfString}'? -> ${concatString.lastIndexOf(lastIndexOfString)}, starting from position 5? -> ${concatString.lastIndexOf(lastIndexOfString, 5)}`,
); // startPosition is optional, setting up start position of a string, so not full string is checked.

// length: really i have to explain this?
console.log(`length: '${concatString}' length? -> ${concatString.length}`);

// localeCompare: compares two strings in current locale, returns negative number if first string comes before second, 0 if they are equal, or positive number if first string comes after the second
const localeCompareString = 'hello';
console.log(
  `localeCompare: '${localeCompareString}' compared to '${concatString}'? -> ${localeCompareString.localeCompare(concatString)} (negative = comes before, 0 = equal, positive = comes after)`,
);

// match: returns array of all matching strings with g flag, does not accept negative indices
const matchAllString = 'This is a big world, that is not a small world.';
const matchString = 'world';
console.log(
  `match: '${matchAllString}' match '${matchString}'? -> ${matchAllString.match(new RegExp(matchString, 'g'))} (returns an array)`,
);

// matchAll: returns iterator of match objects (each containing full match, capture groups, index, and input string)
console.log(
  `matchAll: '${matchAllString}' match all '${matchString}'? -> ${matchAllString.matchAll(new RegExp(matchString, 'g'))} (returns an iterator)`,
);

// normalize: returns new string with Unicode Normalization Form C (NFC) applied, does not accept negative indices
const normalizeString1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const normalizeString2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(
  // @ts-ignore
  `normalize: '${normalizeString1}' === '${normalizeString2}'? -> ${normalizeString1 === normalizeString2}, but normalized? -> ${normalizeString1.normalize('NFC') === normalizeString2.normalize('NFC')}`,
); // normalizeString1 and normalizeString2 are different strings, but when normalized they are the same

// padEnd: pads end of string with given string, does not accept negative index
const padEndString = 'Hello';
console.log(`padEnd: '${padEndString}' padded with '${padEndString}'? -> ${padEndString.padEnd(10, '!')}`);

// padStart: pads start of string with given string, does not accept negative index
const padStartString = 'Hello';
console.log(`padStart: '${padStartString}' padded with '${padStartString}'? -> ${padStartString.padStart(10, '!')}`);

// repeat: repeats string a given number of times, does not accept negative index
const repeatString = 'Hello';
console.log(`repeat: '${repeatString}' repeated 3 times? -> ${repeatString.repeat(3)}`);

// replace: replaces first occurrence of given substring with given replacement string, does not accept negative index
const replaceString = 'Hello';
console.log(`replace: '${replaceString}' replaced 'Hello' with 'World'? -> ${replaceString.replace('Hello', 'World')}`);

// replaceAll: replaces all occurrences of given substring with given replacement string, does not accept negative index
const replaceAllString = 'Hello, world! This beautiful hello is for you!';
console.log(
  `replaceAll: '${replaceAllString}' replaced 'Hello' with 'World'? -> ${replaceAllString.replaceAll('Hello', 'World')}`,
);

// search: returns index of the first occurrence of given substring, starting from given startPosition, does not accept negative index
const searchString = 'Hello, world! This beautiful hello is for you!';
console.log(`search: '${searchString}' search 'beautiful'? -> ${searchString.search('beautiful')}}`);

// slice: returns a new string with a given start and end index, does not accept negative index
const sliceString = 'Hello, world! This beautiful hello is for you!';
console.log(`slice: '${sliceString}' sliced from 0 to 5? -> ${sliceString.slice(0, 5)}`);

// split: returns an array of strings by splitting the string at the given separator, does not accept negative index
const splitString = 'Hello, world! This beautiful hello is for you!';
console.log(`split: '${splitString}' split by ' '? -> ${splitString.split(' ')} (returns an array)`);

// startsWith: checks if string starts with given substring, does not accept negative index
const startsWithString = 'Hello, world!';
console.log(`startsWith: '${startsWithString}' starts with 'Hello'? -> ${startsWithString.startsWith('Hello')}`);

// substring: returns a new string with a given start and end index, does not accept negative index
const substringString = 'Hello, world! This beautiful hello is for you!';
console.log(`substring: '${substringString}' substring from 0 to 5? -> ${substringString.substring(0, 5)}`);

// toLocaleLowerCase: returns new string with all characters converted to lowercase in current locale, respects locale-specific rules
const toLocaleLowerCaseString = 'Hello, world!';
console.log(
  `toLocaleLowerCase: '${toLocaleLowerCaseString}' to lowercase? -> ${toLocaleLowerCaseString.toLocaleLowerCase()}`,
);

// toLocaleUpperCase: returns new string with all characters converted to uppercase in current locale, respects locale-specific rules
const toLocaleUpperCaseString = 'Hello, world!';
console.log(
  `toLocaleUpperCase: '${toLocaleUpperCaseString}' to uppercase? -> ${toLocaleUpperCaseString.toLocaleUpperCase()}`,
);

// toLowerCase: returns new string with all characters converted to lowercase using Unicode standard mapping, does not accept negative index
const toLowerCaseString = 'Hello, world!';
console.log(`toLowerCase: '${toLowerCaseString}' to lowercase? -> ${toLowerCaseString.toLowerCase()}`);

// toUpperCase: returns new string with all characters converted to uppercase using Unicode standard mapping, does not accept negative index
const toUpperCaseString = 'Hello, world!';
console.log(`toUpperCase: '${toUpperCaseString}' to uppercase? -> ${toUpperCaseString.toUpperCase()}`);

// toString: returns new string with the same value as the original string, does not accept negative index
const toStringString = 'Hello, world!';
console.log(`toString: '${toStringString}' toString? -> ${toStringString.toString()}`);

// trim: returns new string with the leading and trailing whitespace removed, does not accept negative index
const trimString = '  Hello, world!  ';
console.log(`trim: '${trimString}' trim? -> ${trimString.trim()}`);

// trimEnd: returns new string with the trailing whitespace removed, does not accept negative index
const trimEndString = '  Hello, world!  ';
console.log(`trimEnd: '${trimEndString}' trimEnd? -> ${trimEndString.trimEnd()}`);

// valueOf: returns the primitive value of the string, does not accept negative index
const valueOfString = 'Hello, world!';
console.log(`valueOf: '${valueOfString}' valueOf? -> ${valueOfString.valueOf()}`);
