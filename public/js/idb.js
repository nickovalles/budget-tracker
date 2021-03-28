// create variable to hold db connection
let db;
// establish a connection to IndexedDB database called 'pizza_hunt' and set it to version 1
const request = indexedDB.open('budget-tracker', 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)

// upon a successful 

// This function will be executed if we attempt to submit a new pizza and there's no internet connection

// listen for app coming back online