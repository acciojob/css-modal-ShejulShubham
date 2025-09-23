//your JS code here. If required.
let openModal = document.getElementById("openModal");
let closeModal = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");

window.addEventListener("keyup", (event)=>{
	if(event.code == "Escape"){
		modal.style.display = "none";
	}
})

function toggleModal(){
	modal.classList.toggle("show");
}

modal.onclick = ()=>{
	modal.style.display = "none";
};

closeModal.onclick = ()=>{
	modal.style.display = "none";
};

openModal.addEventListener("click", ()=>{
	modal.style.display = "block";
});

	modalContent.addEventListener("click", (event)=>{
	event.stopPropagation();

});
