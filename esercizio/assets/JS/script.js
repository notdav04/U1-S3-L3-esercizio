let counter = 0;
const btn_saveEvent = document.getElementById("save-event");
const event_section = document.getElementById("event-section");
const adding_event = function () {
  btn_saveEvent.onclick = function () {
    const event_name = document.getElementById("event-name").value;
    const event_desc = document.getElementById("event-desc").value;
    const new_div = document.createElement("div");
    const newh2 = document.createElement("h2");
    const newp = document.createElement("p");
    const delete_button = document.createElement("button");
    newh2.innerText = event_name;
    newp.innerText = event_desc;
    delete_button.innerText = "Delete task";
    new_div.className = `card`;
    new_div.appendChild(newh2);
    new_div.appendChild(newp);
    new_div.appendChild(delete_button);

    event_section.appendChild(new_div);
    new_div.onclick = function () {
      newh2.style.textDecoration = "line-through";
      newp.style.textDecoration = "line-through";
    };
    delete_button.onclick = function () {
      event_section.removeChild(new_div);
    };
  };
};

adding_event();
