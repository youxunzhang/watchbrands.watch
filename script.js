// 50 Global Watch Manufacturers Directory
const manufacturers = [
  {
    name: "Rolex",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Maintenance", "Repair"],
    email: "contact@rolex.com",
    phone: "+41 22 302 22 00",
    website: "https://www.rolex.com/"
  },
  {
    name: "Omega",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@omega.ch",
    phone: "+41 21 318 22 11",
    website: "https://www.omegawatches.com/"
  },
  {
    name: "Patek Philippe",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Restoration"],
    email: "info@patek.com",
    phone: "+41 22 884 20 20",
    website: "https://www.patek.com/"
  },
  {
    name: "Audemars Piguet",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "contact@audemarspiguet.com",
    phone: "+41 21 642 32 32",
    website: "https://www.audemarspiguet.com/"
  },
  {
    name: "Vacheron Constantin",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Restoration"],
    email: "info@vacheron-constantin.com",
    phone: "+41 22 930 20 05",
    website: "https://www.vacheron-constantin.com/"
  },
  {
    name: "Tag Heuer",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@tagheuer.com",
    phone: "+41 32 919 80 00",
    website: "https://www.tagheuer.com/"
  },
  {
    name: "Breitling",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@breitling.com",
    phone: "+41 32 654 54 54",
    website: "https://www.breitling.com/"
  },
  {
    name: "Longines",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@longines.com",
    phone: "+41 32 942 52 00",
    website: "https://www.longines.com/"
  },
  {
    name: "Blancpain",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Restoration"],
    email: "info@blancpain.com",
    phone: "+41 21 796 36 36",
    website: "https://www.blancpain.com/"
  },
  {
    name: "Breguet",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Restoration"],
    email: "info@breguet.com",
    phone: "+41 22 318 36 36",
    website: "https://www.breguet.com/"
  },
  {
    name: "IWC Schaffhausen",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@iwc.com",
    phone: "+41 52 635 65 65",
    website: "https://www.iwc.com/"
  },
  {
    name: "Jaeger-LeCoultre",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Restoration"],
    email: "info@jaeger-lecoultre.com",
    phone: "+41 21 845 02 02",
    website: "https://www.jaeger-lecoultre.com/"
  },
  {
    name: "Panerai",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@panerai.com",
    phone: "+41 21 925 71 11",
    website: "https://www.panerai.com/"
  },
  {
    name: "Piaget",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@piaget.com",
    phone: "+41 32 366 81 00",
    website: "https://www.piaget.com/"
  },
  {
    name: "Cartier",
    country: "France",
    services: ["Luxury", "Classic", "Restoration", "Repair"],
    email: "contact@cartier.com",
    phone: "+33 1 58 18 16 00",
    website: "https://www.cartier.com/"
  },
  {
    name: "Montblanc",
    country: "Germany",
    services: ["Luxury", "Classic", "Repair"],
    email: "info@montblanc.com",
    phone: "+49 40 840010",
    website: "https://www.montblanc.com/"
  },
  {
    name: "Seiko",
    country: "Japan",
    services: ["Japanese", "Classic", "Maintenance", "Repair"],
    email: "support@seiko.co.jp",
    phone: "+81 3-3564-2111",
    website: "https://www.seikowatches.com/"
  },
  {
    name: "Citizen",
    country: "Japan",
    services: ["Japanese", "Classic", "Maintenance", "Repair"],
    email: "info@citizen.co.jp",
    phone: "+81 3-3496-4211",
    website: "https://www.citizenwatch.com/"
  },
  {
    name: "Casio",
    country: "Japan",
    services: ["Japanese", "Sport", "Maintenance", "Repair"],
    email: "support@casio.co.jp",
    phone: "+81 3-5334-4111",
    website: "https://www.casio.com/"
  },
  {
    name: "Grand Seiko",
    country: "Japan",
    services: ["Luxury", "Japanese", "Classic", "Repair"],
    email: "info@grand-seiko.com",
    phone: "+81 3-3564-2111",
    website: "https://www.grand-seiko.com/"
  },
  {
    name: "Hamilton",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Sport", "Repair"],
    email: "info@hamiltonwatch.com",
    phone: "+41 32 343 92 11",
    website: "https://www.hamiltonwatch.com/"
  },
  {
    name: "Tissot",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Sport", "Repair"],
    email: "info@tissot.ch",
    phone: "+41 32 933 31 11",
    website: "https://www.tissotwatches.com/"
  },
  {
    name: "Rado",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Repair"],
    email: "info@rado.com",
    phone: "+41 32 655 61 11",
    website: "https://www.rado.com/"
  },
  {
    name: "Hublot",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@hublot.com",
    phone: "+41 22 990 90 00",
    website: "https://www.hublot.com/"
  },
  {
    name: "Zenith",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@zenith-watches.com",
    phone: "+41 32 930 65 00",
    website: "https://www.zenith-watches.com/"
  },
  {
    name: "Chopard",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@chopard.com",
    phone: "+41 22 319 05 05",
    website: "https://www.chopard.com/"
  },
  {
    name: "Bulgari",
    country: "Italy",
    services: ["Luxury", "Classic", "Repair"],
    email: "info@bulgari.com",
    phone: "+39 06 688101",
    website: "https://www.bulgari.com/"
  },
  {
    name: "Richard Mille",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@richardmille.com",
    phone: "+41 32 755 70 00",
    website: "https://www.richardmille.com/"
  },
  {
    name: "Girard-Perregaux",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@girard-perregaux.com",
    phone: "+41 32 911 33 33",
    website: "https://www.girard-perregaux.com/"
  },
  {
    name: "Ulysse Nardin",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Classic", "Repair"],
    email: "info@ulysse-nardin.com",
    phone: "+41 32 720 40 40",
    website: "https://www.ulysse-nardin.com/"
  },
  {
    name: "Glashütte Original",
    country: "Germany",
    services: ["Luxury", "Classic", "Repair"],
    email: "info@glashuette-original.com",
    phone: "+49 35053 46 0",
    website: "https://www.glashuette-original.com/"
  },
  {
    name: "A. Lange & Söhne",
    country: "Germany",
    services: ["Luxury", "Classic", "Repair"],
    email: "info@lange-soehne.com",
    phone: "+49 35053 44 0",
    website: "https://www.alange-soehne.com/"
  },
  {
    name: "Bell & Ross",
    country: "France",
    services: ["Luxury", "Sport", "Repair"],
    email: "info@bellross.com",
    phone: "+33 1 73 73 93 00",
    website: "https://www.bellross.com/"
  },
  {
    name: "Corum",
    country: "Switzerland",
    services: ["Luxury", "Swiss", "Sport", "Repair"],
    email: "info@corum.ch",
    phone: "+41 32 967 06 70",
    website: "https://www.corum-watches.com/"
  },
  {
    name: "Maurice Lacroix",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Repair"],
    email: "info@mauricelacroix.com",
    phone: "+41 32 724 60 00",
    website: "https://www.mauricelacroix.com/"
  },
  {
    name: "Raymond Weil",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Repair"],
    email: "info@raymond-weil.com",
    phone: "+41 22 884 00 55",
    website: "https://www.raymond-weil.com/"
  },
  {
    name: "Oris",
    country: "Switzerland",
    services: ["Swiss", "Sport", "Repair"],
    email: "info@oris.ch",
    phone: "+41 61 975 11 11",
    website: "https://www.oris.ch/"
  },
  {
    name: "Ball Watch",
    country: "Switzerland",
    services: ["Swiss", "Sport", "Repair"],
    email: "info@ballwatch.com",
    phone: "+41 32 724 53 11",
    website: "https://www.ballwatch.com/"
  },
  {
    name: "Frederique Constant",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Repair"],
    email: "info@frederique-constant.com",
    phone: "+41 22 860 00 10",
    website: "https://www.frederiqueconstant.com/"
  },
  {
    name: "Mido",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Repair"],
    email: "info@mido.ch",
    phone: "+41 32 494 60 11",
    website: "https://www.midowatches.com/"
  },
  {
    name: "Movado",
    country: "Switzerland",
    services: ["Swiss", "Classic", "Repair"],
    email: "info@movado.com",
    phone: "+41 32 724 65 65",
    website: "https://www.movado.com/"
  },
  {
    name: "Bulova",
    country: "USA",
    services: ["Classic", "Sport", "Repair"],
    email: "info@bulova.com",
    phone: "+1 718-204-3300",
    website: "https://www.bulova.com/"
  },
  {
    name: "Timex",
    country: "USA",
    services: ["Classic", "Sport", "Repair"],
    email: "info@timex.com",
    phone: "+1 203-346-5000",
    website: "https://www.timex.com/"
  },
  {
    name: "Fossil",
    country: "USA",
    services: ["Classic", "Sport", "Repair"],
    email: "info@fossil.com",
    phone: "+1 800-449-3056",
    website: "https://www.fossil.com/"
  },
  {
    name: "Swatch",
    country: "Switzerland",
    services: ["Swiss", "Sport", "Classic", "Repair"],
    email: "info@swatch.com",
    phone: "+41 32 343 95 00",
    website: "https://www.swatch.com/"
  },
  {
    name: "Certina",
    country: "Switzerland",
    services: ["Swiss", "Sport", "Repair"],
    email: "info@certina.com",
    phone: "+41 32 343 92 11",
    website: "https://www.certina.com/"
  },
  {
    name: "Alpina",
    country: "Switzerland",
    services: ["Swiss", "Sport", "Repair"],
    email: "info@alpina-watches.com",
    phone: "+41 22 860 44 00",
    website: "https://www.alpinawatches.com/"
  },
  {
    name: "Junghans",
    country: "Germany",
    services: ["Classic", "Repair"],
    email: "info@junghans.de",
    phone: "+49 7421 18 0",
    website: "https://www.junghans.de/"
  }
];

