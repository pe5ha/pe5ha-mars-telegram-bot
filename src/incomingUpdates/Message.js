

function messageReceived(message) {
  chat_id = message.chat.id;
  user_id = message.from.id;
  name = message.from.first_name + (message.from.last_name ? " " + message.from.last_name : "");
  nick = (message.from.username ? "@" + message.from.username : "");
  date = message.date;
  text = message.text;

  userRegister(user_id); // проверка новый чел или нет.

  logMessages();


  let tTexts = table.getSheetByName("Texts");




  if (chat_id == user_id) { // команды в лс
    if (text == "/start" || text == "/start@terraforming_mars_bot") {
      textToSend = tTexts.getRange('B1').getValue();
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
    else if (text == "/help" || text == "/help@terraforming_mars_bot") {
      textToSend = tTexts.getRange('B1').getValue();
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
    else if (text == "/givemyid" || text == "/givemyid@terraforming_mars_bot") {
      textToSend = user_id + "";
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
    else if (text.startsWith("@")) {
      let requestedID = getUseridByUsername(text);
      if (requestedID != null) textToSend = requestedID + "";
      else textToSend = tTexts.getRange('B2').getValue().replaceAll("${text}", text);
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
    else { // логика
      textToSend = tTexts.getRange('B3').getValue();
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
  }
  else { // команды в групповых чатах
    if (text == "/start" || text == "/start@terraforming_mars_bot") {
      textToSend = tTexts.getRange('B1').getValue();
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
    else if (text == "/help" || text == "/help@terraforming_mars_bot") {
      textToSend = tTexts.getRange('B1').getValue();
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
    else if (text == "/givemyid" || text == "/givemyid@terraforming_mars_bot") {
      textToSend = user_id + "";
      TelegramAPI.sendText(token, chat_id, textToSend);
    }
  }
}