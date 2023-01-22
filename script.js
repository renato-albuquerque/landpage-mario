const buttonTrailer = document.querySelector(".button-trailer")
const modal = document.querySelector(".modal")
const buttonCloseModal = document.querySelector(".close-modal")
const videoTrailer = document.getElementById("video")
const linkVideo = video.src

function toggleModal () {
    modal.classList.toggle("open")
}

buttonTrailer.addEventListener("click", function() {
    // modal.classList.add("open") // It could be .add.
    toggleModal()
    video.setAttribute("src", linkVideo)    
})

buttonCloseModal.addEventListener("click", function () {
    // modal.classList.remove("open") // It could be .remove.
    toggleModal()
    videoTrailer.setAttribute("src", "")
})

