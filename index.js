let count = 0;

const countHeader = document.getElementById("count");
countHeader.innerHTML = count;

const addition = document.getElementById("add");

const subtraction = document.getElementById("sub");

subtraction.addEventListener("click", () => {
  count--;
  countHeader.innerHTML = count;
});

addition.addEventListener("click", () => {
  console.log("add");
  count++;
  countHeader.innerHTML = count;
});
