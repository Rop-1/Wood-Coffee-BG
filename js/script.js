document.getElementById('load-more-btn').addEventListener('click', function () {
    const extraProducts = document.getElementById('extra-products');
    const button = document.getElementById('load-more-btn');
    if (extraProducts.style.display === 'none') {
        extraProducts.style.display = 'flex';
        button.innerText = 'További termékek elrejtése';
    } else {
        extraProducts.style.display = 'none';
        button.innerText = 'További termékek megtekintése';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

const modal = document.getElementById("pdfModal");
const linkf = document.getElementById("aszf-link");
const links = document.getElementById("adatved-link");
const linkt = document.getElementById("szolgfelt-link");
const closeBtn = document.getElementById("closeModal");

linkf.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});
links.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});
linkt.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function responsive() {
    document.getElementById("NavBar").classList.toggle("responsive");
}

  const overlay = document.getElementById("cart");
  const form = document.getElementById("checkoutForm");
  const confirmBtn = document.getElementById("confirmBtn");
  function openCart() {
    overlay.style.display = "flex";
  }
  function closeCart() {
    overlay.style.display = "none";
  }
  function removeItem(btn) {
    btn.closest(".cart-item").remove();
  }
  function goHome() {
    window.location.href = "index.html";
  }
  form.addEventListener("input", () => {
    confirmBtn.disabled = !form.checkValidity();
  });

  const prof_overlay = document.getElementById("profile");
  const prof_form = document.getElementById("prof-checkoutForm");
  const prof_confirmBtn = document.getElementById("prof-confirmBtn");
  function openProfile() {
    prof_overlay.style.display = "flex";
  }
  function closeProfile() {
    prof_overlay.style.display = "none";
  }
  prof_form.addEventListener("input", () => {
    prof_confirmBtn.disabled = !prof_form.checkValidity();
  });
