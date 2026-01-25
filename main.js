// ================== متغيرات النظام ==================
let cart = JSON.parse(localStorage.getItem('mady-cart')) || [];
let currentCategory = 'mattresses';

// ================== بيانات المنتجات ==================
const productsData = {
    mattresses: [
        {
            id: 1,
            name: "رويال 25 سم - الإصدار الذهبي",
            img: "img/(1).webp",
            category: "royal",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [2595, 3115, 4040, 4270, 4566, 4788],
            details: `مرتبة رويال بسمك 25 سم - الخيار الأمثل للراحة اليومية\n• إسفنج عالي الكثافة 120 كجم/م³ لتدعيم مثالي\n• تصميم طبي معتمد من أطباء العظام\n• دعم كامل للظهر والرقبة والكتفين\n• قماش تريكو سوبر سوفت قابل للغسل\n• مقاومة للبكتيريا والعث بنسبة 99.9%\n• تهوية متطورة لمنع التعرق\n• مناسبة لجميع فئات العمر\n• ضمان شامل 10 سنوات ضد الهبوط`,
            features: ["دعم طبي متكامل", "مضاد للحساسية", "تهوية فائقة", "عمر افتراضي طويل"],
            badge: "الأكثر مبيعاً"
        },
        {
            id: 2,
            name: "رويال 30 سم - النسخة المميزة",
            img: "img/(2).webp",
            category: "royal",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [2944, 3340, 4555, 4870, 5190, 5445],
            details: `مرتبة رويال بسمك 30 سم - نسخة متطورة للراحة الفائقة\n• طبقات إسفنج متميزة للدعم المتكامل\n• نظام تهوية متقدم بفتحات هوائية ذكية\n• سطح مرتبة مصمم هندسياً لتوزيع الوزن بالتساوي\n• حماية كاملة من آلام الظهر والرقبة المزمنة\n• خامة فائقة النعومة للنوم العميق بدون إزعاج\n• طبقة عازلة للصوت والاهتزازات\n• ضمان شامل 10 سنوات مع خدمة صيانة مجانية`,
            features: ["راحة فائقة", "تبريد متقدم", "عزل صوتي", "تصميم عصري"],
            badge: "الأفضل تقييماً"
        },
        {
            id: 3,
            name: "جولد 30 سم - ذاكرة الشكل",
            img: "img/(3).webp",
            category: "gold",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [3490, 3800, 4820, 5150, 5490, 5760],
            details: `مرتبة جولد الفاخرة بتقنية Memory Foam المتطورة\n• إسفنج ذاكرة الشكل يتكيف مع هيئة الجسم الفريدة\n• تقنية التبريد الذكية Blue Cool Technology\n• طبقة لاتكس طبيعي للراحة القصوى والنعومة\n• تصميم يقلل الحركة الزوجية أثناء النوم\n• سطح هيبوالرجينيك لمقاومة الحساسية\n• تحسين جودة النوم بنسبة 40% وفق الدراسات\n• ضمان 10 سنوات مع شهادة جودة أوروبية`,
            features: ["ذاكرة الشكل", "تبريد ذكي", "لاتكس طبيعي", "هدوء تام"],
            badge: "تكنولوجيا متطورة"
        },
        {
            id: 4,
            name: "فريندز 30 سم - صديق للشباب",
            img: "img/(4).webp",
            category: "friends",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [3940, 4150, 5225, 5580, 5950, 6240],
            details: `مرتبة فريندز المخصصة للأطفال والشباب\n• دعم صحي متكامل للعمود الفقري في مراحل النمو\n• خامات آمنة 100% وصديقة للبيئة\n• حماية فعالة من الحساسية والربو\n• سطح مضاد للبكتيريا والعث والغبار\n• تصميم يتحمل الحركة والنشاط اليومي\n• ألوان وأنماط تناسب جميع الأذواق\n• ضمان 10 سنوات مع مراعاة معايير السلامة`,
            features: ["صديق للأطفال", "آمن صحياً", "مقاوم للبكتيريا", "ألوان جذابة"],
            badge: "مخصص للشباب"
        },
        {
            id: 5,
            name: "بلوتوب 25 سم - التبريد الذكي",
            img: "img/(5).webp",
            category: "bluetop",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [4280, 4500, 5670, 6050, 6455, 6770],
            details: `مرتبة بلوتوب بتقنية Blue Top الحصرية\n• طبقة جل مبردة تمتص الحرارة طوال الليل\n• نظام تبريد متقدم ينظم درجة حرارة الجسم\n• مثالية للمناطق الحارة وللذين يعانون من التعرق\n• تحسين جودة النوم في الأجواء الدافئة\n• سطح فائق النعومة مع تبريد نشط\n• تقلل درجة حرارة الجسم 5 درجات في الصيف\n• ضمان 10 سنوات مع تقنية التبريد الدائمة`,
            features: ["تبريد متقدم", "مثالي للصيف", "تنظيم حراري", "راحة استثنائية"],
            badge: "التبريد الذكي"
        },
        {
            id: 6,
            name: "ماريوت 20 سم - الفندقية الفاخرة",
            img: "img/(6).webp",
            category: "marriott",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [4020, 4200, 5295, 5650, 6025, 6320],
            details: `مرتبة ماريوت الفندقية بسمك 20 سم\n• تجربة نوم فاخرة كما في الفنادق الخمس نجوم\n• إسفنج طبي عالي الجودة بكثافة 150 كجم/م³\n• سطح فندقي مستورد بنسيج القطن المصري الفاخر\n• دعم فائق للظهر مع نعومة لا تضاهى\n• مقاومة للتشوه والحفر مع مرور الوقت\n• تصميم أنيق يناسب جميع الديكورات\n• ضمان 10 سنوات بمواصفات فندقية عالمية`,
            features: ["تجربة فندقية", "نعومة فائقة", "قطن مصري", "ديكور أنيق"],
            badge: "فاخرة"
        },
        {
            id: 7,
            name: "ماريوت 25 سم - الإصدار المميز",
            img: "img/(7).webp",
            category: "marriott",
            sizes: ["100", "120", "150", "160", "170", "180"],
            prices: [4435, 4600, 5805, 6195, 6610, 6935],
            details: `النسخة الممتازة من ماريوت بسمك 25 سم\n• طبقات إضافية من الراحة والتدعيم الطبي\n• إسفنج Memory Foam مع طبقة لاتكس طبيعي\n• سطح Diamond Stitch الفاخر المقاوم للتآكل\n• دعم مثالي للعظام والمفاصل طوال الليل\n• مقاومة تامة للهبوط والتشوه لمدة 15 سنة\n• تصميم فاخر ينافس المراتب العالمية\n• ضمان 10 سنوات مع شهادة جودة دولية`,
            features: ["طبقات مزدوجة", "ذاكرة الشكل", "سطح ألماسي", "جودة عالمية"],
            badge: "الإصدار المميز"
        }
    ],

    accessories: [
        {
            id: 101,
            name: "وسادة طبية ذاكرة الشكل",
            img: "img/pillow.webp",
            category: "pillows",
            price: 200,
            details: `وسادة طبية طبية بإسفنج Memory Foam المتطور\n• تدعم الرقبة والرأس بشكل طبي مثالي\n• تقلل آلام الرقبة والصداع النصفي\n• تصميم يتكيف مع شكل رأسك الفريد\n• غطاء قطن 100% قابل للإزالة والغسل\n• مقاومة للعث والبكتيريا بنسبة 99%\n• تحسن جودة النوم \n• مناسبة للاستخدام الطبي واليومي`,
            features: ["دعم طبي", "ذاكرة الشكل", "قابلة للغسل", "مضادة للحساسية"],
            badge: "الأكثر طلباً"
        },
        {
            id: 102,
            name: "غطاء مرتبة واقي فاخر",
            img: "Almany_500x.jpg",
            category: "protectors",
            sizes: ["100", "120", "150", "160", "170", "180", "190", "195", "200"],
            prices: [250, 300, 375, 450, 500, 550, 600, 600, 600],
            details: `غطاء واقي للمرتبة بمواصفات فاخرة\n• مضاد للماء والبقع والحوادث اليومية\n• قماش ناعم ومسام تسمح بالتهوية الكاملة\n• يحمي المرتبة من السوائل والأتربة والغبار\n• قابل للغسل في الغسالة بدرجة حرارة مناسبة\n• يطيل عمر المرتبة ويحافظ على نظافتها\n• مثالي للأطفال وكبار السن\n• حماية كاملة مع راحة تامة`,
            features: ["مضاد للماء", "قابل للغسل", "حماية كاملة", "تهوية جيدة"],
            badge: "ضروري"
        },
        {
            id: 103,
            name: "وسائد ديكور مريحة",
            img: "Almany_500x.jpg",
            category: "decor",
            sizes: ["40×40", "50×50", "60×60"],
            prices: [150, 200, 250],
            details: `وسائد ديكور تجمع بين الجمال والراحة\n• إسفنج عالي الجودة مع حشوة السيليكون الناعم\n• أقمشة متنوعة تناسب جميع الديكورات\n• حواف مطرزة بدقة وإتقان\n• قابلة للغسل مع الاحتفاظ بالشكل\n• تضيف لمسة جمالية لغرفة النوم\n• متعددة الاستخدامات للجلوس والاتكاء\n• ألوان وأنماط متنوعة للاختيار منها`,
            features: ["ديكور راقي", "متعددة الاستخدام", "ألوان متنوعة", "جودة عالية"],
            badge: "جديد"
        }
    ]
};

