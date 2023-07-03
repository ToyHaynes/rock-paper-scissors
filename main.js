const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", play())
    console.log("click")
})