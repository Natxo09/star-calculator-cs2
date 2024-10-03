// Variables para los elementos
const pasesInput = document.getElementById('pases');
const precioTotalSpan = document.getElementById('precioTotal');
const maxEstrellasSpan = document.getElementById('maxEstrellas');
const estrellasRestantesSpan = document.getElementById('estrellasRestantes');

const articulos = document.querySelectorAll('.articulo');
const cantidades = document.querySelectorAll('.cantidad');

// Precio del pase y cantidad de estrellas por pase
const precioPorPase = 15.19;
const estrellasPorPase = 40;

// Función para calcular el total
function calcular() {
    const pases = parseInt(pasesInput.value) || 0;
    const precioTotal = pases * precioPorPase;
    const maxEstrellas = pases * estrellasPorPase;

    // Mostrar el precio total y el máximo de estrellas
    precioTotalSpan.textContent = precioTotal.toFixed(2);
    maxEstrellasSpan.textContent = maxEstrellas;

    // Calcular las estrellas usadas
    let estrellasUsadas = 0;

    articulos.forEach((articulo, index) => {
        if (articulo.checked) {
            const cantidad = parseInt(cantidades[index].value) || 0;
            const costo = parseInt(articulo.dataset.cost);
            estrellasUsadas += cantidad * costo;
        }
    });

    // Mostrar estrellas restantes
    const estrellasRestantes = maxEstrellas - estrellasUsadas;
    estrellasRestantesSpan.textContent = estrellasRestantes >= 0 ? estrellasRestantes : `-${Math.abs(estrellasRestantes)}`;

    // Color de alerta si sobrepasa las estrellas disponibles
    if (estrellasRestantes < 0) {
        estrellasRestantesSpan.classList.add('negative');
    } else {
        estrellasRestantesSpan.classList.remove('negative');
    }
}

// Traducciones para los textos en español e inglés
const translations = {
    es: {
        title: "Calculadora de Estrellas - CS2",
        passesLabel: "Cantidad de pases comprados:",
        totalPriceText: "Precio total:",
        maxStarsText: "Máximo de estrellas:",
        itemsTitle: "Artículos a canjear",
        cajasGaleriaLabel: "Cajas Galería (2 estrellas cada una)",
        coleccionDeporteLabel: "Colección del Deporte (4 estrellas)",
        coleccionGraficaLabel: "Colección Gráfica (4 estrellas)",
        colganteArmasPeqLabel: "Colgante Armas Pequeñas (3 estrellas)",
        colganteEslabonLabel: "Colgante Eslabón Perdido (3 estrellas)",
        coleccionOverpassLabel: "Colección Overpass 2024 (4 estrellas)",
        pegatinasElemLabel: "Pegatinas de Elemental Craft (1 estrella)",
        pegatinasCharLabel: "Pegatinas de Character Craft (1 estrella)",
        desertEagleLabel: "Desert Eagle Edición Limitada (25 estrellas)",
        remainingStarsText: "Estrellas restantes:"
    },
    en: {
        title: "Star Calculator - CS2",
        passesLabel: "Number of passes bought:",
        totalPriceText: "Total price:",
        maxStarsText: "Maximum stars:",
        itemsTitle: "Items to redeem",
        cajasGaleriaLabel: "Gallery Boxes (2 stars each)",
        coleccionDeporteLabel: "Sports Collection (4 stars)",
        coleccionGraficaLabel: "Graphic Collection (4 stars)",
        colganteArmasPeqLabel: "Small Arms Charm (3 stars)",
        colganteEslabonLabel: "Lost Link Charm (3 stars)",
        coleccionOverpassLabel: "Overpass 2024 Collection (4 stars)",
        pegatinasElemLabel: "Elemental Craft Stickers (1 star)",
        pegatinasCharLabel: "Character Craft Stickers (1 star)",
        desertEagleLabel: "Desert Eagle Limited Edition (25 stars)",
        remainingStarsText: "Remaining stars:"
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}

// Selección del idioma
const languageSelect = document.getElementById("language");
languageSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    changeLanguage(selectedLang);
});

// Inicialización por defecto en español
changeLanguage("es");

// Habilitar/Deshabilitar los campos de cantidad cuando se selecciona un artículo
articulos.forEach((articulo, index) => {
    articulo.addEventListener('change', () => {
        cantidades[index].disabled = !articulo.checked;
        calcular();
    });
});

// Recalcular al cambiar cantidad de pases o cantidades de artículos
pasesInput.addEventListener('input', calcular);
cantidades.forEach(cantidad => {
    cantidad.addEventListener('input', calcular);
});

// Inicializar la calculadora
calcular();
