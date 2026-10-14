/**
 * SORA Boutique - Interactive JavaScript Engine
 */

// ================= PRODUCT DATABASE =================
const products = [
  {
    id: 1,
    name: 'T-Shirt Short',
    category: 'men',
    categoryLabel: "Men's Ready-to-Wear",
    price: 890.98,
    rating: 4.9,
    reviews: 32,
    badge: 'NEW ARRIVAL',
    color: 'Sand Beige',
    colorGroup: 'beige',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A relaxed-fit premium cotton blend short-sleeved t-shirt crafted from breathable combed yarns. Tailored with refined double-needle stitching and an effortless draped silhouette.'
  },
  {
    id: 2,
    name: 'Short-Sleeved Shirts',
    category: 'women',
    categoryLabel: "Women's Collection",
    price: 912.98,
    rating: 5.0,
    reviews: 48,
    badge: 'BESTSELLER',
    color: 'Mulberry Plum',
    colorGroup: 'plum',
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An elegant cinched waist button-down short-sleeved shirt made with luxurious mulberry silk and tailored soft drape detailing.'
  },
  {
    id: 3,
    name: 'Sleeved Shirts with Inner',
    category: 'men',
    categoryLabel: "Men's Outerwear",
    price: 629.98,
    rating: 4.8,
    reviews: 19,
    badge: 'TRENDING',
    color: 'Espresso Brown',
    colorGroup: 'brown',
    sizes: ['M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1603252109360-909baaf261c7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586363104862-3a5e222ee513?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Layered contemporary sleeved overshirt accompanied by an ultra-soft organic cotton undershirt for effortless everyday style.'
  },
  {
    id: 4,
    name: 'Pleated Linen Dress',
    category: 'women',
    categoryLabel: "Women's Resort",
    price: 420.00,
    rating: 4.9,
    reviews: 27,
    badge: 'POPULAR',
    color: 'Blush Rose',
    colorGroup: 'pink',
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Flowy pleated A-line dress in subtle blush tone, designed for warm summer evenings and casual chic gatherings.'
  },
  {
    id: 5,
    name: 'Mustard Tan Work Jacket',
    category: 'men',
    categoryLabel: "Men's Outerwear",
    price: 540.00,
    rating: 4.7,
    reviews: 15,
    badge: 'LIMITED',
    color: 'Espresso Brown',
    colorGroup: 'brown',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Structured utility work jacket in warm caramel tone with dual patch pockets and reinforced topstitching.'
  },
  {
    id: 6,
    name: 'Emerald Co-Ord Suit',
    category: 'women',
    categoryLabel: "Women's Suiting",
    price: 780.00,
    rating: 5.0,
    reviews: 36,
    badge: 'EXCLUSIVE',
    color: 'Emerald Green',
    colorGroup: 'green',
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Tailored emerald green oversized blazer and matching straight-leg trousers crafted from Italian virgin wool blend.'
  },
  {
    id: 7,
    name: 'Beige Tailored Cargo',
    category: 'men',
    categoryLabel: "Men's Trousers",
    price: 390.00,
    rating: 4.6,
    reviews: 22,
    badge: 'ESSENTIAL',
    color: 'Sand Beige',
    colorGroup: 'beige',
    sizes: ['M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Modern relaxed wide-leg cargo trousers featuring clean pleats and minimal understated side pockets.'
  },
  {
    id: 8,
    name: 'Floral Chiffon Summer Dress',
    category: 'girls',
    categoryLabel: "Girls' Collection",
    price: 499.00,
    rating: 4.8,
    reviews: 14,
    badge: 'FEATURED',
    color: 'Blush Rose',
    colorGroup: 'pink',
    sizes: ['XS', 'S', 'M'],
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A breezy, beautifully layered floral chiffon dress designed for youthful elegance and lightweight all-day comfort.'
  },
  {
    id: 9,
    name: 'Classic Cotton Henley Set',
    category: 'boys',
    categoryLabel: "Boys' Collection",
    price: 450.00,
    rating: 4.9,
    reviews: 18,
    badge: 'NEW',
    color: 'Off White',
    colorGroup: 'white',
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Soft organic cotton textured Henley set featuring natural wooden buttons and relaxed breathable trousers.'
  }
];

// ================= WHATSAPP INQUIRY CONFIGURATION =================
const WHATSAPP_CONFIG = {
  phone: '1234567890', // Boutique WhatsApp Phone (with country code, digits only)
  boutiqueName: 'SORA Boutique',
  currency: 'INR'
};

// ================= APP STATE =================
let cart = JSON.parse(localStorage.getItem('sora_cart')) || [];

// Filter State for Shop Listing Page
let filterState = {
  category: 'all',
  maxPrice: 1000,
  size: 'all',
  color: 'all',
  sortBy: 'featured',
  gridCols: 3
};

// Pagination State
let currentPage = 1;
const itemsPerPage = 6;

// PDP State
let currentPdpProduct = null;
let currentPdpSize = 'M';
let currentPdpColor = 'Sand Earth';
let currentPdpQty = 1;

// ================= DOM SELECTORS =================
const siteHeader = document.getElementById('siteHeader');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartCountBadge = document.getElementById('cartCountBadge');
const cartDrawerCount = document.getElementById('cartDrawerCount');

const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewModal = document.getElementById('quickViewModal');
const quickViewBody = document.getElementById('quickViewBody');

const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');

// Shop Listing Elements
const shopProductsGrid = document.getElementById('shopProductsGrid');
const shopEmptyState = document.getElementById('shopEmptyState');
const shopSidebar = document.getElementById('shopSidebar');
const productsCountText = document.getElementById('productsCountText');
const activeFiltersRow = document.getElementById('activeFiltersRow');
const shopPagination = document.getElementById('shopPagination');

// PDP Elements
const pdpTitle = document.getElementById('pdpTitle');

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initStickyHeader();
  initMobileMenu();
  initSearch();

  // If on Shop Listing page
  if (shopProductsGrid) {
    initShopPage();
    initCustomSortDropdown();
  }

  // If on Product Detail Page (PDP)
  if (pdpTitle) {
    initPdpPage();
  }
});

