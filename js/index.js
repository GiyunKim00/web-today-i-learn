const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");
const tilDateInput = document.querySelector("#til-date");
const tilTitleInput = document.querySelector("#til-title");
const tilContentInput = document.querySelector("#til-content");
const submitButton = tilForm.querySelector('button[type="submit"]');

let editingItem = null;

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = tilDateInput.value;
  const title = tilTitleInput.value.trim();
  const content = tilContentInput.value.trim();

  if (!date || !title || !content) {
    alert("날짜, 제목, 내용을 모두 입력해주세요.");
    return;
  }

  if (editingItem) {
    updateTilItem(editingItem, date, title, content);
    editingItem = null;
    submitButton.textContent = "등록";
  } else {
    const tilItem = createTilItem(date, title, content);
    tilList.prepend(tilItem);
  }

  tilForm.reset();
});

tilForm.addEventListener("reset", function () {
  editingItem = null;
  submitButton.textContent = "등록";
});

function createTilItem(date, title, content) {
  const tilItem = document.createElement("article");
  tilItem.className = "til-item";

  const timeElement = document.createElement("time");
  timeElement.setAttribute("datetime", date);
  timeElement.textContent = date;

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const contentElement = document.createElement("p");
  contentElement.textContent = content;

  const actionContainer = document.createElement("div");
  actionContainer.className = "til-actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-btn";
  editButton.textContent = "✏️";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "🗑️";

  editButton.addEventListener("click", function () {
    tilDateInput.value = timeElement.getAttribute("datetime");
    tilTitleInput.value = titleElement.textContent;
    tilContentInput.value = contentElement.textContent;

    editingItem = tilItem;
    submitButton.textContent = "수정 완료";
  });

  deleteButton.addEventListener("click", function () {
    if (confirm("정말 삭제하시겠습니까?")) {
      tilItem.remove();
    }
  });

  actionContainer.append(editButton, deleteButton);

  tilItem.append(actionContainer, timeElement, titleElement, contentElement);

  return tilItem;
}

function updateTilItem(tilItem, date, title, content) {
  const timeElement = tilItem.querySelector("time");
  const titleElement = tilItem.querySelector("h3");
  const contentElement = tilItem.querySelector("p");

  timeElement.setAttribute("datetime", date);
  timeElement.textContent = date;
  titleElement.textContent = title;
  contentElement.textContent = content;
}