// ================== التهيئة الرئيسية ==================
document.addEventListener('DOMContentLoaded', function() {
    console.log('جاري تهيئة الموقع...');
    
    // إخفاء شاشة التحميل
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 800);
    
    // تهيئة جميع الأنظمة
    initializeTheme();
    initializeMenu();
    initializeScroll();
    initializeFAQ();
    initializeCart();
    initializeProducts();
    initializeReviews();
    initializeSmoothScroll();
    initializeAnimations();
    
    console.log('تم تهيئة الموقع بنجاح');
});

// ================== نظام الثيم ==================
function initializeTheme() {
    try {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        
        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", function() {
                const current = document.documentElement.getAttribute("data-theme");
                const newTheme = current === "dark" ? "light" : "dark";
                document.documentElement.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
            });
        }
    } catch (error) {
        console.log('خطأ في نظام الثيم:', error);
    }
}

// ================== نظام القائمة ==================
function initializeMenu() {
    try {
        const menuToggle = document.getElementById("menuToggle");
        const navMenu = document.getElementById("navMenu");
        const menuIcon = document.getElementById("menuIcon");
        const navOverlay = document.getElementById("navOverlay");
        
        if (!menuToggle || !navMenu) return;
        
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            if (navOverlay) navOverlay.classList.toggle("active");
            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars");
                menuIcon.classList.toggle("fa-xmark");
            }
        });
        
        if (navOverlay) {
            navOverlay.addEventListener("click", function() {
                navMenu.classList.remove("active");
                navOverlay.classList.remove("active");
                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                }
            });
        }
        
        // إغلاق القائمة عند النقر على أي رابط
        const navLinks = document.querySelectorAll(".nav a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navMenu.classList.remove("active");
                if (navOverlay) navOverlay.classList.remove("active");
                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                }
            });
        });
    } catch (error) {
        console.log('خطأ في نظام القائمة:', error);
    }
}

