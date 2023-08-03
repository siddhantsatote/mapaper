console.clear();
const list = document.querySelectorAll(".list");
const nav = document.querySelector(".navigation");
list.forEach((item) =>
  item.addEventListener("click", function (e) {
    list.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
  })
);

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
