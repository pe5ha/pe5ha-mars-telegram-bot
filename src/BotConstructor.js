
/**
 * Globals
 */
// let token = process.env.BOT_TOKEN;
let token = PropertiesService.getScriptProperties().getProperty('BOT_TOKEN');
let SpreadsheetID = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
let UsersSheet = "Users";
let LogSheet = "Log";
let DebugSheet = "Debug";

let debugEnable = true;

