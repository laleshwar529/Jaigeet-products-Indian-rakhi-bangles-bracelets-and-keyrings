// --- Business Settings & Local Product Inventory ---
const WHATSAPP_NUMBER = "923362759713"; 

const PRODUCTS_DATA = [
    { 
        id: 1, 
        title: "Customized Bhai Rakhi for Your Brother", 
        category: "Handmade Bhai Rakhi", 
        price: 200, 
        image: "images/product-2.jpeg", 
        desc: "Make this Raksha Bandhan unforgettable with a beautifully handcrafted Bhai Rakhi. Features vibrant, high-quality premium beads and intricate threadwork. Perfectly tailored to showcase your love for your brother. Strong, comfortable, and designed to stay on his wrist as a token of your bond." 
    },
    { 
        id: 2, 
        title: "Traditional Customized Bhai Rakhi", 
        category: "Handmade Bhai Rakhi", 
        price: 200, 
        image: "images/product-3.jpeg", 
        desc: "A perfect blend of tradition and craftsmanship. This elegant Bhai Rakhi is meticulously designed using premium red and white beads (moties) on soft skin-friendly thread. Handcrafted with care, it brings a classic ethnic charm to your celebrations and ensures ultimate comfort for your brother." 
    },
    { 
        id: 3, 
        title: "Customized Double Name Luxury Rakhi", 
        category: "Double Name Rakhi", 
        price: 500, 
        image: "images/product-11.jpeg", 
        desc: "Double the love with our unique double name customizable Rakhi. Perfect for adding two special names or initials crafted with neat typography and premium accents. A true keepsake made from durable materials that your family will cherish long after the festival is over." 
    },
    { 
        id: 4, 
        title: "Customized Brother's Name Rakhi", 
        category: "Name Customizable Rakhi", 
        price: 250, 
        image: "images/product-30.jpeg", 
        desc: "Personalize this Raksha Bandhan by adding your brother's actual name to his Rakhi. Crafted with high-grade, polished letter beads and vibrant threads, this customized masterpiece adds a deeply personal touch that stands out beautifully on his wrist." 
    },
    { 
        id: 5, 
        title: "Customized Colorful Beads Name Rakhi", 
        category: "Name Customizable Rakhi", 
        price: 250, 
        image: "images/product-7.jpeg", 
        desc: "Celebrate the vibrant spirit of Rakhi with a burst of colors. This customizable name Rakhi is surrounded by premium, bright multi-colored beads. Hand-threaded to perfection, it is lightweight, visually stunning, and highly customizable to match your brother's unique personality." 
    },
    { 
        id: 6, 
        title: "Premium Handcrafted Single Ganesh Rakhi", 
        category: "Ganesh Rakhi", 
        price: 250, 
        image: "images/product-10.jpeg", 
        desc: "Bless your brother with the auspicious presence of Lord Ganesha. This premium designer Rakhi features a detailed, high-finish single Ganesh center piece embedded with protective spiritual vibes and elegant side beads. Crafted lovingly by hand for safety, prosperity, and blessings." 
    },
    { 
        id: 7, 
        title: "5 Ganesh Divine Colorful Beads Rakhi", 
        category: "Ganesh Rakhi", 
        price: 250, 
        image: "images/product-13.jpeg", 
        desc: "A grand and divine layout featuring 5 beautifully aligned Ganesha charms separated by glossy, colorful premium beads. This magnificent handcrafted Rakhi serves as a powerful symbol of good luck, health, and barrier-breaking blessings for your beloved brother." 
    },
    { 
        id: 8, 
        title: "Single Ganesh Traditional Indian Rakhi", 
        category: "Ganesh Rakhi", 
        price: 100, 
        image: "images/product-9.jpeg", 
        desc: "Simple, elegant, and rich in cultural values. This classic single Ganesh Indian Rakhi is handcrafted using holy red and yellow sacred threads. It offers a subtle yet deeply spiritual look, making it a budget-friendly yet premium choices for a traditional Rakhi ritual." 
    },
    { 
        id: 9, 
        title: "Customized Name Rakhi with Sweet Circular Buttons", 
        category: "Name Customizable Rakhi", 
        price: 150, 
        image: "images/product-29.jpeg", 
        desc: "Give your custom name Rakhi a fun and playful twist. Features cute, smooth-edged circular button letter tags that spell out any name clearly. Wound tightly on durable, comfortable yarn, this custom creation is an absolute favorite for younger brothers and teenagers." 
    },
    { 
        id: 10, 
        title: "Customized Name Rakhi with Square Shape Buttons", 
        category: "Name Customizable Rakhi", 
        price: 150, 
        image: "images/product-27.jpeg", 
        desc: "A modern, geometric design layout featuring sleek square button letter cubes to spell out your brother's name. The crisp edges and distinct contrast make the name incredibly easy to read, framed beautifully by premium rustic-themed side threads." 
    },
    { 
        id: 11, 
        title: "Customized Name Rakhi with Black Round Buttons", 
        category: "Name Customizable Rakhi", 
        price: 150, 
        image: "images/product-4.jpeg", 
        desc: "Bold, aesthetic, and trendy. This exclusive name customizable Rakhi utilizes glossy black round button beads with striking contrasting lettering. Perfect for brothers who love a modern, minimalistic, and edgy look that pairs perfectly with casual outfits." 
    },
    { 
        id: 12, 
        title: "Customized Name Rakhi with Smiley Accents", 
        category: "Name Customizable Rakhi", 
        price: 150, 
        image: "images/product-5.jpeg", 
        desc: "Spread joy and smiles this festive season! This custom-made name Rakhi is flanked by adorable, cheerful smiley face accent beads. Perfect for little kids or anyone who loves a positive, lighthearted, and uniquely vibrant celebration piece." 
    },
    { 
        id: 13, 
        title: "Single Alphabet Luxury Button Rakhi", 
        category: "Alphabet Rakhi", 
        price: 185, // Note: Adjusted slightly to match premium tier, change if 1850 was intended
        image: "images/product-21.jpeg", 
        desc: "A minimalist masterpiece focusing on a single, high-definition bold alphabet centerpiece button. Ideal for highlighting just the first initial of your brother's name. Crafted on an ultra-premium woven band that balances modern fashion statement with holy traditions." 
    },
    { 
        id: 14, 
        title: "Real Handmade Simple Evil Eye Rakhi", 
        category: "Evil Eye Rakhi", 
        price: 120, 
        image: "images/product-12.jpeg", 
        desc: "Protect your brother from negative energies with this genuine handcrafted Evil Eye Rakhi. Features a classic deep blue protective glass-style eye talisman woven perfectly into a sleek, comfortable protective string. A beautiful blend of fashion and ancient guardianship." 
    },
    { 
        id: 15, 
        title: "Moon & Star Pedal Handmade Bracelet", 
        category: "Simple Bracelet", 
        price: 300, 
        image: "images/product-16.jpeg", 
        desc: "Carry the magic of the night sky with you wherever you go. This celestial bracelet features delicate, high-polish Moon and Star pedal charms attached to an adjustable, skin-safe handcrafted cord. A wonderful, aesthetic accessory for everyday wear or gifting." 
    },
    { 
        id: 16, 
        title: "Triple Chain Name Customizable Bracelet", 
        category: "Chain Bracelet", 
        price: 500, 
        image: "images/product-17.jpeg", 
        desc: "Elevate your accessory style with this elegant multi-layered triple chain bracelet. Features a polished center bar completely customizable with your name or initials. Designed with high-durability metals and custom adjustable links for a comfortable, premium snug fit." 
    },
    { 
        id: 17, 
        title: "Milky White Triple Chain Handmade Bracelet", 
        category: "Chain Bracelet", 
        price: 600, 
        image: "images/product-19.jpeg", 
        desc: "A pure aesthetic marvel. This exquisite triple chain bracelet incorporates stunning, premium milky white gemstone beads woven seamlessly into durable custom metallic loops. Adds a graceful, luxurious touch to both traditional eastern and western party outfits." 
    },
    { 
        id: 18, 
        title: "Kids Special Customized Name Bracelet", 
        category: "Name Customizable Bracelets", 
        price: 250, 
        image: "images/product-20.jpeg", 
        desc: "The ultimate custom gift for little kids, loving sisters, and close friends! Handcrafted with smooth, round colorful acrylic letter beads that are soft against the skin. Includes an elasticized premium stretch band for easy wearing and absolute durability." 
    },
    { 
        id: 19, 
        title: "Triple Chain Butterfly Elegance Bracelet", 
        category: "Chain Bracelet", 
        price: 600, 
        image: "images/product-28.jpeg", 
        desc: "Symbolizing freedom and beauty, this layered triple chain bracelet features a gorgeous, finely detailed butterfly charm centerpiece. Hand-assembled with high-grade anti-tarnish materials, it makes a breathtaking fashion statement and an unforgettable gift item." 
    },
    { 
        id: 20, 
        title: "Little Kids Special Cute Panda Bracelet", 
        category: "Kids Bracelet", 
        price: 250, 
        image: "images/product-22.jpeg", 
        desc: "Bring an instant smile to your child's face! This highly adorable kids' bracelet boasts a super-cute, hand-painted Panda figurine charm surrounded by smooth, vibrant safety beads. Perfectly lightweight, non-toxic, and robust enough to handle playful daily adventures." 
    },
    { 
        id: 21, 
        title: "Pure Handmade Traditional Choorhi Bangles Set", 
        category: "Choorhi Bangles", 
        price: 400, 
        image: "images/product-23.jpeg", 
        desc: "Embrace ethnic luxury with this pure premium set of 4 handmade Choorhi bangles. Meticulously wrapped in high-grade velvet threads and embellished with sparkling accents, this traditional set produces a sweet, classical aesthetic ideal for weddings and festivals." 
    },
    { 
        id: 22, 
        title: "Elegant Minimalist Silver Bangles Set", 
        category: "Silver Bangles", 
        price: 400, 
        image: "images/product-25.jpeg", 
        desc: "A timeless masterpiece. This set of 4 handcrafted silver-toned metallic bangles features fine textures that capture light beautifully with every movement. Designed with smooth inner edges for daily wear, it serves as a highly versatile addition to any jewelry box." 
    },
    { 
        id: 23, 
        title: "Classic Black Moti Handcrafted Bangles Set", 
        category: "Black Bangles", 
        price: 400, 
        image: "images/product-26.jpeg", 
        desc: "Exude mystery and grace with our handcrafted set of 4 deep black moti (beaded) bangles. Every single premium bead is tightly secured by hand to form a perfect, continuous circle of elegance. A magnificent contrasting choice to accent bright colorful ethnic dresses." 
    },
    { 
        id: 24, 
        title: "Pure Handmade Premium Kashmiri Bangles Set", 
        category: "Kashmiri Bangles", 
        price: 400, 
        image: "images/product-18.jpeg", 
        desc: "Inspired by the rich heritage of artisanal craftwork, this set of 4 Kashmiri style bangles showcases breathtaking floral patterns and thread weaving techniques. Vibrant, culturally deep, and entirely made by hand to bring regal artisan vibes straight to your outfit." 
    },
    { 
        id: 25, 
        title: "Real Handmade Shimmering Golden Bangles Set", 
        category: "Golden Bangles", 
        price: 400, 
        image: "images/product-15.jpeg", 
        desc: "Add a warm, royal festive glow to your wrists. This stunning set of 4 handcrafted golden bangles is coated with an ultra-smooth finish that mimics luxury metallic sheen. Durable base structure ensures they retain their rich shape and luster for years." 
    },
    { 
        id: 26, 
        title: "Premium Fashionable Floral Gajra Bangle", 
        category: "Gajra Bangle", 
        price: 700, 
        image: "images/product-14.jpeg", 
        desc: "Experience the eternal beauty of traditional fresh flowers without the worry of wilting. This masterfully crafted Gajra bangle features realistic, premium faux flower buds intricately woven onto a comfortable adjustable base. Perfect for mehndi, haldi, and festive functions." 
    },
    { 
        id: 27, 
        title: "Royal Red Stones Hand-Set Flower Bangle", 
        category: "Flower Bangle", 
        price: 400, 
        image: "images/product-24.jpeg", 
        desc: "A statement piece featuring brilliant, rich ruby-red floral stone settings arranged beautifully along the outer core. This gorgeous handmade flower bangle injects immediate passion and luxury accents into your hands, acting as an absolute showstopper for parties." 
    },
    { 
        id: 28, 
        title: "Real Handmade Premium Durable Keyrings", 
        category: "Keyrings", 
        price: 150, 
        image: "images/product-1.jpeg", 
        desc: "Organize your keys in high style! Our premium handcrafted keyrings are assembled using strong anti-rust metal alloys and beautifully tied designer tassels. Lightweight yet extremely sturdy, they add a wonderful touch of handmade luxury to your bags or car keys." 
    },
    { 
        id: 29, 
        title: "Vibrant Colorful Balls Soft Keyring", 
        category: "Balls Keyring", 
        price: 150, 
        image: "images/product-8.jpeg", 
        desc: "A fun, lively, and highly tactile accessory! This cheerful keyring features a sequence of soft, hand-stitched colorful felt pom-pom balls attached to a heavy-duty keyring hook. Perfect for easily spotting your keys inside deep backpacks and purses." 
    },
    { 
        id: 30, 
        title: "Whimsical Colorful Butterflies Charm Keyring", 
        category: "Butterflies Keyring", 
        price: 150, 
        image: "images/product-6.jpeg", 
        desc: "Carry a sense of joy and wonder wherever you travel. This beautiful handcrafted keyring comes adorned with multiple intricately shaped multi-colored butterfly charms. Smooth edges and high-grade finishing make it a delightful accessory piece or a thoughtful souvenir." 
    }
];

