import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  const p = document.createElement("p");
  const button = document.createElement("button");
  button.innerText = "完了";
  const button2 = document.createElement("button");
  button2.innerText = "削除";
  const ul = document.querySelector("#incomplete-list");
  p.innerText = inputText;
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(button2);
  ul.appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