function createManufacturerCard(m) {
  return `
    <div class="manufacturer-card">
      <div class="manufacturer-header">
        <div class="manufacturer-logo"><i class="fas fa-clock"></i></div>
        <div class="manufacturer-info">
          <h3>${m.name}</h3>
          <div class="country">${m.country}</div>
        </div>
      </div>
      <div class="manufacturer-details">
        <div class="services-list">
          ${m.services.map(s => `<span class="service-tag">${s}</span>`).join(' ')}
        </div>
      </div>
      <div class="contact-info">
        <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:${m.email}">${m.email}</a></div>
        <div class="contact-item"><i class="fas fa-phone"></i> <a href="tel:${m.phone}">${m.phone}</a></div>
        <div class="contact-item"><i class="fas fa-globe"></i> <a href="${m.website}" target="_blank">Website</a></div>
      </div>
    </div>
  `;
}

function renderManufacturers(list) {
  const grid = document.getElementById('manufacturersGrid');
  grid.innerHTML = list.map(createManufacturerCard).join('');
}

function filterManufacturers(query, tag) {
  let filtered = manufacturers;
  if (tag && tag !== 'all') {
    filtered = filtered.filter(m => m.services.map(s => s.toLowerCase()).includes(tag));
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.country.toLowerCase().includes(q) ||
      m.services.some(s => s.toLowerCase().includes(q))
    );
  }
  renderManufacturers(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  renderManufacturers(manufacturers);

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  let currentTag = 'all';

  searchInput.addEventListener('input', () => {
    filterManufacturers(searchInput.value, currentTag);
  });
  searchBtn.addEventListener('click', () => {
    filterManufacturers(searchInput.value, currentTag);
  });

  // Filter tags
  document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTag = btn.dataset.filter;
      filterManufacturers(searchInput.value, currentTag);
    });
  });

  // Responsive menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => navMenu.classList.remove('active'))
  );
}); 