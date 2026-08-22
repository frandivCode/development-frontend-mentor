const textStorage = document.getElementById('used-storage');
const inputStorage = document.getElementById('input-range');
const tooltipNumber = document.getElementById('tooltip-number');
const progressBar = document.getElementById('progress-bar');


inputStorage.addEventListener('input', () => {
    const valorInput = inputStorage.value;
    textStorage.textContent = valorInput;

    const gbDisponibles = 1000 - valorInput;
    tooltipNumber.textContent = gbDisponibles;

    const widthProgress = valorInput / 10;
    progressBar.style.width = widthProgress + '%';
});
