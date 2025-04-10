let add = document.querySelector("#add");
let inpt = document.querySelector("input");
let ul = document.querySelector("ul");

function updateStateCounts() {
  let all = document.querySelectorAll("ul li").length;
  let newCount = document.querySelectorAll("li.new").length;
  let complete = document.querySelectorAll("li.complete").length;
  let removed = document.querySelectorAll("li.removed").length;

  document.getElementById("all-count").textContent = all;
  document.getElementById("new-count").textContent = newCount;
  document.getElementById("complete-count").textContent = complete;
  document.getElementById("removed-count").textContent = removed;
}

function reorderTasks() {
  let newItems = [];
  let completeItems = [];
  let removedItems = [];

  document.querySelectorAll("ul li").forEach(li => {
    if (li.classList.contains("new")) newItems.push(li);
    else if (li.classList.contains("complete")) completeItems.push(li);
    else if (li.classList.contains("removed")) removedItems.push(li);
  });

  ul.innerHTML = "";

  [...newItems, ...completeItems, ...removedItems].forEach(item => {
    ul.appendChild(item);
  });
}

add.addEventListener("click", function () {
  if (inpt.value.trim() === "") {
    alert("please enter your task");
    return;
  }


  let allTasks = document.querySelectorAll("ul li");
  for (let i = 0; i < allTasks.length; i++) {
    let text = allTasks[i].textContent.replace("X", "").replace("Undo", "").trim().toLowerCase();
    if (text === inpt.value.trim().toLowerCase()) {
      alert("This task is already added");
      return;
    }
  }

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "20px";

  let li = document.createElement("li");
  li.textContent = inpt.value;
  li.classList.add("new");

  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.style.marginLeft = "20px";


  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.remove("new");
      li.classList.add("complete");
    } else {
      li.classList.remove("complete");
      li.classList.add("new");
    }
    updateStateCounts();
    reorderTasks();
  });

  
  btn.addEventListener("click", function () {
    li.classList.remove("new", "complete");
    li.classList.add("removed");
    li.style.textDecoration = "line-through";

    checkbox.remove();
    btn.remove();

    let undoBtn = document.createElement("button");
    undoBtn.textContent = "Undo";
    undoBtn.style.marginLeft = "20px";
   undoBtn.style.backgroundColor = "#2196f3";
    undoBtn.disabled = true;
    undoBtn.style.opacity = "0.6";

    li.appendChild(undoBtn);

    updateStateCounts();
    reorderTasks();
  });

  li.prepend(checkbox);
  li.appendChild(btn);
  ul.appendChild(li);

  inpt.value = "";

  updateStateCounts();
  reorderTasks();
});
