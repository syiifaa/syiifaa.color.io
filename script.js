const colorBox = document.getElementById('colorBox');
const message = document.getElementById('message');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
}

function checkColor(selectedColor) {
    const boxColor = colorBox.style.backgroundColor;

    if (boxColor.toLowerCase() === selectedColor.toLowerCase()) {
        message.textContent = 'Selamat! Anda benar!';
    } else {
        message.textContent = 'Maaf, jawabannya salah. Coba lagi!';
    }

    // Setel warna baru untuk selanjutnya
    setRandomColor();
}

// Inisialisasi warna pertama
setRandomColor();
