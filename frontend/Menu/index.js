// Generate QR code on box click
// document.getElementById('box1').addEventListener('click', function () {
//   const box1 = document.getElementById('box1');
//   const qrCodeContainer = document.getElementById('qrcode-box1');

//   // Toggle between QR code and content
//   const content = box1.querySelector('.box-content');
//   const isQrCodeVisible = qrCodeContainer.style.display === 'block';

//   if (!isQrCodeVisible) {
//     // Hide content and show QR code
//     content.style.display = 'none';
//     qrCodeContainer.style.display = 'block';

//     // Generate QR code (if not already generated)
//     if (!qrCodeContainer.innerHTML.trim()) {
//       const qrData = 'Idli - 100g: 90 calories'; // Your credentials
//       const qrCode = new QRCode(qrCodeContainer, {
//         text: qrData,
//         width: 150,
//         height: 150,
//       });
//     }
//   } else {
//     // Show content and hide QR code
//     content.style.display = 'block';
//     qrCodeContainer.style.display = 'none';
//   }
// });


// Handle QR code scanning
// The QR code links to a new page or displays credentials

function toggleQrCode(boxId, qrData) {
  const box = document.getElementById(boxId);
  const qrCodeContainer = box.querySelector('.qr-code');
  const content = box.querySelector('.box-content');
  const isQrCodeVisible = qrCodeContainer.style.display === 'block';

  if (!isQrCodeVisible) {
    // Hide content and show QR code
    content.style.display = 'none';
    qrCodeContainer.style.display = 'block';

    // Generate QR code (if not already generated)
    if (!qrCodeContainer.innerHTML.trim()) {
      new QRCode(qrCodeContainer, {
        text: qrData,
        width: 150,
        height: 150,
      });
    }
  } else {
    // Show content and hide QR code
    content.style.display = 'block';
    qrCodeContainer.style.display = 'none';
  }
}

// Add event listeners for each box
document.getElementById('box1').addEventListener('click', function () {
  toggleQrCode('box1', 'Idli - 100g: 90 calories');
});
document.getElementById('box2').addEventListener('click', function () {
  toggleQrCode('box2', 'Sambhar - 100g: 150 calories');
});
document.getElementById('box3').addEventListener('click', function () {
  toggleQrCode('box3', 'Vada - 100g: 250 calories');
});
document.getElementById('box4').addEventListener('click', function () {
  toggleQrCode('box4', 'Vada - 100g: 250 calories');
});
document.getElementById('box5').addEventListener('click', function () {
  toggleQrCode('box5', 'Vada - 100g: 250 calories');
});
document.getElementById('box6').addEventListener('click', function () {
  toggleQrCode('box6', 'Vada - 100g: 250 calories');
});
document.getElementById('box7').addEventListener('click', function () {
  toggleQrCode('box7', 'Vada - 100g: 250 calories');
});
document.getElementById('box8').addEventListener('click', function () {
  toggleQrCode('box8', 'Vada - 100g: 250 calories');
});
document.getElementById('box9').addEventListener('click', function () {
  toggleQrCode('box9', 'Vada - 100g: 250 calories');
});
document.getElementById('box10').addEventListener('click', function () {
  toggleQrCode('box10', 'Vada - 100g: 250 calories');
});
document.getElementById('box11').addEventListener('click', function () {
  toggleQrCode('box11', 'Vada - 100g: 250 calories');
});
document.getElementById('box12').addEventListener('click', function () {
  toggleQrCode('box12', 'Vada - 100g: 250 calories');
});
document.getElementById('box13').addEventListener('click', function () {
  toggleQrCode('box13', 'Vada - 100g: 250 calories');
});
document.getElementById('box14').addEventListener('click', function () {
  toggleQrCode('box14', 'Vada - 100g: 250 calories');
});
