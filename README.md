# Strings, Arrays, Objects
## Print all your results to the console. 

### Strings 
1. Write a program to check whether `JavaScript` is a string or not.

2. Write a program to check whether a string is empty or not.

3. Write a program to split a string and convert it into an array of words. E.g. text: "I like to walk in the park.

4. Write a program to convert a string in abbreviated form. E.g. John Smith -> John S. 

5. Write a program to hide email addresses to protect from unauthorized user.
E.g. "john_smith@example.com" -> "john...@example.com"

6. Write a program to change a string to the following format:
E.g. John Smith from Berlin -> john-smith-from-berlin. 

7. Write a program to convert a string into camel case.
E.g. "john smith" -> "johnSmith"

8. Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)

9. Declare a variable and sort the characters into alphabetical order. 

10. Write a program that takes a number (1-60) and returns a corresponding string of hyphens.
Examples:
(1) ➞ "-"
(5) ➞ "-----"
(3) ➞ "---"

### Arrays

1. Leap Years
Write a program which finds the leap years in a given range of years.

2. First & Last
Write a program that takes an array and returns the first and last elements as a new array.

Expected Output:
[5, 10, 15, 20, 25] ➞ [5, 25]
["javascript", 13, null, false, true] ➞ ["javascript", true]
[undefined, 4, "6", "hello", null] ➞ [undefined, null]

3. Find the Smallest Number
Write a program that takes an array of numbers and returns the smallest number in the set.

E.g
[34, 15, 88, 2] ➞ 2
[34, -345, -1, 100] ➞ -345
[-76, 1.345, 1, 0] ➞ -76
[0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
[7, 7, 7] ➞ 7

4. Return Student Names
Write a program that takes an array of students and returns an array of student names.
Example:
[ { name: "Steve"},
  { name: "Mike"},
  { name: "John"}
]

➞ ["Steve", "Mike", "John"]

5. Spell it out
Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

E.g.
spelling("bee") ➞ ["b", "be", "bee"]
spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

### Objects 

1. Write a program to list the properties of an object. 
E.g.
const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12 };
Expected Output: firstName, lastName, class

2. Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France". 

3. Write a JavaScript program to delete the "class" property (or last property) from the previous object.

4. Write a program to get the length of a JavaScript object.

5. Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [ 
   {
       author: 'J.K. Rowling',
       title: 'Harry Potter and the Chamber of Secrets',
       readingStatus: true
   },
   {
       author: 'Homer',
       title: 'The Odyssey',
       readingStatus: true
   },
   {
       author: 'Harper Lee',
       title:  'To Kill a Mockingbird', 
       readingStatus: false
   }];
E.g. Output: 
Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
Already read The Odyssey by Homer
You still need to read To Kill a Mockingbird by Harper Lee