// ================= STICKY HEADER =================
function initStickyHeader() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });
}

// ================= MOBILE MENU =================
function initMobileMenu() {
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
      mobileMenuToggle?.setAttribute('aria-expanded', 'false');
      const icon = mobileMenuToggle?.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
}

// ================= PRODUCT DETAIL PAGE (PDP) ENGINE =================
function initPdpPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'), 10) || 1;

  const product = products.find(p => p.id === productId) || products[0];
  currentPdpProduct = product;
  currentPdpSize = product.sizes ? product.sizes[0] : 'M';
  currentPdpColor = product.color || 'Sand Earth';
  currentPdpQty = 1;

  // Populate Breadcrumb
  const breadcrumbCat = document.getElementById('pdpBreadcrumbCat');
  const breadcrumbTitle = document.getElementById('pdpBreadcrumbTitle');
  if (breadcrumbCat) breadcrumbCat.textContent = product.category.toUpperCase();
  if (breadcrumbTitle) breadcrumbTitle.textContent = product.name;

  // Populate Title, Tag, Rating & Price
  const tagEl = document.getElementById('pdpCategoryTag');
  const priceEl = document.getElementById('pdpPrice');
  const ratingScore = document.getElementById('pdpRatingScore');
  const ratingCount = document.getElementById('pdpRatingCount');
  const descEl = document.getElementById('pdpDescription');
  const badgeEl = document.getElementById('pdpBadge');

  if (pdpTitle) pdpTitle.textContent = product.name;
  if (tagEl) tagEl.textContent = product.categoryLabel || product.category.toUpperCase();
  if (priceEl) priceEl.textContent = `₹ ${product.price.toFixed(2)}`;
  if (ratingScore) ratingScore.textContent = product.rating.toFixed(1);
  if (ratingCount) ratingCount.textContent = `(${product.reviews} verified reviews)`;
  if (descEl) descEl.textContent = product.description;
  if (badgeEl) badgeEl.textContent = product.badge || 'SIGNATURE';

  // Populate Images
  const mainImg = document.getElementById('pdpMainImage');
  if (mainImg) mainImg.src = product.image;

  const thumbsContainer = document.getElementById('pdpThumbnails');
  if (thumbsContainer && product.gallery) {
    thumbsContainer.innerHTML = product.gallery.map((imgUrl, i) => `
      <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="switchMainImage(this, '${imgUrl}')">
        <img src="${imgUrl}" alt="Gallery ${i + 1}" />
      </div>
    `).join('');
  }

  // Populate Sizes
  const sizePicker = document.getElementById('pdpSizePicker');
  if (sizePicker && product.sizes) {
    sizePicker.innerHTML = product.sizes.map((s, i) => `
      <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectPdpSize(this, '${s}')">${s}</button>
    `).join('');
  }

  // Update Color Label
  const colorLabel = document.getElementById('pdpSelectedColorName');
  if (colorLabel) colorLabel.textContent = currentPdpColor;
}

