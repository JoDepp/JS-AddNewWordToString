import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string.</div>
`;

//basic function 
const addNew = (str) => 
// check in place to see if the word new is already at the front (0) of the string
str.indexOf(`New!`) === 0  ? str : 
// add's New before our exhisting string in
`New ${str}`;  

console.log(addNew('New! Offers'));
  
