let contentDiv = document.getElementById('content'); // Help-variable for view and controller

let numbers = [7, 3, 1, 5, 8]; // Default array
let chosenBar = 'none'; // Variable for which bar is selected
let inputValue = null; // Variable for what is written in the input field

let selected = false; // Determines if a bar is selected or not
let selectedId; // Holds the selected bars id
let errMsg = ''; // Variable for the div that show an error message when an invalid number is entered in the input field