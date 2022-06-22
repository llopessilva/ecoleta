const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const modalClose = document.querySelector("#modal .header a")


modalClose.addEventListener("click", () => {
  modal.classList.add("hide")
})

buttonSearch.addEventListener("click", () => {
  modal.classList.remove("hide")
})

