function openModal(imageSrc, planName) {
  document.getElementById("modalHeading").innerText = planName;
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