function switchMainImage(thumbElement, imgUrl) {
  const mainImg = document.getElementById('pdpMainImage');
  if (mainImg) mainImg.src = imgUrl;

  document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
  if (thumbElement) thumbElement.classList.add('active');
}

function selectPdpColor(element, colorName) {
  currentPdpColor = colorName;
  document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
  if (element) element.classList.add('active');

  const colorLabel = document.getElementById('pdpSelectedColorName');
  if (colorLabel) colorLabel.textContent = colorName;
}

function selectPdpSize(element, size) {
  currentPdpSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  if (element) element.classList.add('active');

  const sizeLabel = document.getElementById('pdpSelectedSizeLabel');
  if (sizeLabel) sizeLabel.textContent = `${size} (Selected)`;
}

function changePdpQty(delta) {
  currentPdpQty = Math.max(1, currentPdpQty + delta);
  const qtyVal = document.getElementById('pdpQtyVal');
  if (qtyVal) qtyVal.textContent = currentPdpQty;
}

function handlePdpAddToCart() {
  if (!currentPdpProduct) return;
  addToCart(currentPdpProduct.id, currentPdpQty, currentPdpSize, currentPdpColor);
}

function handlePdpWhatsAppInquiry() {
  if (!currentPdpProduct) return;
  inquireSingleProductWhatsApp(currentPdpProduct.id, currentPdpSize, currentPdpQty, currentPdpColor);
}

function toggleAccordion(buttonEl) {
  const item = buttonEl.closest('.accordion-item');
  if (item) {
    item.classList.toggle('active');
  }
}

// Size Guide Modal
function openSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  const overlay = document.getElementById('sizeGuideOverlay');
  modal?.classList.add('active');
  overlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  const overlay = document.getElementById('sizeGuideOverlay');
  modal?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.style.overflow = '';
}

// ================= SHOP LISTING PAGE ENGINE =================
function initShopPage() {
  updateCategoryCounts();

  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    setCategoryFilter(catParam.toLowerCase());
  } else {
    renderShopProducts();
  }
}

function updateCategoryCounts() {
  const counts = {
    all: products.length,
    men: products.filter(p => p.category === 'men').length,
    women: products.filter(p => p.category === 'women').length,
    girls: products.filter(p => p.category === 'girls').length,
    boys: products.filter(p => p.category === 'boys').length
  };

  const countBadgeAll = document.getElementById('catCountAll');
  const countBadgeMen = document.getElementById('catCountMen');
  const countBadgeWomen = document.getElementById('catCountWomen');
  const countBadgeGirls = document.getElementById('catCountGirls');
  const countBadgeBoys = document.getElementById('catCountBoys');

  if (countBadgeAll) countBadgeAll.textContent = `(${counts.all})`;
  if (countBadgeMen) countBadgeMen.textContent = `(${counts.men})`;
  if (countBadgeWomen) countBadgeWomen.textContent = `(${counts.women})`;
  if (countBadgeGirls) countBadgeGirls.textContent = `(${counts.girls})`;
  if (countBadgeBoys) countBadgeBoys.textContent = `(${counts.boys})`;
}

