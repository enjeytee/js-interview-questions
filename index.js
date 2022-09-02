// What are the falsey values in JS?
// A value that is considered false when encountered in a Boolean context.
// JS uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.
// A set of unique values that evaluate to false.
// null, undefined, NaN, 0, "", false i.e. []

// What are the differences between const, let, and var
// var      - a variable that is hoisted | "global - no value" (lexical scope)
// let      - a variable that is blocked scoped (bound) to the block that contains it
//          - can be reassigned
// const    - a variable that is blocked scoped (bound) to the block that contains it
//          - value cannot be reassigned (constant)
//          - can be mutated (objects, arrays)

// How does == differ from === ?
// ==       - loose equality | compares values
// ===      - strict equality | compares types & values

// .map() vs .filter() vs. .reduce() - all return a new array
// .map()       - it will give an array with equal length to the original array
//              - modifies existing array
// console.log([1, 2, 3, 4, 5].map(value => value + 1));
// .filter()    - it will only add items to the array that matches the condition of the filter
//              - returns true or false then add or removes and item to the new array
// console.log([1, 2, 3, 4, 5].filter(value => value > 2));
// .reduce()    - can do both .map() and .filter() functions or a combination of the two, more flexible
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, num) => acc + num, 0));
// console.log([1, 2, 3, 4, 5].reduce((acc, num) => {
//     acc.push(num + 1);
//     return acc
// }, []));
// console.log([1, 2, 3, 4, 5].reduce((acc, num) => {
//     if (num > 2) {
//         acc.push(num);
//     };
//     return acc;
// }, []));
// console.log([1, 2, 3, 4, 5].reduce((accumulator, current) => {
//     current = current + 1
//     if (current % 2 === 0) {
//         accumulator.push(current);
//     };
//     return accumulator;
// }, []));

// undefined vs. null
// undefined    - when you use a variable that has not been defined yet
//              - does not exist
// null         - a variable that is empty
//              - has yet to have a value

// What are the Javascript data types?
// Primitive:       strings, numbers, booleans, undefined, null, BigInt, *symbols
// Non-primitive:   objects {}, arrays [], Sets(arrays with unique values), Map(objects with keys that are not just strings)

// What do the spread and rest operators do?
// spread(...)  - spreads the value of an array/objects across zero or more arguments in a function or elements in an array
// const users = ["Dylan", "Per", "Dollan"];
// const allUsers = [...users, "John"];
// console.log(allUsers);
// const user = {
//     name: "John",
//     age: 21
// };
// const user2 = {
//     ...user,
//     country: "Philippines"
// };
// console.log(user2);
// const {name, ...remainder} = user2;
// console.log(name);
// console.log(remainder);
// rest         - allows us to pass an indefinite number of parameters to a function and access them in an array
// const addNums = (...nums) => {
//     return nums.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(addNums(1, 2, 3, 4, 5));

// What is and why might you destructure an object or array?
// Destructuring is unpacking values from arrays, or properties from objects, into distict variables.
// const dob = [10, 4, 1975];
// const [month, day, year] = dob;
// console.log(month);
// const dob2 = {
//     month: "October",
//     day: 4,
//     year: 1975
// }
// const {month: mm, day: dd, year: yyyy } = dob2;
// console.log(mm);
// console.log(dd);
// console.log(yyyy);

// What is Git? Why do you use it? What are some common commands you use?
// Used for version control. 
// create a branch, stage/add, commit -m, pull, update, push

// What is Agile? What is Scrum?
// Agile - process for how we run our software engineering team
// Scrum - a version of Agile

// What are CSS selectors and how do they differ?
// ex. classes (.) - reusable, ids (#)- uniques | non-reusable, pseudoselector (a:hover), pseudoelements (:before/:after)

// What are some issues with number in Javascript you may have to protect against?
// console.log(0.2 + 0.1);
// Use Math.round for example

// The main difference between pass by value and pass by reference is that, in a pass by value, 
// the parameter value copies to another variable while, in a pass by reference, the actual parameter passes to the function.


