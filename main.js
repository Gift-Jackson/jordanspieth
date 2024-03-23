const toggleMemo = document.querySelector(".toggleMemo")
const dropIcon = document.querySelector(".drop-icon")

toggleMemo.addEventListener("click", () => {
    let content = document.querySelector(".content")
    let btnText = document.querySelector(".btn-text")

    content.classList.toggle('hide')

    if (content.classList.contains("hide")) {
        dropIcon.classList.remove("rotate")
        btnText.textContent = "Read Memo"
    }
    else {
        dropIcon.classList.add("rotate")
        btnText.textContent = "Close Memo"
    }
})











 