function matchesColorFilter(product, filterColor) {
  if (!filterColor || filterColor === 'all') return true;
  const target = filterColor.toLowerCase();
  if (product.colorGroup && product.colorGroup.toLowerCase() === target) return true;

  const pColor = (product.color || '').toLowerCase();
  if (pColor.includes(target)) return true;

  const colorAliases = {
    'beige': ['beige', 'sand', 'earth', 'tan', 'khaki'],
    'brown': ['brown', 'espresso', 'caramel', 'tan'],
    'plum': ['plum', 'mulberry', 'purple', 'violet', 'burgundy'],
    'green': ['green', 'emerald', 'sage', 'olive', 'forest'],
    'pink': ['pink', 'blush', 'rose', 'coral'],
    'white': ['white', 'off white', 'cream', 'ivory', 'ecru']
  };

  const aliases = colorAliases[target];
  if (aliases) {
    return aliases.some(alias => pColor.includes(alias));
  }
  return false;
}

function updateActiveFilterChips() {
  if (!activeFiltersRow) return;

  const chips = [];

  if (filterState.category !== 'all') {
    const catLabels = {
      men: "Men's Wear",
      women: "Women's Wear",
      girls: "Girls' Collection",
      boys: "Boys' Collection"
    };
    const label = catLabels[filterState.category] || filterState.category;
    chips.push(`
      <span class="active-filter-chip">
        Category: ${label}
        <button onclick="setCategoryFilter('all')" aria-label="Remove category filter">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </span>
    `);
  }

  if (filterState.maxPrice < 1000) {
    chips.push(`
      <span class="active-filter-chip">
        Max Price: ₹${filterState.maxPrice}
        <button onclick="handlePriceRange(1000); const p = document.getElementById('priceRange'); if (p) p.value = 1000;" aria-label="Reset price filter">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </span>
    `);
  }

  if (filterState.size !== 'all') {
    chips.push(`
      <span class="active-filter-chip">
        Size: ${filterState.size}
        <button onclick="toggleSizeFilter(null, 'all')" aria-label="Remove size filter">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </span>
    `);
  }

  if (filterState.color !== 'all') {
    chips.push(`
      <span class="active-filter-chip">
        Color: ${filterState.color.toUpperCase()}
        <button onclick="filterByColor('${filterState.color}')" aria-label="Remove color filter">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </span>
    `);
  }

  if (chips.length > 0) {
    chips.push(`
      <button class="clear-all-filters-btn" onclick="resetAllFilters()">Clear All</button>
    `);
    activeFiltersRow.innerHTML = chips.join('');
    activeFiltersRow.style.display = 'flex';
  } else {
    activeFiltersRow.innerHTML = '';
    activeFiltersRow.style.display = 'none';
  }
}

