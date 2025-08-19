// Product Data - 35 products across different categories
const API_BASE = 'https://8i3t1yu74g.execute-api.us-east-1.amazonaws.com';
const products = [
    // Electronics
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 3,
        name: "MacBook Pro 16\"",
        price: 2499.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 4,
        name: "Dell XPS 13",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 5,
        name: "iPad Air",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 6,
        name: "AirPods Pro",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 7,
        name: "Sony WH-1000XM5",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 8,
        name: "Nintendo Switch",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 9,
        name: "PlayStation 5",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
        category: "electronics"
    },
    {
        id: 10,
        name: "4K Smart TV 55\"",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
        category: "electronics"
    },

    // Clothing
    {
        id: 11,
        name: "Classic Denim Jacket",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 12,
        name: "Cotton T-Shirt",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 13,
        name: "Leather Boots",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 14,
        name: "Summer Dress",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 15,
        name: "Wool Sweater",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 16,
        name: "Running Shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 17,
        name: "Designer Jeans",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop",
        category: "clothing"
    },
    {
        id: 18,
        name: "Silk Scarf",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
        category: "clothing"
    },

    // Home & Garden
    {
        id: 19,
        name: "Coffee Maker",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 20,
        name: "Indoor Plant Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 21,
        name: "Throw Pillows",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 22,
        name: "Kitchen Knife Set",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 23,
        name: "Dining Table",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1586627001815-b8c8c7b0b5b7?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 24,
        name: "Garden Tools Set",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 25,
        name: "Bed Sheets Set",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        category: "home"
    },
    {
        id: 26,
        name: "Wall Art Canvas",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        category: "home"
    },

    // Sports
    {
        id: 27,
        name: "Yoga Mat",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 28,
        name: "Dumbbell Set",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 29,
        name: "Basketball",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 30,
        name: "Tennis Racket",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 31,
        name: "Bicycle Helmet",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 32,
        name: "Swimming Goggles",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 33,
        name: "Fitness Tracker",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 34,
        name: "Golf Club Set",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop",
        category: "sports"
    },
    {
        id: 35,
        name: "Camping Tent",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
        category: "sports"
    }
];

// Shopping Cart
let cart = [];
let currentFilter = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const paymentModal = document.getElementById('paymentModal');
const summaryItems = document.getElementById('summaryItems');
const summaryTotal = document.getElementById('summaryTotal');
const paymentForm = document.getElementById('paymentForm');
const checkoutForm = document.getElementById('checkoutForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartUI();
    setupEventListeners();
});

// Display products in the grid
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i><p>No products found</p></div>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showAddToCartAnimation();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update item quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    updateCartCount();
    updateCartItems();
    updateCartTotal();
}

