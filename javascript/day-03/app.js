/*
// practice question#1
let arr = [7,6,5,4,3,2];

let n = 3;

console.log(arr.slice(0,n));
*/


/*
//practice question#2

let arr = [7,9,0,-2];
let n = 2;
console.log(arr.slice(arr.length-n));
*/


/*
//pracice question#3
let str = "Ahmed";

if(str == "ahmed" || str == "Ahmed"){
    console.log("String is Ahmed");
}
else if (str = ""){
    console.log("Blank string");
}
else{
    console.log("String not blank");
}
*/


/*
//question number#4

let str = "AhmEDFARooQ"
console.log(str);
let index = prompt("Enter the index number to check the CASE of the Character at that index");

if(str[index] == str[index].toLowerCase()){
    console.log("Indexed Character is Lower Case");
}
else{
    console.log("Not Lower Case Character");
}

*/

/*
//question number#5
let str = "      ahmed   ";
console.log("With spaces :",str);
let newstr = str.trim();
console.log("Without spaces:",newstr);

*/

let str = prompt("Enter string with leading and trailing spaces:");
console.log(`Orignal String ${str}`);
console.log(`Without Spaces String ${str.trim()}`);

/*
//question number#6
let arr = [44,66,55,77,88,99];
console.log(arr);

let num = prompt("Enter number to check wehter it si include in the array of or not");

if (arr.indexOf(num) != -1) {
    console.log("INcluded");
}

else {
    console.log("Number not included");
}
*/