function goToPage(page) {
  currentPage = page;
  renderShopProducts();
  const target = document.querySelector('.shop-header-section') || shopProductsGrid;
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderPagination(totalItems) {
  if (!shopPagination) return;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    shopPagination.style.display = 'none';
    return;
  }

  shopPagination.style.display = 'flex';
  let html = `
    <button class="page-nav-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})" aria-label="Previous Page">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="page-num-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})" aria-label="Page ${i}">
        ${i}
      </button>
    `;
  }

  html += `
    <button class="page-nav-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})" aria-label="Next Page">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  shopPagination.innerHTML = html;
}

function renderShopProducts() {
  if (!shopProductsGrid) return;

  let filtered = products.filter(p => {
    const matchesCat = (filterState.category === 'all') || (p.category === filterState.category);
    const matchesPrice = p.price <= filterState.maxPrice;
    const matchesSize = (filterState.size === 'all') || (p.sizes && p.sizes.includes(filterState.size));
    const matchesColor = matchesColorFilter(p, filterState.color);
    return matchesCat && matchesPrice && matchesSize && matchesColor;
  });

  if (filterState.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filterState.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (filterState.sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filterState.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (productsCountText) {
    if (filtered.length === products.length) {
      productsCountText.textContent = `Showing all ${products.length} Products`;
    } else {
      productsCountText.textContent = `Showing ${filtered.length} of ${products.length} Products`;
    }
  }

  updateActiveFilterChips();

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = 1;
  }

  if (filtered.length === 0) {
    shopProductsGrid.innerHTML = '';
    if (shopEmptyState) shopEmptyState.style.display = 'block';
    renderPagination(0);
  } else {
    if (shopEmptyState) shopEmptyState.style.display = 'none';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

    shopProductsGrid.className = 'product-grid product-grid-3';
    shopProductsGrid.innerHTML = paginatedItems.map(product => {
      return `
        <div class="product-card" data-id="${product.id}" onclick="location.href='product-detail.html?id=${product.id}'">
          <div class="product-img-wrapper">
            ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <button class="quick-view-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">Quick View</button>
          </div>
          <div class="product-info">
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <strong>${product.rating.toFixed(1)}</strong>
              <span>(${product.reviews})</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">₹ ${product.price.toFixed(2)}</p>
            <div class="product-card-actions">
              <button class="btn-card-action btn-card-cart" onclick="event.stopPropagation(); addToCart(${product.id});" title="Add to Cart">
                <i class="fa-solid fa-bag-shopping"></i> Add to Cart
              </button>
              <button class="btn-card-action btn-card-buy btn-card-whatsapp" onclick="event.stopPropagation(); inquireSingleProductWhatsApp(${product.id});" title="Enquire">
                Enquire
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    renderPagination(filtered.length);
  }
}

// Filter Actions
function setCategoryFilter(category, btnElement) {
  filterState.category = category;

  // Sync category pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    const pillCat = pill.getAttribute('data-category');
    if (pillCat) {
      pill.classList.toggle('active', pillCat === category);
    } else {
      const text = pill.textContent.trim().toLowerCase();
      if (category === 'all') {
        pill.classList.toggle('active', text.includes('all'));
      } else {
        pill.classList.toggle('active', text === category.toLowerCase());
      }
    }
  });

  // Sync sidebar radio
  const radio = document.querySelector(`input[name="sidebarCat"][value="${category}"]`);
  if (radio) radio.checked = true;

  currentPage = 1;
  renderShopProducts();
}

function handlePriceRange(value) {
  filterState.maxPrice = parseFloat(value);
  const maxLabel = document.getElementById('maxPriceLabel');
  if (maxLabel) maxLabel.textContent = `Max: ₹${value}`;
  const priceInput = document.getElementById('priceRange');
  if (priceInput && priceInput.value !== String(value)) priceInput.value = value;

  currentPage = 1;
  renderShopProducts();
}

function toggleSizeFilter(btn, size) {
  if (filterState.size === size && size !== 'all') {
    filterState.size = 'all';
    document.querySelectorAll('.size-chip').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-size') === 'all' || b.textContent.trim().toLowerCase() === 'all');
    });
  } else {
    filterState.size = size;
    document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('active'));
    if (btn) {
      btn.classList.add('active');
    } else {
      const targetBtn = document.querySelector(`.size-chip[data-size="${size}"]`);
      if (targetBtn) targetBtn.classList.add('active');
    }
  }

  currentPage = 1;
  renderShopProducts();
}

