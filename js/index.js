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
