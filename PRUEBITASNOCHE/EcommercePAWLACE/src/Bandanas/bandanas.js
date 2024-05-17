// Precios por talla
const prices = {
    'XXCH': 5.00,
    'XCH': 10.00,
    'CH': 15.00,
    'M': 20.00,
    'G': 25.00,
    'XG': 30.00,
    'XXG': 35.00,
};

// Cantidad actual de productos
let currentQuantity = 0;

// Talla seleccionada
let currentSize = 'S';

// Función para cambiar la cantidad de productos
function changeNumber(amount) {
    currentQuantity += amount;
    if (currentQuantity < 0) {
        currentQuantity = 0;
    }
    document.getElementById('numberDisplay').innerText = currentQuantity;
    updatePrice();
}

// Función para seleccionar la talla
function selectSize(size) {
    currentSize = size;
    updatePrice();
}

// Función para actualizar el precio
function updatePrice() {
    const unitPrice = prices[currentSize];
    const totalPrice = (unitPrice * currentQuantity).toFixed(2);
    document.getElementById('priceDisplay').innerText = `Precio: $${totalPrice}`;
}

// Actualizar el precio inicial
updatePrice();


let selectedColor = 'black'; // Color inicial del texto

function selectColor(color) {
    selectedColor = color;
    updateTextStyle(); // Actualizar estilo de texto con el nuevo color
}

function updateTextStyle() {
    const fontSelect = document.getElementById('fontSelect').value;
    const textInput = document.getElementById('textInput').value;
    const outputText = document.getElementById('outputText');

    outputText.style.fontFamily = fontSelect;
    outputText.style.color = selectedColor;
    outputText.textContent = textInput || 'Tu texto aparecerá aquí...';
}


//posibly

// Función para añadir la bandana al carrito
function addToCart() {
    // Recopilar la información de personalización de la bandana
    const selectedSize = currentSize;
    const selectedColor = selectedColor;
    const personalizedText = document.getElementById('textInput').value;
    const quantity = currentQuantity;
    
    // Crear un objeto con la información recopilada
    const bandanaInfo = {
        size: selectedSize,
        color: selectedColor,
        text: personalizedText,
        quantity: quantity
    };
    
    // Almacenar la información en el localStorage o sessionStorage
    localStorage.setItem('bandanaInfo', JSON.stringify(bandanaInfo));
    
    // Redirigir al usuario a la página del carrito
    window.location.href = 'EcommercePAWLACE/src/carrito/carrito.html';
}



