/**
 * Globals variables
 */


let chat_id;
let user_id;
let name;
let nick;
let date;
let message_id;
let text;
let data;
let textToSend;


let table = SpreadsheetApp.openById(SpreadsheetID);
let tGames = table.getSheetByName("Games");