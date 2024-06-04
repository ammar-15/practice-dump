

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.style.color = "blue";
container.innerHTML = "<span>Hello World!</span>";

container.appendChild(content);

const redContent = document.createElement("p");
redContent.classList.add("redContent");
redContent.textContent = "Hey I'm red!";
redContent.style.color = "red";

container.appendChild(redContent);

const bluH3 = document.createElement("h3");
bluH3.classList.add("redContent");
bluH3.textContent = "Hey I'm blue h3!";
bluH3.style.color = "blue";

container.appendChild(bluH3);


//container.setAttribute("style", "color: blue; background: white;");
