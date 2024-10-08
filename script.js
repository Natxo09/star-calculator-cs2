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
        totalPriceText: "Precio total (0.38€/Estrella):",
        maxStarsText: "Máximo de estrellas:",
        itemsTitle: "Artículos a canjear",
        cajasGaleriaLabel: "Cajas Galería (2 estrellas)[0.38€]",
        coleccionDeporteLabel: "Colección del Deporte (4 estrellas)[1.52€]",
        coleccionGraficaLabel: "Colección Gráfica (4 estrellas)[1.52€]",
        colganteArmasPeqLabel: "Colgante Armas Pequeñas (3 estrellas)[1.14€]",
        colganteEslabonLabel: "Colgante Eslabón Perdido (3 estrellas)[1.14€]",
        coleccionOverpassLabel: "Colección Overpass 2024 (4 estrellas)[1.52€]",
        pegatinasElemLabel: "Pegatinas de Elemental Craft (1 estrella)[0.38€]",
        pegatinasCharLabel: "Pegatinas de Character Craft (1 estrella)[0.39€]",
        desertEagleLabel: "Desert Eagle Edición Limitada (25 estrellas)[9.48€]",
        remainingStarsText: "Estrellas restantes:",
        gameCalcTitle: "Estimación partidas necesarias para completar un pase",
        starsPerGame: "Estrellas por partida",
        gamesNeeded: "Partidas necesarias (40 estrellas)",
        oneStarGame: "1 estrella/partida",  // Nueva traducción
        one25StarGame: "1.25 estrellas/partida",  // Nueva traducción
        one5StarGame: "1.5 estrellas/partida",  // Nueva traducción
        one75StarGame: "1.75 estrellas/partida",  // Nueva traducción
        twoStarGame: "2 estrellas/partida",  // Nueva traducción
        showGamesCalc: "Mostrar cálculo de partidas",
        gameCalcTitle: "Estimar partidas necesarias para completar un pase",
        premiereTitle: "Premiere",
        competitiveTitle: "Competitivo",
        wingmanTitle: "Wingman",
        deathmatchTitle: "Deathmatch",
        armsRaceTitle: "Arms Race",
        casualTitle: "Casual",
        starsPerGame: "Estrellas por partida",
        timePerGame: "Tiempo por partida",
        starsPerHour: "Estrellas por hora",
        gamesNeeded: "Partidas necesarias (40 estrellas)",
        gameCalcDescription: `Datos recopilados de  <a href="https://www.youtube.com/watch?v=xjhpbUbW54I" target="_blank">Anomaly</a>.`

    },
    en: {
        title: "Stars Calculator - CS2",
        passesLabel: "Number of passes bought:",
        totalPriceText: "Total price (0.38€/Star):",
        maxStarsText: "Maximum stars:",
        itemsTitle: "Items to redeem",
        cajasGaleriaLabel: "Gallery Boxes (2 stars)[0.38€]",
        coleccionDeporteLabel: "Sports Collection (4 stars)[1.52€]",
        coleccionGraficaLabel: "Graphic Collection (4 stars)[1.52€]",
        colganteArmasPeqLabel: "Small Arms Charm (3 stars)[1.14€]",
        colganteEslabonLabel: "Lost Link Charm (3 stars)[1.14€]",
        coleccionOverpassLabel: "Overpass 2024 Collection (4 stars)[1.52€]",
        pegatinasElemLabel: "Elemental Craft Stickers (1 star)[0.38€]",
        pegatinasCharLabel: "Character Craft Stickers (1 star)[0.39€]",
        desertEagleLabel: "Desert Eagle Limited Edition (25 stars)[9.48€]",
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
        gameCalcTitle: "Estimate games needed to complete a pass",
        premiereTitle: "Premiere",
        competitiveTitle: "Competitive",
        wingmanTitle: "Wingman",
        deathmatchTitle: "Deathmatch",
        armsRaceTitle: "Arms Race",
        casualTitle: "Casual",
        starsPerGame: "Stars per game",
        timePerGame: "Time per game",
        starsPerHour: "Stars per hour",
        gamesNeeded: "Games needed (40 stars)",
        gameCalcDescription: `Data collected from <a href="https://www.youtube.com/watch?v=xjhpbUbW54I" target="_blank">Anomaly</a>.`

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