// =================== DATA LOGIN ====================
const users = [
  { username: "gama", password: "alpha777" },
  { username: "putra", password: "aabb1122" }
];

// =================== FUNGSI LOGIN ====================
function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  const userValid = users.find(user => user.username === username && user.password === password);

  if (userValid) {
    message.style.color = "lightgreen";
    message.innerText = "Login berhasil! Mengarahkan...";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.innerText = "Username atau password salah!";
  }
}

// =================== KONVERSI HARI ====================
function getHariIndonesia(hariInggris) {
  const mapping = {
    Sunday: "Minggu",
    Monday: "Senin",
    Tuesday: "Selasa",
    Wednesday: "Rabu",
    Thursday: "Kamis",
    Friday: "Jumat",
    Saturday: "Sabtu"
  };
  return mapping[hariInggris] || hariInggris;
}

// =================== WAKTU REAL-TIME ====================
function updateWaktu() {
  const now = new Date();
  const hari = getHariIndonesia(now.toLocaleDateString("en-US", { weekday: "long" }));
  const tanggal = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const jam = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const waktuDiv = document.getElementById("waktu");
  if (waktuDiv) {
    waktuDiv.textContent = `${hari}, ${tanggal} • ${jam}`;
    waktuDiv.classList.add("animate");
    setTimeout(() => waktuDiv.classList.remove("animate"), 400);
  }
}

// =================== ANIMASI MASUK ====================
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("slide-fade-in");
});

// =================== ANIMASI BACK ====================
function setupBackButton() {
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("slide-fade-in"); // Hapus animasi masuk
      document.body.classList.add("back-animate");     // Tambah animasi keluar
      setTimeout(() => {
        history.back();
      }, 600); // Sesuaikan dengan durasi animasi
    });
  }
}

// =================== INISIALISASI ====================
window.addEventListener("load", () => {
  updateWaktu();
  setupBackButton();
});
setInterval(updateWaktu, 1000);