// Update cart count badge
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Update cart items display
function updateCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Enable/disable checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Toggle cart sidebar
function toggleCart() {
    const isOpen = cartSidebar.classList.contains('open');
    
    if (isOpen) {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Show payment options modal
function showPaymentOptions() {
    if (cart.length === 0) return;
    
    updatePaymentSummary();
    paymentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close payment modal
function closePaymentModal() {
    paymentModal.classList.remove('active');
    paymentForm.style.display = 'none';
    document.body.style.overflow = '';
    
    // Reset payment options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
}

// Update payment summary
function updatePaymentSummary() {
    summaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summaryTotal.textContent = total.toFixed(2);
}

// Select payment method
function selectPayment(method) {
    // Remove previous selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select current option
    event.target.closest('.payment-option').classList.add('selected');
    
    // Show payment form for card payments
    if (method === 'card') {
        paymentForm.style.display = 'block';
    } else {
        paymentForm.style.display = 'none';
        // For other payment methods, show success immediately
        setTimeout(() => {
            processPayment(method);
        }, 1000);
    }
}

// Process payment
function processPayment(method = 'card') {
    // Show loading state
    const payBtn = document.querySelector('.pay-btn');
    const originalText = payBtn.textContent;
    payBtn.textContent = 'Processing...';
    payBtn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Clear cart
        cart = [];
        updateCartUI();
        
        // Close modals
        closePaymentModal();
        toggleCart();
        
        // Reset button
        payBtn.textContent = originalText;
        payBtn.disabled = false;
        
        // Reset form
        if (checkoutForm) {
            checkoutForm.reset();
        }
    }, 2000);
}

// Show success message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Payment successful! Thank you for your order.
    `;
    
    document.body.appendChild(successDiv);
    
    // Position the message
    successDiv.style.position = 'fixed';
    successDiv.style.top = '100px';
    successDiv.style.left = '50%';
    successDiv.style.transform = 'translateX(-50%)';
    successDiv.style.zIndex = '9999';
    successDiv.style.minWidth = '300px';
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Show add to cart animation
function showAddToCartAnimation() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    cartIcon.style.color = '#28a745';
    
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.color = '#007bff';
    }, 300);
}

// Setup event listeners
function setupEventListeners() {
    // Close cart when clicking outside
    cartOverlay.addEventListener('click', toggleCart);
    
    // Close modal when clicking outside
    paymentModal.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });
    
    // Handle checkout form submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment('card');
        });
    }
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (paymentModal.classList.contains('active')) {
                closePaymentModal();
            } else if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });
    
    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Format expiry date input
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // Format CVV input
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality (bonus feature)
function searchProducts(query) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Local storage for cart persistence
function saveCartToStorage() {
    localStorage.setItem('BlackSwanCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shopEasyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// === Backend sync helpers (DynamoDB via API Gateway + Lambda) ===
function getCartId() {
    let id = localStorage.getItem('cartId');
    if (!id) {
        id = 'cart_' + [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2, '0')).join('');
        localStorage.setItem('cartId', id);
    }
    return id;
}

async function backendFetch(path, options = {}) {
    const resp = await fetch(`${API_BASE}${path}`, {
        method: options.method || 'GET',
        headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
        body: options.body ? JSON.stringify(options.body) : undefined
    });
    const txt = await resp.text();
    let data = {};
    try { data = JSON.parse(txt || '{}'); } catch(_) {}
    if (!resp.ok) {
        console.error('Backend error:', resp.status, data);
        throw new Error(data.error || `Request failed: ${resp.status}`);
    }
    return data;
}

async function backendLoadCart() {
    try {
        const data = await backendFetch(`/cart?cartId=${encodeURIComponent(getCartId())}`);
        // DynamoDB returns each item with id fields as productId and quantity, name, price, image
        // Normalize to the local "cart" structure this UI expects
        cart = (data.items || []).map(it => ({
            id: Number(it.productId),
            name: it.name,
            price: Number(it.price),
            image: it.image,
            quantity: Number(it.quantity || 1)
        }));
        updateCartUI();
    } catch (e) {
        console.warn('Falling back to local storage cart due to backend load issue:', e.message);
        loadCartFromStorage();
    }
}

async function backendAddItem(product, qtyDelta = 1) {
    return backendFetch('/cart/add', {
        method: 'POST',
        body: { cartId: getCartId(), item: product, quantity: qtyDelta }
    });
}

async function backendUpdateItem(productId, newQty) {
    return backendFetch('/cart/update', {
        method: 'POST',
        body: { cartId: getCartId(), productId, quantity: newQty }
    });
}

async function backendDeleteItem(productId) {
    return backendFetch('/cart/delete', {
        method: 'POST',
        body: { cartId: getCartId(), productId }
    });
}
// === end backend helpers ===
// Save cart whenever it changes + sync to backend
const originalAddToCart = addToCart;
const originalRemoveFromCart = removeFromCart;
const originalUpdateQuantity = updateQuantity;

addToCart = async function(productId) {
    originalAddToCart(productId);
    saveCartToStorage();
    try {
        const product = products.find(p => p.id === productId);
        await backendAddItem(product, 1);
    } catch (e) {
        console.warn('Backend add failed:', e.message);
    }
};

removeFromCart = async function(productId) {
    originalRemoveFromCart(productId);
    saveCartToStorage();
    try {
        await backendDeleteItem(productId);
    } catch (e) {
        console.warn('Backend delete failed:', e.message);
    }
};

updateQuantity = async function(productId, change) {
    const before = cart.find(i => i.id === productId)?.quantity || 0;
    originalUpdateQuantity(productId, change);
    saveCartToStorage();
    const after = cart.find(i => i.id === productId)?.quantity || 0;
    try {
        await backendUpdateItem(productId, after);
    } catch (e) {
        console.warn('Backend update failed:', e.message);
    }
};

// Load cart from backend on page load (fallback to local storage if needed)
document.addEventListener('DOMContentLoaded', function() {
    backendLoadCart();
});

// Keep localStorage as backup on visibility change
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        saveCartToStorage();
    }
});