const SLIDER_DATA = [
    { title: "JaiGeet Products Real Handmade", subtitle: "100% genuine handmade products direct from Pithoro, Sindh, Pakistan.", image: "images/mainpost1.jpeg" },
    { title: "Festivals Collection & Specially Raksha Bandhan", subtitle: "Made this Raksha Bandhan special for your sisters and brothers.", image: "images/mainpost2.jpeg" }
];

// --- Persistent Cart Operations ---
let cart = JSON.parse(localStorage.getItem("jaigeet_cart")) || [];
let currentSlideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    updateCartCounterGlobal();
    
    // Mobile Navigation Drawer Toggle Handler
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    if(mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => navMenu.classList.toggle("mobile-open"));
    }

    // Determine current page state execution path
    const path = window.location.pathname;
    const pageName = path.split("/").pop();

    if (pageName === "index.html" || pageName === "") {
        initHeroSlider();
        renderProductsGrid(PRODUCTS_DATA);
        const searchBar = document.getElementById("searchBar");
        if(searchBar) searchBar.addEventListener("input", handleSearch);
    } 
    else if (pageName === "product-detail.html") {
        initProductDetailPage();
    } 
    else if (pageName === "cart.html") {
        renderCartPageContent();
    }
});

// --- Cart Core Utility Functions ---
function updateCartCounterGlobal() {
    const counterEl = document.getElementById("cartCounter");
    if(counterEl) {
        counterEl.innerText = cart.reduce((total, item) => total + item.qty, 0);
    }
}