/// PANGRAM ///

// const isPangram = string => {
//     return [...new Set(string.toLowerCase().split(' ').join(''))].length === 26;
// };
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("abcdA"));
// console.log(isPangram("dog lazy the over jumps fox brown quick The"));

// const abc = 'abcdefghijklmnopqrstuvwxyz'
// const isPangram = (string) => {
//     const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi))
//     return regexMatch.size===26
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("abcdA"));
// console.log(isPangram("dog lazy the over jumps fox brown quick The"));

/// END OF PANGRAM ///


/// API ARRAY METHODS ///

// const getUsers = async () => {
//     const api = 'https://jsonplaceholder.typicode.com/users'
//     const response = await fetch(api)
//     const json = await response.json()
//     const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(({name,email})=>({name,email}))
//     return result
    
// }
// (async function() {
//     try{
//         console.log(await getUsers())   
        
//     }catch(err){
//         console.log(err)
//     }
// })();

// const getUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     const result = data.reduce((acc, curr) => {
//                 if (curr.name.toLowerCase().includes('k')) {
//                     acc.push({name: curr.name, email: curr.email})
//                 }
//                 return acc;
//             }, [])
//     console.log(result);
// }
// getUsers();

/// END OF API ARRAY METHODS ///


/// toRainLanguage ///

// const toRainLanguage = (number) => {
//     let result = ''
//     if (number % 3 === 0) {
//         result += 'Pling'
//     } 
//     if (number % 5 === 0) {
//         result += "Plang"
//     } 
//     if (number % 7 === 0) {
//         result += "Plong"
//     }
//     return result ? result : number

// }
// console.log(toRainLanguage(15)); // PlingPlang
// console.log(toRainLanguage(35)); // PlangPlong
// console.log(toRainLanguage(21)); // PlingPlong
// console.log(toRainLanguage(2)); // 2

/// END OF toRainLanguage ///


/// isIsogram ///

// const isIsogram = string => {
//     return string.split('').length === [...new Set(string.split(''))].length
// }
// console.log(isIsogram('ambidExtRouly')); // true
// console.log(isIsogram('abcdefghijklmnopqrstuvwxyzz')); // false

/// END OF isIsogram ///

/// isLeapYear ///

// const isLeapYear = year => {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             return true
//         } else {
//             return false
//         }
//     } else if (year % 4 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2018));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1600));

/// END OF isLeapYear ///


/// REMOVE DUPLICATES ///

// const removeDuplicates = array => {
//     const result = array.reduce((acc, curr) => {
//         if (!acc.includes(curr)) {
//             acc.push(curr)
//         }
//         return acc
//     }, [])
//     return result
// }
// console.log(removeDuplicates(['one', 'two', 'one', 'three', 'three', 'two']));

/// END OF REMOVE DUPLICATES ///

/// .map() using .reduce() ///

// const map = (array, callback) => {
//     return array.reduce((acc, curr) => {
//         return [...acc, callback(curr)]
//     }, [])
// }
// console.log(map([1, 2, 3], (v) => v +1));

/// END OF .map() using .reduce() ///


/// makeFlat() ///

// const makeFlat = array => {
//     return array.reduce((accumulator,value)=>{
//         return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator,value];
//     },[]);
// };
// console.log(makeFlat(['one', ['two', 'three'],['four', ['five']]]));
// alert(makeFlat(['one', ['two', 'three'],['four', ['five']]]));

/// END OF makeFlat() ///


/// transposeMatrix() ///

// const transposeMatrix = (array) => {
//     return array[0].map((_,i) => array.map(v=>v[i]))
// }
// const transposeMatrix = array => {
//     return array[0]
//         .map((_, index) => array
//             .map((value, _) => value[index]))
// }
// const transposeMatrix2 = array => {
//     return array[0].reduce((accumulator, _, index) => {
//         accumulator.push(array.reduce((acc, cur, _) => {
//             acc.push(cur[index])
//             return acc;
//         }, []))
//         return accumulator;
//     }, []);
// }
// console.log(transposeMatrix2([
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
// ]))

