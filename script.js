//your JS code here. If required.
let openModal = document.getElementById("openModal");
let closeModal = document.getElementById("close-modal");
let modal = document.getElementById("modal");

function toggleModal(){
	modal.classList.toggle("show");
}

modal.onclick = toggleModal;

closeModal.addEventListener("click", toggleModal);

openModal.addEventListener("click", toggleModal);