function saveCartToStorage() {
    localStorage.setItem("jaigeet_cart", JSON.stringify(cart));
    updateCartCounterGlobal();
}

function addToCart(productId) {
    const matchedItem = PRODUCTS_DATA.find(p => p.id === productId);
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...matchedItem, qty: 1 });
    }
    saveCartToStorage();
    alert(`"${matchedItem.title}" has been added to your shopping cart!`);
}

// --- Page Specific Module Rendering Logic ---

// [A] Index / Home Elements
function initHeroSlider() {
    const slider = document.getElementById("sliderContainer");
    if(!slider) return;

    slider.innerHTML = SLIDER_DATA.map(slide => `
        <div class="slide" style="background-image: url('${slide.image}');">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h2>${slide.title}</h2>
                <p>${slide.subtitle}</p>
                <a href="#shop-section" class="btn btn-primary" style="width:max-content">Shop Now</a>
            </div>
        </div>
    `).join('');

    document.getElementById("nextSlide").addEventListener("click", () => shiftSlide(1));
    document.getElementById("prevSlide").addEventListener("click", () => shiftSlide(-1));
    setInterval(() => shiftSlide(1), 5000);
}

function shiftSlide(dir) {
    const slider = document.getElementById("sliderContainer");
    if(!slider) return;
    currentSlideIndex = (currentSlideIndex + dir + SLIDER_DATA.length) % SLIDER_DATA.length;
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function renderProductsGrid(dataList) {
    const grid = document.getElementById("productsGrid");
    if(!grid) return;

    if(dataList.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#666;">No products matched your parameters.</p>`;
        return;
    }

    grid.innerHTML = dataList.map(item => `
        <div class="product-card">
            <img class="product-card-img" src="${item.image || 'https://via.placeholder.com/600x400?text=Image+Coming+Soon'}" alt="${item.title}" loading="lazy">
            <div class="product-card-body">
                <span class="product-card-tag">${item.category}</span>
                <h3 class="product-card-title">${item.title}</h3>
                <div class="product-card-price">Rs. ${item.price}</div>
                <div class="product-card-actions">
                    <a class="btn btn-outline" href="product-detail.html?id=${item.id}">View Product</a>
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const matches = PRODUCTS_DATA.filter(p => 
        p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
    renderProductsGrid(matches);
}

// [B] Dynamic Product Detail Page Logic
function initProductDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const container = document.getElementById("productDetailContainer");

    if(!product || !container) {
        if(container) container.innerHTML = `<h2>Product Selection Aborted or Invalid ID.</h2>`;
        return;
    }

    container.innerHTML = `
        <div class="detail-img-container" id="zoomContainer">
            <img class="detail-img" id="mainDetailImage" src="${product.image || 'https://via.placeholder.com/600x400?text=Image+Coming+Soon'}" alt="${product.title}">
        </div>
        <div class="detail-info">
            <h1>${product.title}</h1>
            <div class="detail-price">Rs. ${product.price}</div>
            <p style="color:#555; font-size:1.05rem;">${product.desc}</p>
            <div class="detail-meta-box">
                <p><strong><i class="fa-solid fa-truck"></i> Delivery:</strong> Secure safe courier distribution pipelines direct to your doorstep.</p>
                <p style="margin-top: 8px; color:var(--accent-color);"><strong><i class="fa-solid fa-circle-exclamation"></i> Advance Rule:</strong> 100% full advance payment required via WhatsApp to confirm this order.</p>
            </div>
            <button class="btn btn-primary" style="max-width:320px;" onclick="addToCart(${product.id})">Add To Cart Collection</button>
        </div>
    `;
    setupImageHoverZoom();
}

function setupImageHoverZoom() {
    const targetBox = document.getElementById("zoomContainer");
    const img = document.getElementById("mainDetailImage");
    if(!targetBox || !img) return;

    targetBox.addEventListener("mousemove", (e) => {
        const boundary = targetBox.getBoundingClientRect();
        const computedX = ((e.clientX - boundary.left) / boundary.width) * 100;
        const computedY = ((e.clientY - boundary.top) / boundary.height) * 100;
        img.style.transformOrigin = `${computedX}% ${computedY}%`;
        img.style.transform = "scale(2.2)";
    });

    targetBox.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
    });
}

// [C] Cart Management Systems
function renderCartPageContent() {
    const listWrap = document.getElementById("cartItemsContainer");
    const subtotalText = document.getElementById("cartSubtotal");
    const grandTotalText = document.getElementById("cartGrandTotal");
    const advanceText = document.getElementById("advancePayableAmount");
    const orderBtn = document.getElementById("whatsappCheckoutBtn");

    if(!listWrap) return;

    if(cart.length === 0) {
        listWrap.innerHTML = `
            <div class="cart-empty-msg">
                <i class="fa-solid fa-box-open" style="font-size:3.5rem; color:#ccc; margin-bottom:15px;"></i>
                <p>Your dynamic bag selection layer is currently empty.</p>
                <a href="index.html" class="btn btn-primary" style="max-width:240px; margin: 15px auto 0 auto;">Return to Gallery</a>
            </div>`;
        if(subtotalText) subtotalText.innerText = "Rs. 0"; 
        if(grandTotalText) grandTotalText.innerText = "Rs. 0"; 
        if(advanceText) advanceText.innerText = "Rs. 0";
        if(orderBtn) orderBtn.disabled = true;
        return;
    }

    if(orderBtn) orderBtn.disabled = false;

    listWrap.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img class="cart-item-img" src="${item.image || 'https://via.placeholder.com/600x400?text=Image+Coming+Soon'}" alt="${item.title}">
            <div class="cart-item-details">
                <h4 style="font-size:1.05rem; font-weight:600;">${item.title}</h4>
                <p style="color:var(--primary-color); font-weight:700; margin-top:4px;">Rs. ${item.price}</p>
            </div>
            <div class="cart-qty-controls">
                <button class="qty-btn" onclick="adjustCartQty(${item.id}, -1)">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="adjustCartQty(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item-btn" onclick="purgeCartItem(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');

    const aggregatePrice = cart.reduce((acc, el) => acc + (el.price * el.qty), 0);
    if(subtotalText) subtotalText.innerText = `Rs. ${aggregatePrice}`;
    if(grandTotalText) grandTotalText.innerText = `Rs. ${aggregatePrice}`;
    if(advanceText) advanceText.innerText = `Rs. ${aggregatePrice}`; // 100% Full Payment Required

    orderBtn.onclick = () => fireWhatsAppIntent(aggregatePrice);
}

function adjustCartQty(id, delta) {
    const target = cart.find(x => x.id === id);
    if(!target) return;
    target.qty += delta;
    if(target.qty <= 0) {
        cart = cart.filter(x => x.id !== id);
    }
    saveCartToStorage();
    renderCartPageContent();
}

// Cart item complete deletion functionality
function purgeCartItem(id) {
    cart = cart.filter(x => x.id !== id);
    saveCartToStorage();
    renderCartPageContent();
}

function fireWhatsAppIntent(finalTotal) {
    alert("Advance payment rule: 100% full advance payment required. After sending the payment screenshot, your order will be automatically confirmed.");
    
    const itemsMessage = cart.map(item => `${item.title} (${item.qty}x)`).join(', ');
    const formattedString = `Hello JaiGeet Products, I want to order:\nItems: [${itemsMessage}]\nTotal Amount: Rs. ${finalTotal}\nI agree to make the 100% full advance payment to confirm my order.`;
    
    const operationalUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(formattedString)}`;
    window.open(operationalUrl, '_blank');
}