/// END OF transposeMatrix() ///


/// ENCODE / DECODE ///

// const encode = (string)=>{
//     return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`)
// }
// const decode = (string)=>{
//     return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
// }
// console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
// console.log(decode('1u3a4o')) // uuaaaoooo 

// const encode = string => {
//     let result = [];
//     let count = 1;
//     const processedString = string.split('')
//     for (let i = 0; i < processedString.length; i++) {
//         if (processedString[i] === processedString [i+1]) {
//             count++
//         } else {
//             result.push(count);
//             result.push(processedString[i]);
//             count = 1;
//         }
//     }
//     return result.join('');
// }
// const decode = string => {
//     const processString = string.split('');
//     const result = []
//     const counter = []
//     const letter = []
//     let numResult = ''
//     for (let i = 0; i < processString.length; i++) {
//         if (!isNaN(parseInt(processString[i]))) {
//             numResult += processString[i]
//         } else {
//             counter.push(parseInt(numResult));
//             letter.push(processString[i]);
//             numResult = '';
//         }
//     }
//     for (let i = 0; i < counter.length; i++){
//         for (let j = 1; j < counter[i] + 1; j++) {
//             result.push(letter[i]);
//         };
//     }
//     return result.join('');
// }
// console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
// console.log(decode('2U3a4B')) // uuaaaoooo 

/// END OF ENCODE /DECODE ///

/// TURN OBJECTS INTO FLEXIBLE ARRAY ///

// const obj = {
//     one: 1,
//     two: 2
// }
// for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }
// const obj2 = {
//     firstName: "Neil John",
//     lastName: "Trajano",
//     age: 46,
//     country: "Philippines"
// }
// const obj2ArrKeys = Object.keys(obj2);
// console.log(obj2ArrKeys);
// const userNameExists = obj2ArrKeys.includes("firstName");
// console.log(userNameExists);
// const obj2Values = obj2ArrKeys.reduce((accumulator, current) => {
//     accumulator.push(obj2[current]);
//     return accumulator;
// }, []);
// const monthlyExpenses = {
//     rent: 35000,
//     utility: 15000,
//     food: 10000,
//     internet: 2000,
//     miscaellaneous: 3000
// }
// const monthlyExpensesArrayValues = Object.values(monthlyExpenses);
// const totalMonthlyExpenses = monthlyExpensesArrayValues.reduce((accumulator, current) => {
//     return accumulator + current;
// }, 0);
// const pesoPHP = Intl.NumberFormat(
//     "en-US", 
//     { 
//         style: "currency", 
//         currency: "PHP"
//     }
// );
// console.log(`My total monthly expenses: ${pesoPHP.format(totalMonthlyExpenses)}`);
// const users = {
//     '19751004': {
//         firstName: "Neil John",
//         lastName: "Trajano",
//         age: 46,
//         country: "Philippines"
//     },
//     '20040101': {
//         firstName: "Neil Patrick",
//         lastName: "Trajano",
//         age: 18,
//         country: "USA"
//     },
//     '19750719': {
//         firstName: "Joana",
//         lastname: "De Jesus",
//         age: 47,
//         country: "Philippines"
//     },
//     '19971220': {
//         firstName: "Nathaniel Kin",
//         lastName: "Barrera",
//         age: 24,
//         country: "Philippines"
//     }
// };
// const usersArrEntries = Object.entries(users);
// console.log(usersArrEntries);
// const usersAbove = age => usersArrEntries.reduce((accumulator, [id, userObj]) => { // current was destructure to [id, obj]
//     if (userObj.age > age) {
//         accumulator.push({ id, ...userObj });
//     };
//     return accumulator;
// }, []);
// console.log(usersAbove(17));

/// END OF TURN OBJECTS INTO FLEXIBLE ARRAY ///