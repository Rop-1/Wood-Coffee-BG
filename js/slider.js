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

function responsive() {
    document.getElementById("NavBar").classList.toggle("responsive");
}