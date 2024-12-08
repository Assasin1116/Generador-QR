function generateQRCode() {
  const url = document.getElementById("urlInput").value;
  const qrcodeContainer = document.getElementById("qrcode");

  qrcodeContainer.innerHTML = "";

  if (url.trim() === "") {
    alert("Por favor, introduce una URL válida.");
    return;
  }

  new QRCode(qrcodeContainer, {
    text: url,
    width: 200,
    height: 200,
  });
}
function generateQRCode() {
  const url = document.getElementById("urlInput").value;
  if (!url) {
    alert("Por favor, introduce una URL válida.");
    return;
  }
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";

  const qrcode = new QRCode(qrcodeContainer, {
    text: url,
    width: 200,
    height: 200,
  });
}

function downloadQRCode() {
  const qrCodeCanvas = document.querySelector("#qrcode canvas");
  if (!qrCodeCanvas) {
    alert("Primero genera un código QR.");
    return;
  }

  const link = document.createElement("a");
  link.href = qrCodeCanvas.toDataURL("image/png");
  link.download = "codigo_qr.png";
  link.click();
}
