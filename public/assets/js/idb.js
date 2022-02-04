// create variable to hold db connection
let db;
// establish a connection to IndexedDB database and set it to version 1
const request = indexedDB.open("budget_tracker", 1);
