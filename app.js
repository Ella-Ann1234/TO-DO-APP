const addList = document.querySelector(".addList"),
  icons = document.querySelectorAll("[data-icon]"),
  form = document.querySelector("form"),
  tasks = document.querySelector(".tasks");

function addTask(e) {
  e.preventDefault();
  inputTask = document.querySelector(".inputTask");
  if (inputTask.value.length < 3) {
    alert("task must be up to 3 letter words");
  } else if (inputTask.value.trim()) {
    const li = document.createElement("li");
    li.className = "items";

    const p = document.createElement("p");

    const div = document.createElement("div");
    div.className = "editIcons";

    const i1 = document.createElement("i");
    i1.className = "fa-solid fa-pen-to-square";

    const i2 = document.createElement("i");
    i2.className = "fa-sharp fa-solid fa-trash";

    div.append(i1);
    div.append(i2);
    li.append(p);
    li.append(div);
    tasks.append(li);

    p.innerText = inputTask.value.trim();
    inputTask.value = "";
    i1.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();

      inputTask.value = e.target.parentElement.previousElementSibling.innerText;
      inputTask.focus();
    });
    i2.addEventListener("click", (e) => {
      alert("Are you sure you want to delete your task");
      e.target.parentElement.parentElement.remove();
    });
  } else {
    alert("please input your task");
  }
}

form.addEventListener("submit", addTask);