// ================== نظام التمرير ==================
function initializeScroll() {
    try {
        // تأثير الهيدر
        const topbar = document.querySelector(".topbar");
        if (topbar) {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 50) {
                    topbar.classList.add("scrolled");
                } else {
                    topbar.classList.remove("scrolled");
                }
            });
        }
        
        // زر العودة للأعلى
        const backToTop = document.getElementById("backToTop");
        if (backToTop) {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 300) {
                    backToTop.classList.add("visible");
                } else {
                    backToTop.classList.remove("visible");
                }
            });
            
            backToTop.addEventListener("click", function() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    } catch (error) {
        console.log('خطأ في نظام التمرير:', error);
    }
}

// ================== نظام الأسئلة المتكررة ==================
function initializeFAQ() {
    try {
        const faqQuestions = document.querySelectorAll(".faq-question");
        
        faqQuestions.forEach(function(question) {
            question.addEventListener("click", function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains("active");
                
                // إغلاق جميع الأسئلة الأخرى
                document.querySelectorAll(".faq-item").forEach(function(item) {
                    item.classList.remove("active");
                });
                
                // فتح السؤال المختار
                if (!isActive) {
                    faqItem.classList.add("active");
                }
            });
        });
        
        console.log('تم تهيئة نظام الأسئلة المتكررة');
    } catch (error) {
        console.log('خطأ في نظام الأسئلة المتكررة:', error);
    }
}

