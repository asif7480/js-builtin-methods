// string functions

const name = "Asif";

console.log(typeof name);

const nameWithStringMethod = new String("A.A.Khan");
console.log(typeof nameWithStringMethod);


console.log(nameWithStringMethod.length);
console.log(nameWithStringMethod.toUpperCase());
console.log(nameWithStringMethod.charAt(0));
console.log(nameWithStringMethod.indexOf('K'));

const newString = nameWithStringMethod.substring(0, 5);
console.log(newString);


const sliceString = nameWithStringMethod.slice(-6, 5);
console.log(sliceString);

const anotherString = "    Asif    ";
const trimString = anotherString.trim();
console.log(anotherString);
console.log(trimString);

const url = "https://www.example.com/ about.html/ example";
console.log(url.replace(' ', '%20'));

const url2 = "https://www.example.com/ about.html/ example";
console.log(url2.replaceAll(' ', '%20'));


console.log(url.includes('https'));

const fancyName = "Asif-Ahmed-Khan";
console.log(fancyName.split('-'));