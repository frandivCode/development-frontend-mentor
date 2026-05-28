async function cargarResumen() {
    try {
        const respuesta = await fetch('./data.json');
        const datos = await respuesta.json();

        const contenedor = document.getElementById('summary-container');

        datos.forEach(item => {
            const tarjeta = document.createElement('div');
            const claseCategoria = item.category.toLowerCase();
            tarjeta.className = `summary-item ${claseCategoria}`;

            tarjeta.innerHTML = `
       <div class="item-left">
    <img class="img-category" src="${item.icon}" alt="Icono de ${item.category}">
    <span class="category">${item.category}</span>
</div>
    <div class="score">
        <span class="score-number">${item.score}</span> 
        <span class="score-total">/ 100</span>
    </div>
    `;

            contenedor.appendChild(tarjeta);
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

cargarResumen();