function filterByColor(color, btnElement) {
  if (filterState.color === color) {
    filterState.color = 'all';
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    showToast('Color filter cleared');
  } else {
    filterState.color = color;
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    if (btnElement) {
      btnElement.classList.add('active');
    } else {
      const matchBtn = document.querySelector(`.color-dot[data-color="${color}"]`);
      if (matchBtn) matchBtn.classList.add('active');
    }
    showToast(`Filtering by color: ${color.toUpperCase()}`);
  }

  currentPage = 1;
  renderShopProducts();
}

function handleSortChange(sortValue) {
  filterState.sortBy = sortValue;
  updateCustomSortUI(sortValue);
  currentPage = 1;
  renderShopProducts();
}

function resetAllFilters() {
  filterState = {
    category: 'all',
    maxPrice: 1000,
    size: 'all',
    color: 'all',
    sortBy: 'featured',
    gridCols: 3
  };
  currentPage = 1;

  updateCustomSortUI('featured');

  document.querySelectorAll('.cat-pill').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === 'all');
  });

  const defaultRadio = document.querySelector('input[name="sidebarCat"][value="all"]');
  if (defaultRadio) defaultRadio.checked = true;

  const priceRange = document.getElementById('priceRange');
  if (priceRange) priceRange.value = 1000;
  const maxLabel = document.getElementById('maxPriceLabel');
  if (maxLabel) maxLabel.textContent = 'Max: ₹1000';

  document.querySelectorAll('.size-chip').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-size') === 'all' || b.textContent.trim().toLowerCase() === 'all');
  });

  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));

  renderShopProducts();
  showToast('All filters have been reset');
}

/* ================= CUSTOM LUXURY SORT DROPDOWN ================= */
function initCustomSortDropdown() {
  const container = document.getElementById('customSortDropdown');
  if (!container) return;

  const trigger = document.getElementById('sortTriggerBtn');
  const menu = document.getElementById('sortOptionsList');
  const options = menu ? menu.querySelectorAll('.custom-option') : [];

  if (!trigger || !menu) return;

  // Toggle dropdown menu
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = container.classList.toggle('active');
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Handle option click
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-value');
      if (val) {
        handleSortChange(val);
      }
      container.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    });

    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        opt.click();
      }
    });
  });

  // Keyboard navigation on trigger button
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      container.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      const selectedOrFirst = menu.querySelector('.custom-option.selected') || options[0];
      selectedOrFirst?.focus();
    } else if (e.key === 'Escape') {
      container.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Keyboard navigation inside options list
  menu.addEventListener('keydown', (e) => {
    const optArray = Array.from(options);
    const index = optArray.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % optArray.length;
      optArray[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + optArray.length) % optArray.length;
      optArray[prevIndex]?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      container.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    } else if (e.key === 'Tab') {
      container.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      container.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

function updateCustomSortUI(sortValue) {
  const container = document.getElementById('customSortDropdown');
  if (!container) return;

  const labelText = document.getElementById('selectedSortLabelText');
  const nativeSelect = document.getElementById('sortSelect');
  const options = container.querySelectorAll('.custom-option');

  if (nativeSelect && nativeSelect.value !== sortValue) {
    nativeSelect.value = sortValue;
  }

  options.forEach(opt => {
    const isSelected = opt.getAttribute('data-value') === sortValue;
    opt.classList.toggle('selected', isSelected);
    opt.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isSelected) {
      const title = opt.querySelector('.option-title')?.textContent.trim() || opt.textContent.trim();
      if (labelText) labelText.textContent = title;
    }
  });
}

function toggleSidebarFilter() {
  if (shopSidebar) {
    shopSidebar.classList.toggle('active');
  }
}

function filterByCategory(categoryName) {
  if (window.location.pathname.includes('shop.html')) {
    setCategoryFilter(categoryName);
  } else {
    window.location.href = `shop.html?category=${encodeURIComponent(categoryName)}`;
  }
}

// ================= CART & INQUIRY MANAGEMENT =================
function addToCart(productId, quantity = 1, size = 'M', color = null, openDrawer = true) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const selectedColor = color || product.color || 'Default';
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size && item.color === selectedColor);
  
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.categoryLabel || product.category,
      price: product.price,
      image: product.image,
      size: size,
      color: selectedColor,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your enquiry bag`);
  if (openDrawer) {
    openCart();
  }
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Removed "${itemName}" from your enquiry bag`);
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Your enquiry bag has been emptied');
}

