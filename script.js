const qrCodeElement = document.getElementById("qr-code");
const generateBtn = document.getElementById("generate-btn");
const textInput = document.getElementById("text-input");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {
  const text = textInput.value;
  if (!text) {
    alert("Please enter some text or URL");
    return;
  }

  qrCodeElement.innerHTML = "";
  const qrCode = new QRCode(qrCodeElement, {
    text: text,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H,
  });

  setTimeout(() => {
    const qrCodeCanvas = qrCodeElement.querySelector("canvas");
    downloadBtn.href = qrCodeCanvas.toDataURL("image/png");
  }, 300);
});
