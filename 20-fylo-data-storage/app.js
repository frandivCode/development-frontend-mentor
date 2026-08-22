let textStorage = document.getElementById('used-storage');
let inputStorage = document.getElementById('input-range');
let tooltipNumber = document.getElementById('tooltip-number');
let progressBar = document.getElementById('progress-bar');

inputStorage.addEventListener('input', () => {
    let valorInput = inputStorage.value;
    textStorage.textContent = valorInput;

    let gbDisponibles = 1000 - valorInput;
    tooltipNumber.textContent = gbDisponibles;

    let widthProgress = valorInput / 10;
    progressBar.style.width = widthProgress + '%';
});
