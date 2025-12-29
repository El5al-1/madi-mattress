// ================== بيانات المنتجات ==================

const productsData = {
  mattresses: [
    {
      name: "رويال 25سم",

      img: "(8).png",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [2595, 3115, 4040, 4270, 4566, 4788],

      details:
        "مرتبة رويال بسمك 25 سم مصنوعة من إسفنج عالي الكثافة 120 كجم/م³، توفر دعم متوسط للجسم وراحة فائقة. مناسبة لجميع الأعمار وتتميز بقماش خارجي مضاد للبكتيريا.",
    },

    {
      name: "رويال 30سم",

      img: "(9).png",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [2944, 3340, 4555, 4870, 5190, 5445],

      details:
        "النسخة الأكثر سمكاً من رويال بطبقات إسفنج إضافية لراحة فائقة. تتميز بنظام تهوية محسّن ودعم أفضل للظهر والرقبة.",
    },

    {
      name: "جولد 30سم",

      img: "(10).png",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [3490, 3800, 4820, 5150, 5490, 5760],

      details:
        "مرتبة جولد الفاخرة بإسفنج ميموري فوم يتشكل مع الجسم. تقنية تبريد متقدمة وطبقة لاتكس طبيعي للراحة القصوى.",
    },

    {
      name: "فريندز 30سم",

      img: "(11).png",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [3940, 4150, 5225, 5580, 5950, 6240],

      details:
        "مرتبة فريندز المخصصة للأطفال والشباب بدعم صحي للعمود الفقري. خامات آمنة وصديقة للبيئة مع حماية من الحساسية.",
    },

    {
      name: "بلوتوب 25سم",

      img: "(12).png",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [4280, 4500, 5670, 6050, 6455, 6770],

      details:
        "مرتبة بلوتوب بتقنية Blue Top الحصرية لتبريد متقدم. طبقة جل مبردة تمتص الحرارة وتوفر نوم هادئ في الصيف.",
    },

    {
      name: "ماريوت 20سم",

      img: "(13).png",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [4020, 4200, 5295, 5650, 6025, 6320],

      details:
        "مرتبة ماريوت الفندقية بسمك 20 سم توفر تجربة نوم فاخرة كما في الفنادق الخمس نجوم. إسفنج طبي عالي الجودة.",
    },

    {
      name: "ماريوت 25سم",

      img: "(14).jpg",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [4435, 4600, 5805, 6195, 6610, 6935],

      details:
        "النسخة الممتازة من ماريوت بسمك 25 سم. طبقات إضافية من الراحة مع ضمان 10 سنوات ومقاومة للتشوه.",
    },
  ],

  accessories: [
    {
      name: "خدادية ",

      img: "pillow.png",

      price: 200,

      details:
        "خدادية طبية بإسفنج ميموري فوم تدعم الرقبة والرأس. تقلل آلام الرقبة وتوفر نوم مريح. غطاء قابل للإزالة والغسل.",
    },

    {
      name: "غطاء مرتبة  ",

      img: "Almany_500x.jpg",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [250, 300, 375, 450, 500, 550],

      details:
        "غطاء واقي مضاد للماء والبقع يحمي المرتبة من السوائل والأتربة. قماش ناعم ومسام تسمح بالتهوية.",
    },

    {
      name: " مخدات  ",

      img: "Almany_500x.jpg",

      sizes: ["100", "120", "150", "160", "170", "180"],

      prices: [250, 300, 375, 450, 500, 550],

      details:
        "غطاء واقي مضاد للماء والبقع يحمي المرتبة من السوائل والأتربة. قماش ناعم ومسام تسمح بالتهوية.",
    },
  ],
};

// ================== إزالة شاشة التحميل ==================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading-screen").classList.add("hidden");
  }, 2000);
});

// ================== تحميل الثيم المحفوظ ==================
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  renderProducts("mattresses");
});

// ================== تغيير الثيم ==================
document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ================== القائمة المنسدلة ==================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuIcon");
const navOverlay = document.getElementById("navOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navOverlay.classList.toggle("active");
  menuIcon.classList.toggle("rotate");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

// إغلاق القائمة عند النقر على Overlay
navOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navOverlay.classList.remove("active");
  menuIcon.classList.remove("rotate");
  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-xmark");
});

// إغلاق القائمة عند النقر على أي رابط
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    menuIcon.classList.remove("rotate");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
  });
});

// ================== Header Scroll Effect ==================
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});

// ================== Back to Top Button ==================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================== FAQ Accordion ==================
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains("active");

    // إغلاق جميع العناصر
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // فتح العنصر المحدد إذا لم يكن مفتوحاً
    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

// ================== عرض المنتجات ==================
const container = document.getElementById("products-container");
const tabs = document.querySelectorAll(".tab-btn");