// ================== نظام السلة ==================
function initializeCart() {
    try {
        // تحميل السلة من التخزين المحلي
        const savedCart = localStorage.getItem('mady-cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
        
        updateCartUI();
        
        // تفريغ السلة
        const clearCartBtn = document.getElementById("clear-cart");
        if (clearCartBtn) {
            clearCartBtn.addEventListener("click", function() {
                if (cart.length === 0) {
                    showInfoPopup("تنبيه", "سلة المشتريات فارغة بالفعل");
                    return;
                }
                showConfirmPopup("تفريغ السلة", "هل تريد تفريغ سلة المشتريات بالكامل؟", "warning", function() {
                    clearCart();
                    showSuccessPopup("تم تفريغ السلة بنجاح");
                });
            });
        }
        
        // إرسال الطلب عبر واتساب
        const checkoutBtn = document.getElementById("checkout-whatsapp");
        if (checkoutBtn) {
            checkoutBtn.addEventListener("click", checkoutToWhatsApp);
        }
        
        // إغلاق popup السلة
        const cartPopupClose = document.getElementById("cart-popup-close");
        if (cartPopupClose) {
            cartPopupClose.addEventListener("click", function() {
                const cartPopup = document.getElementById("cart-popup");
                if (cartPopup) {
                    cartPopup.style.display = "none";
                }
            });
        }
        
        console.log('تم تهيئة نظام السلة');
    } catch (error) {
        console.log('خطأ في نظام السلة:', error);
    }
}

// ================== نظام المنتجات ==================
function initializeProducts() {
    try {
        renderProducts(currentCategory);
        
        // التبويبات
        const tabs = document.querySelectorAll(".tab-btn");
        tabs.forEach(function(tab) {
            tab.addEventListener("click", function() {
                // إزالة النشاط من جميع التبويبات
                tabs.forEach(function(t) {
                    t.classList.remove("active");
                });
                
                // إضافة النشاط للتبويب المختار
                this.classList.add("active");
                
                // عرض المنتجات
                renderProducts(this.dataset.tab);
            });
        });
        
        console.log('تم تهيئة نظام المنتجات');
    } catch (error) {
        console.log('خطأ في نظام المنتجات:', error);
    }
}

function renderProducts(category) {
    try {
        const productsContainer = document.getElementById("products-container");
        if (!productsContainer) return;
        
        productsContainer.innerHTML = "";
        currentCategory = category;
        
        const products = productsData[category] || [];
        
        products.forEach(function(product) {
            const card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute('data-id', product.id);
            
            let sizesSelect = "";
            let initialPrice = product.price || product.prices?.[0] || 0;
            
            if (product.sizes && product.prices) {
                sizesSelect = `
                    <div class="size-selector">
                        <label class="size-label">اختر المقاس:</label>
                        <select class="select-size" data-product-id="${product.id}">
                            ${product.sizes.map(function(size, i) {
                                const price = product.prices[i] || product.prices[0];
                                return `<option value="${i}" data-price="${price}">${size} ${category === "mattresses" ? "سم" : ""}</option>`;
                            }).join("")}
                        </select>
                        <div class="size-hint">
                            <i class="fas fa-info-circle"></i>
                            المقاسات 190 / 195 / 200 سم - نفس السعر
                        </div>
                    </div>
                `;
            }
            
            card.innerHTML = `
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price" data-product-id="${product.id}">${initialPrice}</span>
                        <span class="price-unit">جنيه</span>
                    </div>
                    ${sizesSelect}
                    <div class="product-actions">
                        <button class="btn-add-cart" data-product-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> أضف للسلة
                        </button>
                        <button class="btn-details" data-product-id="${product.id}">
                            <i class="fas fa-info-circle"></i> التفاصيل
                        </button>
                    </div>
                </div>
            `;
            
            productsContainer.appendChild(card);
        });
        
        // إضافة الأحداث للمنتجات
        attachProductEvents();
        
    } catch (error) {
        console.log('خطأ في عرض المنتجات:', error);
    }
}

function attachProductEvents() {
    try {
        // حدث تغيير المقاس
        document.querySelectorAll(".select-size").forEach(function(select) {
            select.addEventListener("change", function() {
                const productId = this.getAttribute('data-product-id');
                const selectedOption = this.options[this.selectedIndex];
                const newPrice = selectedOption.getAttribute('data-price');
                
                if (newPrice && productId) {
                    const priceElement = document.querySelector(`.current-price[data-product-id="${productId}"]`);
                    if (priceElement) {
                        priceElement.textContent = newPrice;
                    }
                }
            });
        });
        
        // حدث إضافة للسلة
        document.querySelectorAll(".btn-add-cart").forEach(function(button) {
            button.addEventListener("click", function() {
                const productId = parseInt(this.getAttribute('data-product-id'));
                const category = currentCategory;
                const product = productsData[category]?.find(p => p.id === productId);
                
                if (product) {
                    addToCart(product);
                }
            });
        });
        
        // حدث عرض التفاصيل
        document.querySelectorAll(".btn-details").forEach(function(button) {
            button.addEventListener("click", function() {
                const productId = parseInt(this.getAttribute('data-product-id'));
                const category = currentCategory;
                const product = productsData[category]?.find(p => p.id === productId);
                
                if (product) {
                    showProductDetails(product.details, product.name);
                }
            });
        });
        
    } catch (error) {
        console.log('خطأ في إضافة الأحداث للمنتجات:', error);
    }
}

// ================== إضافة منتج للسلة ==================
function addToCart(product) {
    try {
        const productCard = document.querySelector(`.product-card[data-id="${product.id}"]`);
        let selectedSize = "غير محدد";
        let selectedPrice = product.price || product.prices?.[0] || 0;
        
        if (productCard && product.sizes) {
            const sizeSelect = productCard.querySelector(".select-size");
            if (sizeSelect) {
                const selectedIndex = sizeSelect.value;
                selectedSize = product.sizes[selectedIndex] || "غير محدد";
                selectedPrice = product.prices?.[selectedIndex] || product.prices[0];
                selectedSize += currentCategory === "mattresses" ? " سم" : "";
            }
        }
        
        const cartItem = {
            id: `${product.id}-${selectedSize}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            size: selectedSize,
            price: selectedPrice,
            quantity: 1,
            img: product.img,
            category: currentCategory
        };
        
        // البحث عن المنتج الموجود
        const existingItemIndex = cart.findIndex(function(item) {
            return item.productId === cartItem.productId && item.size === cartItem.size;
        });
        
        if (existingItemIndex > -1) {
            // زيادة الكمية إذا المنتج موجود
            cart[existingItemIndex].quantity += 1;
        } else {
            // إضافة منتج جديد
            cart.push(cartItem);
        }
        
        saveCart();
        updateCartUI();
        showSuccessPopup(`${product.name}<br>تمت الإضافة إلى السلة بنجاح`);
        
    } catch (error) {
        console.log('خطأ في إضافة المنتج للسلة:', error);
        showErrorPopup("خطأ", "حدث خطأ أثناء إضافة المنتج للسلة");
    }
}

// ================== تحديث واجهة السلة ==================
function updateCartUI() {
    try {
        const cartCount = cart.reduce(function(count, item) {
            return count + item.quantity;
        }, 0);
        
        const cartTotal = cart.reduce(function(total, item) {
            return total + (item.price * item.quantity);
        }, 0);
        
        // تحديث العداد في الهيدر
        const cartCountElement = document.getElementById('cart-count');
        const cartBadgeElement = document.getElementById('cart-badge');
        
        if (cartCountElement) cartCountElement.textContent = cartCount;
        if (cartBadgeElement) cartBadgeElement.textContent = cartCount;
        
        // تحديث قائمة المنتجات
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSummary = document.getElementById('cart-summary');
        
        if (!cartItemsContainer) return;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-cart-plus"></i>
                    <p>سلة المشتريات فارغة</p>
                    <p class="empty-cart-sub">أضف منتجات من الأعلى لتبدأ التسوق</p>
                </div>
            `;
            if (cartSummary) cartSummary.classList.add('hidden');
        } else {
            if (cartSummary) cartSummary.classList.remove('hidden');
            
            // عرض المنتجات في السلة
            cartItemsContainer.innerHTML = cart.map(function(item, index) {
                return `
                    <div class="cart-item" data-index="${index}">
                        <div class="cart-item-image">
                            <img src="${item.img}" alt="${item.name}" onerror="this.src='logo.png'">
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <div class="cart-item-size">المقاس: ${item.size}</div>
                            <div class="cart-item-price">${item.price} جنيه</div>
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn minus" data-index="${index}">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn plus" data-index="${index}">+</button>
                            </div>
                            <button class="remove-item" data-index="${index}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
            
            // تحديث المجموع
            const summaryCount = document.getElementById('summary-count');
            const summaryTotal = document.getElementById('summary-total');
            const totalItems = document.getElementById('total-items');
            
            if (summaryCount) summaryCount.textContent = cartCount;
            if (summaryTotal) summaryTotal.textContent = `${cartTotal} جنيه`;
            if (totalItems) totalItems.textContent = cartCount;
            
            // إضافة الأحداث للأزرار في السلة
            cartItemsContainer.querySelectorAll('.quantity-btn.minus').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    updateCartQuantity(index, -1);
                });
            });
            
            cartItemsContainer.querySelectorAll('.quantity-btn.plus').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    updateCartQuantity(index, 1);
                });
            });
            
            cartItemsContainer.querySelectorAll('.remove-item').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    showConfirmPopup("حذف المنتج", "هل تريد حذف هذا المنتج من السلة؟", "warning", function() {
                        removeFromCart(index);
                    });
                });
            });
        }
        
    } catch (error) {
        console.log('خطأ في تحديث واجهة السلة:', error);
    }
}

// ================== تحديث الكمية في السلة ==================
function updateCartQuantity(index, change) {
    try {
        if (index < 0 || index >= cart.length) return;
        
        cart[index].quantity += change;
        
        if (cart[index].quantity < 1) {
            showConfirmPopup("حذف المنتج", "هل تريد حذف هذا المنتج من السلة؟", "warning", function() {
                cart.splice(index, 1);
                saveCart();
                updateCartUI();
                showSuccessPopup("تم حذف المنتج من السلة");
            });
        } else {
            saveCart();
            updateCartUI();
        }
        
    } catch (error) {
        console.log('خطأ في تحديث الكمية:', error);
    }
}

// ================== حذف منتج من السلة ==================
function removeFromCart(index) {
    try {
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            saveCart();
            updateCartUI();
        }
    } catch (error) {
        console.log('خطأ في حذف المنتج:', error);
    }
}

// ================== تفريغ السلة ==================
function clearCart() {
    try {
        cart = [];
        saveCart();
        updateCartUI();
    } catch (error) {
        console.log('خطأ في تفريغ السلة:', error);
    }
}

// ================== حفظ السلة ==================
function saveCart() {
    try {
        localStorage.setItem('mady-cart', JSON.stringify(cart));
    } catch (error) {
        console.log('خطأ في حفظ السلة:', error);
    }
}

// ================== إرسال الطلب عبر واتساب ==================
function checkoutToWhatsApp() {
    try {
        if (cart.length === 0) {
            showInfoPopup("السلة فارغة", "أضف منتجات إلى السلة أولاً");
            return;
        }
        
        let message = `🚀 *طلب جديد من موقع ماضي للمراتب* 🚀\n\n`;
        message += `👤 *معلومات الطلب:*\n`;
        message += `📅 التاريخ: ${new Date().toLocaleDateString('ar-EG')}\n`;
        message += `⏰ الوقت: ${new Date().toLocaleTimeString('ar-EG')}\n\n`;
        
        message += `🛒 *المنتجات المطلوبة:*\n`;
        cart.forEach(function(item, index) {
            message += `${index + 1}. ${item.name}\n`;
            message += `   📏 المقاس: ${item.size}\n`;
            message += `   🔢 الكمية: ${item.quantity}\n`;
            message += `   💰 السعر: ${item.price} جنيه\n`;
            message += `   💵 الإجمالي: ${item.price * item.quantity} جنيه\n\n`;
        });
        
        const total = cart.reduce(function(sum, item) {
            return sum + (item.price * item.quantity);
        }, 0);
        
        message += `💰 *المجموع الكلي:* ${total} جنيه\n\n`;
        message += `📍 *تفاصيل العميل:*\n`;
        message += `يرجى إرسال الاسم ورقم الهاتف والعنوان\n\n`;
        message += `📞 *للتواصل:*\n`;
        message += `واتساب المبيعات: 0100 105 4393\n`;
        message += `واتساب الدعم: 0100 676 4087`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/201001054393?text=${encodedMessage}`, '_blank');
        
        showSuccessPopup("جاري فتح واتساب<br>لإرسال طلبك...");
        
    } catch (error) {
        console.log('خطأ في إرسال الطلب:', error);
        showErrorPopup("خطأ", "حدث خطأ أثناء إرسال الطلب");
    }
}

// ================== نظام التقييمات ==================
function initializeReviews() {
    try {
        const reviewsContainer = document.getElementById("reviewsContainer");
        if (!reviewsContainer) return;
        
        const allReviews = [
            { name: "أحمد محمد", avatar: "أ", rating: 5, text: "مرتبة ممتازة والنوم بقى مريح جدًا. فرق واضح من أول أسبوع.", date: "قبل 3 أيام" },
            { name: "سارة علي", avatar: "س", rating: 5, text: "خدمة محترمة والتوصيل سريع. أنصح أي حد محتار.", date: "قبل أسبوع" },
            { name: "محمود حسن", avatar: "م", rating: 4, text: "المرتبة مريحة جدًا بس كانت تقيلة شوية في النقل.", date: "قبل 5 أيام" }
        ];
        
        reviewsContainer.innerHTML = allReviews.map(function(review) {
            return `
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-avatar">${review.avatar}</div>
                        <div class="review-info">
                            <h4>${review.name}</h4>
                            <div class="stars">
                                ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
                            </div>
                            <small class="review-date">${review.date}</small>
                        </div>
                    </div>
                    <p class="review-text">"${review.text}"</p>
                </div>
            `;
        }).join('');
        
    } catch (error) {
        console.log('خطأ في نظام التقييمات:', error);
    }
}

// ================== التمرير السلس ==================
function initializeSmoothScroll() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(function(link) {
            link.addEventListener("click", function(e) {
                const href = this.getAttribute("href");
                if (href === "#" || href === "#!") return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: "smooth", 
                        block: "start" 
                    });
                }
            });
        });
    } catch (error) {
        console.log('خطأ في التمرير السلس:', error);
    }
}

