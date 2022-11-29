const generator = require("./generator");
const renderer = require("./renderer");
const users = generator();

const userList = document.querySelector("#user-list");
const render = () => {
  renderer({ userList, users, hash: window.location.hash.slice(1) });
};

window.addEventListener("hashchange", render);

render();
