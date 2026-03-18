const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");
const tilDateInput = document.querySelector("#til-date");
const tilTitleInput = document.querySelector("#til-title");
const tilContentInput = document.querySelector("#til-content");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = tilDateInput.value;
  const title = tilTitleInput.value.trim();
  const content = tilContentInput.value.trim();

  if (!date || !title || !content) {
    alert("날짜, 제목, 내용을 모두 입력해주세요.");
    return;
  }

  const tilItem = document.createElement("article");
  tilItem.className = "til-item";

  const timeElement = document.createElement("time");
  timeElement.setAttribute("datetime", date);
  timeElement.textContent = date;

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const contentElement = document.createElement("p");
  contentElement.textContent = content;

  tilItem.appendChild(timeElement);
  tilItem.appendChild(titleElement);
  tilItem.appendChild(contentElement);

  tilList.prepend(tilItem);

  tilForm.reset();
});