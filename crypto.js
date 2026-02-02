// COPY BUTTON
var copyBtns = document.querySelectorAll(".copy-btn");
var toast = document.getElementById("toast");

copyBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    var address = btn.getAttribute("data-address");

    navigator.clipboard.writeText(address);

    // munculin toast
    toast.classList.add("show");

    // ilang otomatis setelah 1.5 detik
    setTimeout(function () {
      toast.classList.remove("show");
    }, 1500);
  });
});

// QR MODAL
var qrBtns = document.querySelectorAll(".qr-btn");
var modal = document.getElementById("qrModal");
var qrImage = document.getElementById("qrImage");
var closeModal = document.getElementById("closeModal");

qrBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    var qrSrc = btn.getAttribute("data-qr");

    qrImage.src = qrSrc;
    modal.style.display = "flex";
  });
});

// tutup modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// klik luar modal tutup juga
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