// ================== تأثيرات الظهور ==================
function initializeAnimations() {
    try {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll(".feature-card, .service-card, .review-card, .product-card").forEach(function(el) {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    } catch (error) {
        console.log('خطأ في تأثيرات الظهور:', error);
    }
}

// ================== نظام الـ Popups ==================
function showProductDetails(details, title) {
    try {
        const popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.innerHTML = `
            <div class="popup-content product-details-popup">
                <div class="popup-header">
                    <h3>${title || "تفاصيل المنتج"}</h3>
                    <button class="close-popup"><i class="fas fa-times"></i></button>
                </div>
                <div class="popup-body">
                    <div class="details-text">${details.replace(/\n/g, '<br>• ')}</div>
                </div>
                <div class="popup-footer">
                    <button class="btn-hero close-details">حسناً</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // إضافة الأحداث
        const closePopup = popup.querySelector('.close-popup');
        const closeDetails = popup.querySelector('.close-details');
        
        if (closePopup) {
            closePopup.addEventListener('click', function() {
                document.body.removeChild(popup);
            });
        }
        
        if (closeDetails) {
            closeDetails.addEventListener('click', function() {
                document.body.removeChild(popup);
            });
        }
        
        // إغلاق بالنقر خارج المحتوى
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                document.body.removeChild(popup);
            }
        });
        
    } catch (error) {
        console.log('خطأ في عرض تفاصيل المنتج:', error);
    }
}

function showSuccessPopup(message) {
    showPopup('نجاح', message, 'success');
}

function showInfoPopup(title, message) {
    showPopup(title, message, 'info');
}

function showErrorPopup(title, message) {
    showPopup(title, message, 'error');
}

function showConfirmPopup(title, message, type, onConfirm) {
    try {
        const popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.innerHTML = `
            <div class="popup-content confirm-popup">
                <div class="popup-header ${type}">
                    <h3>${title}</h3>
                    <button class="close-popup"><i class="fas fa-times"></i></button>
                </div>
                <div class="popup-body">
                    <div class="popup-icon ${type}">
                        <i class="fas fa-${type === 'warning' ? 'exclamation-triangle' : 
                                         type === 'error' ? 'exclamation-circle' : 
                                         'info-circle'}"></i>
                    </div>
                    <p>${message}</p>
                </div>
                <div class="popup-footer">
                    <button class="btn-secondary cancel-btn">إلغاء</button>
                    <button class="btn-hero confirm-btn">تأكيد</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // إضافة الأحداث
        const closePopup = popup.querySelector('.close-popup');
        const cancelBtn = popup.querySelector('.cancel-btn');
        const confirmBtn = popup.querySelector('.confirm-btn');
        
        function closePopupFunc() {
            document.body.removeChild(popup);
        }
        
        if (closePopup) closePopup.addEventListener('click', closePopupFunc);
        if (cancelBtn) cancelBtn.addEventListener('click', closePopupFunc);
        
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function() {
                if (onConfirm && typeof onConfirm === 'function') {
                    onConfirm();
                }
                closePopupFunc();
            });
        }
        
        // إغلاق بالنقر خارج المحتوى
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopupFunc();
            }
        });
        
    } catch (error) {
        console.log('خطأ في عرض popup التأكيد:', error);
    }
}

