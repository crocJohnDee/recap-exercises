// # Strings, Arrays, Objects
// ## Print all your results to the console. 

// ### Strings 
// 1. Write a program to check whether `JavaScript` is a string or not.
const word = "Javascript";
const isString = input => typeof input === "string";
console.log(isString(word));

// 2. Write a program to check whether a string is empty or not.
const isEmpty = str => str.length === 0;
console.log(isEmpty(""));

// 3. Write a program to convert a string in abbreviated form. E.g. John Smith -> John S. 
const abbreviated = fullName => `${fullName.split(" ")[0]} ${fullName.split(" ")[1][0]}.`


console.log(abbreviated("John Smith"));

// 4. Write a program to hide email addresses to protect from unauthorized user.
// E.g. "john_smith@example.com" -> "john...@example.com"
const hideEmail = str => {
    splitMail = str.split("@");
    return `${splitMail[0].substr(0, 4)}...@${splitMail[1]}`
}
console.log(hideEmail("john_smith@example.com"));

// 5. Write a program to change a string to the following format:
// E.g. John Smith from Berlin -> john-smith-from-berlin. 
const replaceSpace = str => str.replace(/ /g, "-");
console.log(replaceSpace("John Smith from Berlin"));

// 6. Write a program to convert a string into camel case.
// E.g. "john smith" -> "johnSmith"
const camelCase = name => {
    let splitNames = name.split(" ");
    let firstName = splitNames[0].charAt(0).toLowerCase() + splitNames[0].slice(1);
    let lastName = splitNames[1].charAt(0).toUpperCase() + splitNames[1].slice(1);
    return `${firstName}${lastName}`
}
console.log(camelCase("John Smith"));

// 7. Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)
const ordinal = num => {
    let tens = num % 10;
    let hundreds = num % 100;
    if (tens == 1 && hundreds != 11) {
        return num + "st";
    }
    if (tens == 2 && hundreds != 12) {
        return num + "nd";
    }
    if (tens == 3 && hundreds != 13) {
        return num + "rd";
    }
    return num + "th";
}

console.log(ordinal(11));

// 8. Declare a variable and sort the characters into alphabetical order. 
let lazyStr = ["fwfw", "wefew", "werwe", "ads", "fgzju", "mzrw", "ztutz", "pkz", "gjzu", "wqdsd", "adwqd"]
let sortedArr = arr => arr.sort();

console.log(sortedArr(lazyStr));

// 9. Write a program that takes a number (1-60) and returns a corresponding string of hyphens.
// Examples:
// (1) ➞ "-"
// (5) ➞ "-----"
// (3) ➞ "---"


const monsterPhens = num => num > 0 && num <= 60 ?
    [...Array(num).keys()].map(x => "-").join("") : "Please chose a number between 1 and 60";


console.log(monsterPhens(40));

// ### Arrays

// 1. Leap Years
// Write a program which finds the leap years in a given range of years.
const getLeapYears = (start, end) => {
    let numArr = [];
    for (start; start <= end; start++) {
        numArr.push(start);
    }
    return numArr.filter(x => x % 4 === 0 && (x % 100 !== 0 || x % 400 === 0));
}
console.log(getLeapYears(1222, 1900));

// 2. First & Last
// Write a program that takes an array and returns the first and last elements as a new array.

// Expected Output:
// [5, 10, 15, 20, 25] ➞ [5, 25]
// ["javascript", 13, null, false, true] ➞ ["javascript", true]
// [undefined, 4, "6", "hello", null] ➞ [undefined, null]

const myArray = ["javascript", 13, null, false, true];

const getFirstAndLast = arr => [arr[0], arr[arr.length - 1]];

console.log(getFirstAndLast(myArray));


// 3. Find the Smallest Number
// Write a program that takes an array of numbers and returns the smallest number in the set.

// E.g
// [34, 15, 88, 2] ➞ 2
// [34, -345, -1, 100] ➞ -345
// [-76, 1.345, 1, 0] ➞ -76
// [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
// [7, 7, 7] ➞ 7
const lowest = num => Math.min(...num);

console.log(lowest([0.4356, 0.8795, 0.5435, -0.9999]));

// 4. Return Student Names
// Write a program that takes an array of students and returns an array of student names.
// Example:
// [ { name: "Steve"},
//   { name: "Mike"},
//   { name: "John"}
// ]

// ➞ ["Steve", "Mike", "John"]
const names =
    [
        { name: "Steve", age: 23 },
        { name: "Mike", age: 56 },
        { name: "John", age: 43 }
    ]

const values = obj => obj.map(x => [x.name, x.age]);

console.log(values(names));


// 5. Spell it out
// Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// E.g.
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]
const spellWord = str => {
    wordArr = str.split("");
    spelledArr = [""];

    for (let i = 0; i < wordArr.length; i++) {
        spelledArr.push(spelledArr[i] += wordArr[i])
    }

    spelledArr.pop();
    return spelledArr;
}

console.log(spellWord("beeuiufopowfuh"));

// ### Objects 

// 1. Write a program to list the properties of an object. 

const student = {
    firstName: "Vikram",
    lastName: "Patel",
    class: 12
};
// Expected Output: firstName, lastName, class

const studentKeys = obj => Object.keys(obj).join().replace(/,/g, ", ");
console.log(studentKeys(student));


// 2. Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "Vikram Patel is a 41 year old engineer living in Mumbai". 
const person = {
    firstName: "Jack",
    lastName: "Sparrow",
    age: 37,
    job: "pirat",
    city: "moscow"
}

console.log(`${person.firstName} ${person.lastName} is a ${person.age} year old ${person.job} in ${person.city}`);

// 3. Write a JavaScript program to delete the "class" property (or last property) from the previous object.
delete person.city;

// 4. Write a program to get the length of a JavaScript object.
const objLength = Object.keys(person).length;
console.log(objLength);


// 5. Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [
    {
        author: 'Jean Genet',
        title: 'Funeral Rites',
        readingStatus: true
    },
    {
        author: 'JG Ballard',
        title: 'Crash',
        readingStatus: true
    },
    {
        author: 'B.Catling',
        title: 'The Erstwhile',
        readingStatus: false
    }];

// E.g. Output: 

// Already read Funeral Rites by Jean Genet

// Already read Crash by JG Ballard

// You still need to read The Erstwhile by B.Catling
const haveRead = obj => {

    for (let i in library) {
        library[i].readingStatus ?
            console.log(`Already read ${library[i].title} by ${library[i].author}`) :
            console.log(`You still need to read ${library[i].title} by ${library[i].author}`);
    }

}
haveRead(library);
