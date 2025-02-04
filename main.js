const { app, BrowserWindow, screen } = require("electron");

function createWindow() {
  const displays = screen.getAllDisplays();

  if (displays.length < 2) {
    console.log("Dua monitor tidak terdeteksi.");
    return;
  }

  const { width, height } = displays[0].size;
  const secondDisplay = displays[1];
  console.log("Layar pertama:", width, height);

  let win = new BrowserWindow({
    width: width + secondDisplay.bounds.width, // Gabungkan lebar dua layar
    height: Math.max(height, secondDisplay.bounds.height), // Ambil tinggi terbesar
    x: 0, // Posisi di layar pertama
    y: 0, // Posisi vertikal pada layar pertama
  });

  // Muat URL atau aplikasi dalam window
  win.loadURL("https://cxds-player.mdevoffice.net");
}

app.whenReady().then(createWindow);