function renderProducts(category) {
  container.innerHTML = "";
  productsData[category].forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    let sizesSelect = "";
    let initialPrice = product.price || product.prices[0];

    if (product.sizes && product.prices) {
      sizesSelect = `
                        <label style="font-size:14px; color:var(--muted); margin-top:10px; font-weight: 600;">اختر المقاس:</label>
                        <select class="select-size" data-prices='${JSON.stringify(
                          product.prices
                        )}'>
                            ${product.sizes
                              .map(
                                (size, i) =>
                                  `<option value="${i}">${size} ${
                                    category === "mattresses" ? "سم" : ""
                                  }</option>`
                              )
                              .join("")}
                        </select>`;
    }

    card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${product.img}" alt="${product.name}" loading="lazy">
                            <h3>${product.name}</h3>
                            <p class="price">${initialPrice} جنيه</p>
                            ${sizesSelect}
                            <button class="details-btn">عرض التفاصيل</button>
                        </div>
                        <div class="card-back">
                            <h3>${product.name}</h3>
                            <p>${product.details}</p>
                            <button class="add-to-cart">
                                <i class="fab fa-whatsapp"></i> اطلبها الآن
                            </button>
                            <button class="back-btn">رجوع</button>
                        </div>
                    </div>
                `;
    container.appendChild(card);
  });
  attachEvents();
}

function attachEvents() {
  // تحديث السعر عند تغيير المقاس
  container.querySelectorAll(".select-size").forEach((select) => {
    select.addEventListener("change", (e) => {
      const prices = JSON.parse(e.target.dataset.prices);
      const card = e.target.closest(".product-card");
      const priceEl = card.querySelector(".price");
      priceEl.textContent = prices[e.target.value] + " جنيه";
    });
  });

  // قلب الكارت للتفاصيل
  container.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".product-card").classList.add("flipped");
    });
  });

  // الرجوع للواجهة الأمامية
  container.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".product-card").classList.remove("flipped");
    });
  });

  // إضافة للسلة (فتح واتساب)
  const popup = document.getElementById("cart-popup");
  const popupMessage = document.getElementById("cart-popup-message");
  const popupClose = document.getElementById("cart-popup-close");

  container.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      const productName = card.querySelector(".card-back h3").textContent;
      const priceEl = card.querySelector(".price");
      const price = priceEl ? priceEl.textContent : "";

      // الحصول على المقاس المختار (لو موجود select)
      let sizeSelect = card.querySelector(".select-size");
      let selectedSize = sizeSelect
        ? sizeSelect.options[sizeSelect.selectedIndex].text
        : "";

      // عرض الـ Popup
      popupMessage.textContent = `جاري التحويل لواتساب...`;
      popup.style.display = "flex";

      // فتح واتساب مع رسالة جاهزة بعد ثانية
      setTimeout(() => {
        const message = `مرحباً 👋
أريد طلب: *${productName}*
المقاس: *${selectedSize}*
السعر: *${price}*

أرجو التواصل معي لإتمام الطلب.`;

        window.open(
          `https://wa.me/201001054393?text=${encodeURIComponent(message)}`,
          "_blank"
        );
        popup.style.display = "none";
      }, 1000);
    });
  });

  // إغلاق الـ Popup
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // إمكانية إغلاق الـ popup عند الضغط على الخلفية
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}

// ================== التبديل بين التبويبات ==================
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.tab);
  });
});

// ================== تأثيرات الظهور عند التمرير ==================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// تطبيق التأثيرات على الكروت
setTimeout(() => {
  document
    .querySelectorAll(".feature-card, .service-card, .review-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });
}, 100);

// ================== Smooth Scroll for all links ==================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ================== Performance Optimization ==================
// Lazy loading للصور
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.src;
  });
} else {
  // Fallback للمتصفحات القديمة
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}
// ================== REVIEWS SYSTEM ==================

const allReviews = [
  {
    name: "أحمد محمد",
    avatar: "أ",
    rating: 5,
    text: "مرتبة ممتازة والنوم بقى مريح جدًا. فرق واضح من أول أسبوع.",
  },
  {
    name: "سارة علي",
    avatar: "س",
    rating: 5,
    text: "خدمة محترمة والتوصيل سريع. أنصح أي حد محتار.",
  },
  {
    name: "محمود حسن",
    avatar: "م",
    rating: 4,
    text: "المرتبة مريحة جدًا بس كانت تقيلة شوية في النقل.",
  },
  {
    name: "محمد عبد الله",
    avatar: "م",
    rating: 5,
    text: "جودة عالية وسعر مناسب مقارنة بالسوق.",
  },
  {
    name: "نورا سامي",
    avatar: "ن",
    rating: 5,
    text: "تعامل راقي وضمان حقيقي.",
  },
  {
    name: "إسلام فتحي",
    avatar: "إ",
    rating: 4,
    text: "تجربة ممتازة عمومًا.",
  },
  {
    name: "هبة حسين",
    avatar: "ه",
    rating: 5,
    text: "أنصح بيها لأي حد بيعاني من وجع الضهر.",
  },
  {
    name: "خالد رجب",
    avatar: "خ",
    rating: 5,
    text: "أفضل مرتبة اشتريتها.",
  },
  {
    name: "ياسمين علي",
    avatar: "ي",
    rating: 5,
    text: "راحة ونوم هادي.",
  },
  {
    name: "علي محمود",
    avatar: "ع",
    rating: 4,
    text: "منتج ممتاز وخدمة محترمة.",
  },
];

const reviewsContainer = document.getElementById("reviewsContainer");

function renderReviews() {
  reviewsContainer.innerHTML = "";

  const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach((review) => {
    reviewsContainer.innerHTML += `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${review.avatar}</div>
          <div class="review-info">
            <h4>${review.name}</h4>
            <div class="stars">
              ${"★".repeat(review.rating)}
            </div>
          </div>
        </div>
        <p class="review-text">"${review.text}"</p>
      </div>
    `;
  });
}

// أول تحميل
renderReviews();

// تغيير التقييمات كل ساعتين
setInterval(renderReviews, 2 * 60 * 60 * 1000);
