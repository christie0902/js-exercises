// class Person {
//   constructor(firstName, middleName, lastName, age) {
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
//   }

//   isAdult() {
//     return this.age >= 18;
//   }

//   sayHello() {
//     console.log(this.isAdult() ? "Hello!" : "Hi!");
//   }
// }

// const simpsons = [
//   new Person("Homer", "Jay", "Simpson", 39),
//   new Person("Marge", "Jacqueline", "Simpson", 36),
//   new Person("Bart", "Jojo", "Simpson", 10),
//   new Person("Lisa", "Marie", "Simpson", 8),
//   new Person("Maggie", "Samantha", "Simpson", 1),
// ];

// simpsons.forEach((person) => {
//   console.log(person.getFullName());
// });

// let adults = simpsons.filter((person) => person.isAdult());
// console.log(adults);

// // filter func
// Person.filterAdults = (people) => {
//   return people.filter((person) => person.isAdult());
// };

//  Create classes
import { conversation } from "../unicorn-vs-cleverbot/src/data.js";
const chatScreen = document.querySelector(".conversation");

// class Conversation {
//   constructor(side, name, text) {
//     this.side = side;
//     this.name = name;
//     this.text = text;
//   }

//   appendMessage() {
//     const message = document.createElement("div");
//     message.classList.add("message");

//     const messageText = document.createElement("div");
//     messageText.className = "message__text";
//     messageText.innerText = `${this.text}`;

//     if (this.side === "local") {
//       message.classList.add("message--local");
//     } else if (this.side === "remote") {
//       message.classList.add("message--remote");
//     }

//     message.appendChild(messageText);
//     chatScreen.appendChild(message);
//   }
// }

// conversation.forEach((chat) => {
//   const currentConversation = new Conversation(chat.side, chat.name, chat.text);
//   currentConversation.appendMessage();
// });

class Message {
  constructor(side, name, text) {
    this.side = side;
    this.name = name;
    this.text = text;
  }
  appendMessage() {
    const message = document.createElement("div");
    message.classList.add("message");

    const messageText = document.createElement("div");
    messageText.className = "message__text";
    messageText.innerText = `${this.text}`;
    message.classList.add(`message--${this.side}`);
    message.appendChild(messageText);
    chatScreen.appendChild(message);
  }
}

class RemoteMessage extends Message {
  appendMessage() {
    // without super, it's a replacement, not adding
    const message = super.appendMessage();
    message.classList.add("message--remote");
  }
}

class LocalMessage extends Message {
  appendMessage() {
    const message = super.appendMessage();
    message.classList.add("message--local");
  }
}

conversation.forEach((chat) => {
  const currentConversation = new Message(chat.side, chat.name, chat.text);
  currentConversation.appendMessage();
});
