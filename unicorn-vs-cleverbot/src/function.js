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

export { appendMessage, displayWithDelay, chatScreen };

// example with interval
let i = 0;
const intervalId = setInterval(() => {
  if (i === messages.length - 1) {
    clearInterval(loop);
  }
  const messageContainer = document.createElement("div");
  messageContainer.className = `message message--${messages[i].side}`;

  const messageText = document.createElement("div");
  messageText.className = "message__text";
  messageText.innerText = messages[i].text;

  messageContainer.appendChild(messageText);
  conversationContainer.appendChild(messageContainer);

  i++;
}, duration);
