const shoppingList = [
  {
    item: "beef",
    count: 2,
  },
  {
    item: "pasta",
    count: 1,
  },
  {
    item: "egg",
    count: 6,
  },
  {
    item: "bread",
    count: 1,
  },
  {
    item: "cheese",
    count: 1,
  },
  {
    item: "milk",
    count: 1,
  },
];
const body = document.querySelector("body");

const list = document.createElement("div");
body.appendChild(list);
list.className = "list";

const showList = () => {
  shoppingList.forEach((listItem) => {
    const item = document.createElement("li");
    item.className = "item";
    list.appendChild(item);
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    list.append(removeButton);
    item.innerText += `${listItem.item}, amount:${listItem.count}`;
  });
};

showList();

const addItem = (item, amount) => {
  list.innerHTML = "";
  shoppingList.push({ item: item, count: amount });
  showList();
};

const addButton = document.querySelector(".addButton");
const enterItem = document.getElementById("shopItem");
const enterAmount = document.getElementById("amountItem");

addButton.addEventListener("click", (event) => {
  addItem(enterItem.value, enterAmount.value);
});

const addedItem = document.querySelector(".item");
addedItem.addEventListener("click", (event) => {});
