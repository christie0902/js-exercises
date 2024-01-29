import { conversation } from "./chat.js";
// import {test as testFunction} from ".test/js"
// testFunction();

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

const chatScreen = document.querySelector(".conversation");

const appendMessage = (chat) => {
  // chatScreen.className = `message message--${conversation_json.side};
  const message = document.createElement("div");
  message.classList.add("message");

  const messageText = document.createElement("div");
  messageText.className = "message__text";
  messageText.innerText = `${chat.text}`;

  if (chat.side === "local") {
    message.classList.add("message--local");
  } else if (chat.side === "remote") {
    message.classList.add("message--remote");
  }

  message.appendChild(messageText);
  chatScreen.appendChild(message);
};

const displayWithDelay = (messages, i) => {
  if (i < messages.length) {
    appendMessage(messages[i]);
    setTimeout(() => {
      displayWithDelay(messages, i + 1);
    }, 500);
  }
};

displayWithDelay(conversation, 0);