function showPopup(title, message, type) {
    try {
        const popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.innerHTML = `
            <div class="popup-content ${type}-popup">
                <div class="popup-header ${type}">
                    <h3>${title}</h3>
                    <button class="close-popup"><i class="fas fa-times"></i></button>
                </div>
                <div class="popup-body">
                    <div class="popup-icon ${type}">
                        <i class="fas fa-${type === 'success' ? 'check-circle' : 
                                         type === 'error' ? 'exclamation-circle' : 
                                         'info-circle'}"></i>
                    </div>
                    <p>${message}</p>
                </div>
                <div class="popup-footer">
                    <button class="btn-hero close-popup-btn">حسناً</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // إضافة الأحداث
        const closePopup = popup.querySelector('.close-popup');
        const closeBtn = popup.querySelector('.close-popup-btn');
        
        function closePopupFunc() {
            document.body.removeChild(popup);
        }
        
        if (closePopup) closePopup.addEventListener('click', closePopupFunc);
        if (closeBtn) closeBtn.addEventListener('click', closePopupFunc);
        
        // إغلاق بالنقر خارج المحتوى
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopupFunc();
            }
        });
        
        // إغلاق تلقائي بعد 3 ثواني
        setTimeout(closePopupFunc, 3000);
        
    } catch (error) {
        console.log('خطأ في عرض popup:', error);
    }
}

// ================== إضافة CSS للـ Popups ==================
(function addPopupStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .custom-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
            animation: fadeIn 0.3s ease;
        }
        
        .popup-content {
            background: var(--card);
            border-radius: 16px;
            width: 100%;
            max-width: 500px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
        }
        
        .popup-header {
            padding: 20px 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(11, 164, 176, 0.1);
        }
        
        .popup-header.success { background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; }
        .popup-header.warning { background: linear-gradient(135deg, #f39c12, #e67e22); color: white; }
        .popup-header.info { background: linear-gradient(135deg, #3498db, #2980b9); color: white; }
        .popup-header.error { background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; }
        
        .popup-header h3 {
            margin: 0;
            font-size: 1.3rem;
            color: inherit;
        }
        
        .close-popup {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 5px;
            opacity: 0.8;
            transition: opacity 0.3s;
        }
        
        .close-popup:hover {
            opacity: 1;
        }
        
        .popup-body {
            padding: 30px 25px;
            text-align: center;
        }
        
        .popup-icon {
            font-size: 4rem;
            margin-bottom: 20px;
        }
        
        .popup-icon.success { color: #2ecc71; }
        .popup-icon.warning { color: #f39c12; }
        .popup-icon.info { color: #3498db; }
        .popup-icon.error { color: #e74c3c; }
        
        .popup-body p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--text);
            margin: 0;
        }
        
        .popup-footer {
            padding: 20px 25px;
            display: flex;
            gap: 15px;
            justify-content: center;
            border-top: 1px solid rgba(11, 164, 176, 0.1);
        }
        
        .popup-footer button {
            min-width: 120px;
        }
        
        .product-details-popup .popup-body {
            text-align: right;
            max-height: 60vh;
            overflow-y: auto;
        }
        
        .details-text {
            line-height: 1.8;
            color: var(--text);
            font-size: 1rem;
            text-align: right;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        /* تحسين للجوال */
        @media (max-width: 576px) {
            .custom-popup {
                padding: 10px;
            }
            
            .popup-content {
                max-width: 95%;
            }
            
            .popup-footer {
                flex-direction: column;
            }
            
            .popup-footer button {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
})();