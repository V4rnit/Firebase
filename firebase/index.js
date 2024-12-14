// Importing Firebase modules to initialize the app and interact with the database
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration settings for the app's Realtime Database
const appSettings = {
    databaseURL: "https://playground-71c38-default-rtdb.firebaseio.com/"
};

// Initializing the Firebase app with the provided settings
const app = initializeApp(appSettings);

// Getting a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Creating a reference to a specific path in the database (in this case, "shoppingList")
const shoppingListDB = ref(database, "shoppingList");

// Selecting the DOM elements for user input, the button, and the shopping list container
const inputFieldEl = document.getElementById("input-field"); // Input field where users type items
const addButtonEl = document.getElementById("add-button"); // Button to add an item to the list
const shoppingListEl = document.getElementById("shopping-list"); // Element to display the list of items

// Adding an event listener to the "Add" button
addButtonEl.addEventListener("click", function () {
    // Retrieve the current value entered by the user in the input field
    let inputValue = inputFieldEl.value;

    // Push the input value to the database under the "shoppingList" path
    push(shoppingListDB, inputValue);

    // Clear the input field after submission
    clearInputFieldEl();

    // Append the new item to the shopping list display
    appendItemToShoppingListEl(inputValue);
});

// Function to clear the input field
function clearInputFieldEl() {
    inputFieldEl.value = ""; // Resets the value of the input field to an empty string
}

// Function to append a new item to the shopping list display
function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li> ${itemValue} </li>`; // Adds a new list item to the DOM
}
