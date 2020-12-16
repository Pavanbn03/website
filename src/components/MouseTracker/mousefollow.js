var ball = document.getElementById("ball");
let x;
let y;
window.addEventListener("mousemove", (e) => {
  x = e.pageY + "px";
  y = e.pageX + "px";
  console.log(x, y);
});

const mousefollow = () => {
  requestAnimationFrame(mousefollow);
  ball.style.left = y;
  ball.style.top = x;
};

mousefollow();
