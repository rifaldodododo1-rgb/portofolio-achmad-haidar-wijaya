// ==========================================
// 1. TOGGLE MENU HAMBURGER MOBILE
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}


// ==========================================
// 2. DARK / LIGHT MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });
}


// ==========================================
// 3. DATA & RENDER 3 PROYEK UTAMA
// ==========================================
const portfolioItems = [
  {
    title: "Project Kasir",
    tag: "Aplikasi Web",
    description: "Sistem aplikasi kasir berbasis web untuk mengelola transaksi penjualan, data produk, dan laporan toko secara real-time.",
    img: "assets/img/kasir.jpg"
  },
  {
    title: "Topologi Jaringan",
    tag: "Network & Desain",
    description: "Perancangan dan dokumentasi topologi jaringan komputer (LAN/WAN) untuk efisiensi alur data instansi/sekolah.",
    img: "assets/img/topologi.jpg"
  },
  {
    title: "Database Sistem",
    tag: "Database",
    description: "Perancangan struktur basis data (ERD & relasi tabel) yang terstruktur dan optimal untuk penyimpanan data aplikasi.",
    img: "assets/img/database.jpg"
  }
];

const projectGrid = document.getElementById('projectGrid');

function renderPortfolio() {
  if (!projectGrid) return;
  
  projectGrid.innerHTML = '';
  portfolioItems.forEach(item => {
    const card = document.createElement('article');
    card.className = 'project-card hover-elevate';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x230?text=${encodeURIComponent(item.title)}'">
      <div class="project-body">
        <span class="project-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

renderPortfolio();


// ==========================================
// 4. ANIMASI MUNCUL HALUS SAAT DI-SCROLL
// ==========================================
const observerOptions = {
  threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

setTimeout(() => {
  document.querySelectorAll('.card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';
    scrollObserver.observe(el);
  });
}, 100);


// ==========================================
// 5. VALIDASI FORM KONTAK
// ==========================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !message) {
      formFeedback.style.color = '#ef4444';
      formFeedback.textContent = 'Harap lengkapi semua kolom sebelum mengirim pesan!';
      return;
    }

    formFeedback.style.color = '#10b981';
    formFeedback.textContent = `Terima kasih, ${name}! Pesan Anda telah berhasil terkirim.`;
    contactForm.reset();
  });
}