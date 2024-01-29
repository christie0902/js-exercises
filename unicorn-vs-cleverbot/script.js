import { conversation } from "./src/data.js";
import { appendMessage, displayWithDelay, chatScreen } from "./src/function.js";
// import {test as testFunction, test2} from ".test/js"
// testFunction();
// import * from  ".test/js" - import all

// const chatScreen = document.querySelector(".conversation");

// conversation_json.forEach((chat) => {
//   const message = document.createElement("div");
//   message.classList.add("message");

//   const messageText = document.createElement("div");
//   messageText.className = "message__text";
//   messageText.innerText = `${chat.text}`;

//   if (chat.side === "local") {
//     message.classList.add("message--local");
//   } else if (chat.side === "remote") {
//     message.classList.add("message--remote");
//   }

//   message.appendChild(messageText);
//   chatScreen.appendChild(message);
// });

displayWithDelay(conversation, 0);
