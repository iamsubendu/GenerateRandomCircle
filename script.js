let circles = [];
let clickCount = 0;

document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (clickCount % 2 === 0) {
    circles.forEach((circle) => circle.remove());
    //  The.remove() method is used to remove a specified element
    //  from the DOM(Document Object Model).When called on a DOM
    //  element, it effectively deletes that element from the document,
    //  making it no longer visible on the webpage.
    circles = [];
  }

  const rNo = Math.round(Math.random() * 100) + 20;
  // Minimum radius of 20 as rNo can be 0 too
  const color = getRandomColor();

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = `${rNo}px`;
  circle.style.height = `${rNo}px`;
  circle.style.background = color;

  // Center the circle at the click position
  circle.style.left = `${x - rNo / 2}px`;
  circle.style.top = `${y - rNo / 2}px`;

  document.getElementById("container").appendChild(circle);
  circles.push(circle);

  clickCount++;
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
