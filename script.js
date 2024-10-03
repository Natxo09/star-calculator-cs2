// Variables para los elementos
const pasesInput = document.getElementById('pases');
const precioTotalSpan = document.getElementById('precioTotal');
const maxEstrellasSpan = document.getElementById('maxEstrellas');
const estrellasRestantesSpan = document.getElementById('estrellasRestantes');
const articulos = document.querySelectorAll('.articulo');
const cantidades = document.querySelectorAll('.cantidad');
const resetButton = document.getElementById('resetButton');
const calculoPartidasBtn = document.getElementById('calculoPartidasBtn');
const extraContent = document.getElementById('extraContent');

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

// Función para resetear todos los campos y checkboxes
function resetFields() {
    pasesInput.value = 0;
    articulos.forEach((articulo, index) => {
        articulo.checked = false;
        cantidades[index].value = 0;
        cantidades[index].disabled = true;
    });
    calcular();
}

// Añadir funcionalidad de reset al botón
resetButton.addEventListener('click', resetFields);

// Función para mostrar/ocultar el cálculo de partidas
function toggleExtraContent() {
    extraContent.style.display = extraContent.style.display === 'none' || extraContent.style.display === '' ? 'block' : 'none';
}

// Función para calcular las partidas necesarias para completar un pase
function calcularPartidas() {
    document.getElementById('partidas1').textContent = (40 / 1).toFixed(1);
    document.getElementById('partidas1_25').textContent = (40 / 1.25).toFixed(1);
    document.getElementById('partidas1_5').textContent = (40 / 1.5).toFixed(1);
    document.getElementById('partidas1_75').textContent = (40 / 1.75).toFixed(1);
    document.getElementById('partidas2').textContent = (40 / 2).toFixed(1);
}

// Añadir funcionalidad de mostrar/ocultar al botón de cálculo de partidas
calculoPartidasBtn.addEventListener('click', () => {
    toggleExtraContent();
    calcularPartidas();  // Calcula las partidas solo cuando el contenido es visible
});

// Traducciones para los textos en español e inglés
const translations = {
    es: {
        title: "Calculadora de Estrellas - CS2",
        passesLabel: "Cantidad de pases comprados:",
        totalPriceText: "Precio total:",
        maxStarsText: "Máximo de estrellas:",
        itemsTitle: "Artículos a canjear",
        cajasGaleriaLabel: "Cajas Galería (2 estrellas)",
        coleccionDeporteLabel: "Colección del Deporte (4 estrellas)",
        coleccionGraficaLabel: "Colección Gráfica (4 estrellas)",
        colganteArmasPeqLabel: "Colgante Armas Pequeñas (3 estrellas)",
        colganteEslabonLabel: "Colgante Eslabón Perdido (3 estrellas)",
        coleccionOverpassLabel: "Colección Overpass 2024 (4 estrellas)",
        pegatinasElemLabel: "Pegatinas de Elemental Craft (1 estrella)",
        pegatinasCharLabel: "Pegatinas de Character Craft (1 estrella)",
        desertEagleLabel: "Desert Eagle Edición Limitada (25 estrellas)",
        remainingStarsText: "Estrellas restantes:",
        gameCalcTitle: "Estimar partidas necesarias para completar un pase (Premiere)",
        starsPerGame: "Estrellas por partida",
        gamesNeeded: "Partidas necesarias (40 estrellas)",
        oneStarGame: "1 estrella/partida",  // Nueva traducción
        one25StarGame: "1.25 estrellas/partida",  // Nueva traducción
        one5StarGame: "1.5 estrellas/partida",  // Nueva traducción
        one75StarGame: "1.75 estrellas/partida",  // Nueva traducción
        twoStarGame: "2 estrellas/partida",  // Nueva traducción
        showGamesCalc: "Mostrar cálculo de partidas",
        gameCalcDescription: `Según mi experiencia, en partidas malas se obtiene aproximadamente 1 estrella, en partidas disputadas suele variar entre 1,25 y 1,5 estrellas, y en una muy buena partida se pueden conseguir hasta 1,75 estrellas. Es muy raro, pero a veces es posible alcanzar las 2 estrellas por partida. Estos datos están basados en mi experiencia jugando en Premiere. Si me estoy confundiendo, no dudes en corregirme. Además, si puedes compartir feedback sobre otros modos de juego en <a href="https://github.com/Natxo09/star-calculator-cs2" target="_blank">GitHub</a> o en <a href="https://x.com/_Natxete" target="_blank">Twitter</a>, sería de mucha ayuda.`

    },
    en: {
        title: "Star Calculator - CS2",
        passesLabel: "Number of passes bought:",
        totalPriceText: "Total price:",
        maxStarsText: "Maximum stars:",
        itemsTitle: "Items to redeem",
        cajasGaleriaLabel: "Gallery Boxes (2 stars)",
        coleccionDeporteLabel: "Sports Collection (4 stars)",
        coleccionGraficaLabel: "Graphic Collection (4 stars)",
        colganteArmasPeqLabel: "Small Arms Charm (3 stars)",
        colganteEslabonLabel: "Lost Link Charm (3 stars)",
        coleccionOverpassLabel: "Overpass 2024 Collection (4 stars)",
        pegatinasElemLabel: "Elemental Craft Stickers (1 star)",
        pegatinasCharLabel: "Character Craft Stickers (1 star)",
        desertEagleLabel: "Desert Eagle Limited Edition (25 stars)",
        remainingStarsText: "Remaining stars:",
        remainingStarsText: "Remaining stars:",
        showGamesCalc: "Show game calculation",
        gameCalcTitle: "Estimate games needed to complete a pass (Premiere)",
        starsPerGame: "Stars per game",
        gamesNeeded: "Games needed (40 stars)",
        oneStarGame: "1 star/game",  // Nueva traducción
        one25StarGame: "1.25 stars/game",  // Nueva traducción
        one5StarGame: "1.5 stars/game",  // Nueva traducción
        one75StarGame: "1.75 stars/game",  // Nueva traducción
        twoStarGame: "2 stars/game",  // Nueva traducción
        showGamesCalc: "Show game calculation",
        gameCalcDescription: `Based on my experience, in bad games, you get approximately 1 star, in competitive games it usually varies between 1.25 and 1.5 stars, and in a very good game you can get up to 1.75 stars. It is rare, but sometimes it is possible to reach 2 stars per game. These numbers are based on my experience playing in Premiere. If I'm mistaken, feel free to correct me. Also, any feedback on other game modes would be very helpful, and you can reach me via <a href="https://github.com/Natxo09/star-calculator-cs2" target="_blank">GitHub</a> or <a href="https://x.com/_Natxete" target="_blank">Twitter</a>.`

    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (key === 'gameCalcDescription') {
            element.innerHTML = translations[lang][key]; // Utilizamos innerHTML para que renderice los enlaces
        } else {
            element.textContent = translations[lang][key];
        }
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