function saveCart() {
  localStorage.setItem('sora_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCountBadge) cartCountBadge.textContent = totalItems;
  if (cartDrawerCount) cartDrawerCount.textContent = totalItems;
  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹ ${subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping empty-icon"></i>
        <p>Your enquiry bag is empty.</p>
        <button class="btn btn-dark-pill" onclick="closeCart()">Explore Collection</button>
      </div>
    `;
    const cartFooter = document.getElementById('cartFooter');
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    const cartFooter = document.getElementById('cartFooter');
    if (cartFooter) cartFooter.style.display = 'block';

    cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-price">₹ ${item.price.toFixed(2)} &bull; Size: ${item.size}${item.color ? ` &bull; ${item.color}` : ''}</p>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Remove item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }
}

// ================= WHATSAPP ENQUIRY GENERATOR =================
function generateCartInquiryMessage() {
  if (cart.length === 0) return '';

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let msg = `🌟 *${WHATSAPP_CONFIG.boutiqueName.toUpperCase()} - PRODUCT ENQUIRY* 🌟\n\n`;
  msg += `Hello! I would like to enquire about the following products from your collection:\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;

  cart.forEach((item, index) => {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    msg += `*${index + 1}. ${item.name}*\n`;
    if (item.category) msg += `   📁 Category: ${item.category}\n`;
    if (item.color) msg += `   🎨 Color: ${item.color}\n`;
    if (item.size) msg += `   📏 Size: ${item.size}\n`;
    msg += `   🔢 Quantity: ${item.quantity}\n`;
    msg += `   💵 Price: ₹${item.price.toFixed(2)} each\n`;
    msg += `   💰 Subtotal: ₹${itemTotal}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  });

  msg += `\n📦 *Total Products:* ${cart.length} item(s) (${totalItems} total pieces)\n`;
  msg += `💳 *Estimated Total:* ₹${totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n\n`;
  msg += `Please let me know about current stock availability, tailoring/customization, and ordering process.\n`;
  msg += `Thank you! ✨`;

  return msg;
}

function inquireAllWhatsApp() {
  if (cart.length === 0) {
    showToast('Your enquiry bag is empty. Please add items to enquire.');
    return;
  }

  const message = generateCartInquiryMessage();
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
  showToast('Opening WhatsApp with your product list enquiry...');
}

function inquireSingleProductWhatsApp(productId, size = 'M', qty = 1, color = null) {
  const prod = products.find(p => p.id === productId) || currentPdpProduct;
  if (!prod) return;

  const selectedSize = size || 'M';
  const selectedQty = qty || 1;
  const selectedColor = color || prod.color || 'Default';
  const subtotal = (prod.price * selectedQty).toFixed(2);

  let msg = `🌟 *${WHATSAPP_CONFIG.boutiqueName.toUpperCase()} - PRODUCT ENQUIRY* 🌟\n\n`;
  msg += `Hello! I would like to enquire about this product:\n\n`;
  msg += `🛍️ *Product:* ${prod.name}\n`;
  msg += `📁 *Category:* ${prod.categoryLabel || prod.category}\n`;
  msg += `🎨 *Color:* ${selectedColor}\n`;
  msg += `📏 *Size:* ${selectedSize}\n`;
  msg += `🔢 *Quantity:* ${selectedQty}\n`;
  msg += `💵 *Price:* ₹${prod.price.toFixed(2)} each\n`;
  msg += `💰 *Subtotal:* ₹${subtotal}\n\n`;
  msg += `Please let me know about availability, sizing fit, and delivery details.\n`;
  msg += `Thank you! ✨`;

  const encodedMessage = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
  showToast(`Opening WhatsApp for "${prod.name}" enquiry...`);
}

function openCart() {
  cartDrawer?.classList.add('active');
  cartOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer?.classList.remove('active');
  cartOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}

if (cartToggleBtn) {
  cartToggleBtn.addEventListener('click', openCart);
}

// ================= QUICK VIEW =================
let currentQuickViewSize = 'M';

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentQuickViewSize = 'M';

  if (quickViewBody) {
    quickViewBody.innerHTML = `
      <div class="qv-grid">
        <div class="qv-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="qv-info">
          <h3 class="qv-title">${product.name}</h3>
          <p class="qv-price">₹ ${product.price.toFixed(2)}</p>
          <p class="qv-desc">${product.description}</p>
          
          <p class="qv-options-title">Select Size</p>
          <div class="qv-sizes">
            <button class="size-pill" onclick="selectSize(this, 'S')">S</button>
            <button class="size-pill selected" onclick="selectSize(this, 'M')">M</button>
            <button class="size-pill" onclick="selectSize(this, 'L')">L</button>
            <button class="size-pill" onclick="selectSize(this, 'XL')">XL</button>
          </div>

          <div style="display: flex; gap: 10px; margin-top: 16px;">
            <button class="btn btn-outline-dark-pill" style="flex: 1;" onclick="addToCart(${product.id}, 1, currentQuickViewSize); closeQuickView();">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
            <button class="btn btn-dark-pill" style="flex: 1; display: inline-flex; align-items: center; justify-content: center;" onclick="inquireSingleProductWhatsApp(${product.id}, currentQuickViewSize, 1); closeQuickView();">
              Enquire
            </button>
          </div>
        </div>
      </div>
    `;
  }

  quickViewOverlay?.classList.add('active');
  quickViewModal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectSize(btn, size) {
  currentQuickViewSize = size;
  document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
  btn.classList.add('selected');
}

function closeQuickView() {
  quickViewOverlay?.classList.remove('active');
  quickViewModal?.classList.remove('active');
  document.body.style.overflow = '';
}

// ================= SEARCH =================
function initSearch() {
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', openSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = '<p class="search-hint">Type to search latest apparel and styles...</p>';
        return;
      }

      const matches = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p class="search-hint">No products found matching "${query}".</p>`;
      } else {
        searchResults.innerHTML = matches.map(p => `
          <div class="search-result-item" onclick="location.href='product-detail.html?id=${p.id}'">
            <div class="search-result-left">
              <img src="${p.image}" alt="${p.name}" />
              <div>
                <strong style="display: block; font-size: 0.95rem;">${p.name}</strong>
                <span style="font-size: 0.82rem; color: #79716B;">₹ ${p.price.toFixed(2)} &bull; Category: ${p.category}</span>
              </div>
            </div>
            <span class="btn btn-pill-outline-sm" style="font-size: 0.75rem;">View</span>
          </div>
        `).join('');
      }
    });
  }
}

function openSearch() {
  searchOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput && searchInput.focus(), 100);
}

function closeSearch() {
  searchOverlay?.classList.remove('active');
  document.body.style.overflow = '';
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '<p class="search-hint">Type to search latest apparel and styles...</p>';
}

// ================= NEWSLETTER =================
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('.newsletter-input');
  if (input && input.value) {
    showToast(`Thank you for subscribing, ${input.value}!`);
    input.value = '';
  }
}

// ================= TOAST SYSTEM =================
let toastTimeout;
function showToast(message) {
  if (toastMessage) toastMessage.textContent = message;
  if (toastNotification) {
    toastNotification.classList.add('active');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 3200);
  }
}

// ================= KEYBOARD ACCESSIBILITY =================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeQuickView();
    closeSearch();
    closeSizeGuideModal();
    if (shopSidebar?.classList.contains('active')) {
      toggleSidebarFilter();
    }
  }
});
