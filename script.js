// ================= DEFAULT PRODUCTS =================

const defaultProducts = [

    // ================= VEGETABLES =================
    {name:"Potato",
        price:30,
        category:"Vegetables",
        badge:"Fresh",
        stock:50,
        image:"https://media.istockphoto.com/id/2201483409/photo/the-potatoes-in-the-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=X8TRxBoza337_1rnzBXXBXbIliq_5qOcJgLrVejtkCo="
    },
    {name:"Onion",price:35,category:"Vegetables",badge:"Fresh",stock:18,image:"https://plus.unsplash.com/premium_photo-1725902078641-58f44d4a6a4c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9uaW9uc3xlbnwwfHwwfHx8MA=="},
    {name:"Tomato",price:40,category:"Vegetables",badge:"Fresh",stock:22,image:"https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"},
    {name:"Brinjal (Eggplant)",price:50,category:"Vegetables",badge:"Fresh",stock:15,image:"https://images.unsplash.com/photo-1605197378540-10ebaf6999e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJpbmphbCUyMChFZ2dwbGFudCl8ZW58MHx8MHx8fDA%3D"},
    {name:"Cauliflower",price:45,category:"Vegetables",badge:"Organic",stock:12,image:"https://images.unsplash.com/photo-1692956706779-576c151ec712?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Cabbage",price:40,category:"Vegetables",badge:"Fresh",stock:14,image:"https://images.unsplash.com/photo-1603049404411-13c2ca81a316?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhYmJhZ2V8ZW58MHx8MHx8fDA%3D"},
    {name:"Okra (Lady's Finger)",price:60,category:"Vegetables",badge:"Fresh",stock:16,image:"https://plus.unsplash.com/premium_photo-1666877059056-f42ada662ccc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2tyYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Spinach",price:25,category:"Vegetables",badge:"Organic",stock:25,image:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Fenugreek Leaves",price:30,category:"Vegetables",badge:"Fresh",stock:18,image:"https://images.unsplash.com/photo-1707065879790-256dec8f3760?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVudWdyZWVrJTIwbGVhdmV8ZW58MHx8MHx8fDA%3D"},
    {name:"Mustard Greens",price:35,category:"Vegetables",badge:"Organic",stock:20,image:"https://images.unsplash.com/photo-1644261863177-5b45b44e3790?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFyZCUyMGdyZWVuc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Bottle Gourd",price:35,category:"Vegetables",badge:"Fresh",stock:10,image:"https://images.unsplash.com/photo-1730127487636-b7fe550af030?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm90dGxlJTIwR291cmR8ZW58MHx8MHx8fDA%3D"},
    {name:"Bitter Gourd",price:55,category:"Vegetables",badge:"Fresh",stock:12,image:"https://images.unsplash.com/photo-1739903760973-4731a8e79a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qml0dGVyJTIwR291cmR8ZW58MHx8MHx8fDA%3D"},
    {name:"Pumpkin",price:30,category:"Vegetables",badge:"Fresh",stock:18,image:"https://images.unsplash.com/photo-1757332050913-8e2b4aa00855?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1bWtpbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Green Peas",price:70,category:"Vegetables",badge:"Fresh",stock:15,image:"https://images.unsplash.com/photo-1690023852149-0c69ac74734f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JlZW4lMjBQZWFzfGVufDB8fDB8fHww"},
    {name:"French Beans",price:65,category:"Vegetables",badge:"Fresh",stock:14,image:"https://images.unsplash.com/photo-1729031186247-82cd93fa385c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlbmNoJTIwQmVhbnN8ZW58MHx8MHx8fDA%3D"},
    {name:"Carrot",price:50,category:"Vegetables",badge:"Organic",stock:20,image:"https://images.unsplash.com/photo-1633380110125-f6e685676160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fycm90fGVufDB8fDB8fHww"},
    {name:"Radish",price:30,category:"Vegetables",badge:"Fresh",stock:18,image:"https://plus.unsplash.com/premium_photo-1667052359640-4b3b56e52f49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFkaXNoZXN8ZW58MHx8MHx8fDA%3D"},
    {name:"Capsicum",price:70,category:"Vegetables",badge:"Fresh",stock:12,image:"https://images.unsplash.com/photo-1632992468737-54880593aada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2Fwc2ljdW18ZW58MHx8MHx8fDA%3D"},
    {name:"Drumstick (Moringa)",price:80,category:"Vegetables",badge:"Fresh",stock:10,image:"https://media.istockphoto.com/id/1297356742/photo/moringa-oleifera-leaves-with-powder-in-a-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=JKVJnfZydLNzn-1K3MLqfnk96ekj8vmqlWze7DbktCc="},
    {name:"Ginger",price:90,category:"Vegetables",badge:"Organic",stock:15,image:"https://media.istockphoto.com/id/518250792/photo/heap-of-ginger-root.webp?a=1&b=1&s=612x612&w=0&k=20&c=pYvvL-39ssmtgWGy95pulMXvroNaOZhUo-uaVNRKdX0="},
    {name:"Garlic",price:120,category:"Vegetables",badge:"Organic",stock:10,image:"https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Green Chilli",price:80,category:"Vegetables",badge:"Fresh",stock:18,image:"https://images.unsplash.com/photo-1509085051020-b0707cdec216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwY2hpbGxpfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1509085051020-b0707cdec216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwY2hpbGxpfGVufDB8fDB8fHww"},
    {name:"Colocasia",price:55,category:"Vegetables",badge:"Fresh",stock:12,image:"https://images.unsplash.com/photo-1766507308605-4c21f8f95d40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbG9jYXNpYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Yam",price:75,category:"Vegetables",badge:"Fresh",stock:10,image:"https://media.istockphoto.com/id/182900646/photo/taro-roots.webp?a=1&b=1&s=612x612&w=0&k=20&c=G8wkW1MoHLRms8yzyqDVHkCkfyoSGaLRADGx9cbhXx8="},

    // ================= FRUITS =================
    {name:"Mango",
        price:100,
        category:"Fruits",
        badge:"Fresh",
        stock:25,
        image:"https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
    },
    {name:"Banana",price:40,category:"Fruits",badge:"Fresh",stock:30,image:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"},
    {name:"Papaya",price:50,category:"Fruits",badge:"Fresh",stock:18,image:"https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFwYXlhfGVufDB8fDB8fHww"},
    {name:"Guava",price:60,category:"Fruits",badge:"Fresh",stock:16,image:"https://images.unsplash.com/photo-1689996647099-a7a0b67fd2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3VhdmF8ZW58MHx8MHx8fDA%3D"},
    {name:"Apple",price:120,category:"Fruits",badge:"Organic",stock:15,image:"https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"},
    {name:"Pomegranate",price:130,category:"Fruits",badge:"Fresh",stock:12,image:"https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9tZWdyYW5hdGUlMjB0cmVlfGVufDB8fDB8fHww"},
    {name:"Grapes",price:90,category:"Fruits",badge:"Fresh",stock:20,image:"https://images.unsplash.com/photo-1632576883732-f131be0be48a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Watermelon",price:30,category:"Fruits",badge:"Fresh",stock:10,image:"https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Muskmelon",price:45,category:"Fruits",badge:"Fresh",stock:12,image:"https://media.istockphoto.com/id/1497656202/photo/cantaloupe-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=q2poOmPpTXmho27FGcAuMv4woP2Kb9wI51abwc03AW8="},
    {name:"Orange",price:70,category:"Fruits",badge:"Fresh",stock:20,image:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"},
    {name:"Sweet Lime (Mosambi)",price:65,category:"Fruits",badge:"Fresh",stock:15,image:"https://images.unsplash.com/photo-1757366471921-1549d75b1b63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFN3ZWV0JTIwTGltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Lemon",price:50,category:"Fruits",badge:"Fresh",stock:22,image:"https://images.unsplash.com/photo-1596181525841-8e8bae173eb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlbW9ufGVufDB8fDB8fHww"},
    {name:"Pineapple",price:80,category:"Fruits",badge:"Fresh",stock:12,image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg"},
    {name:"Jackfruit",price:60,category:"Fruits",badge:"Fresh",stock:8,image:"https://media.istockphoto.com/id/501537451/photo/jackfruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=TH6tHdyqU2l6G2JfhKn56-po3Xor7DHg9pvU9DGxcKw="},
    {name:"Sapota (Chikoo)",price:75,category:"Fruits",badge:"Fresh",stock:14,image:"https://media.istockphoto.com/id/2246831827/photo/fresh-organic-chemical-free-sapodilla-sweet-and-taste-fruit-with-green-leaf-on-wooden.webp?a=1&b=1&s=612x612&w=0&k=20&c=0Gjdm52PUY418F-82XTmOZpgv9Q5BhWco3DNmfbSyqI="},
    {name:"Custard Apple",price:90,category:"Fruits",badge:"Fresh",stock:10,image:"https://images.unsplash.com/photo-1680008703863-f3e0f4231b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3VzdGFyZCUyMEFwcGxlfGVufDB8fDB8fHww"},
    {name:"Jamun",price:110,category:"Fruits",badge:"Seasonal",stock:8,image:"https://media.istockphoto.com/id/2154256664/photo/a-coconut-shell-filled-with-indian-blackberry-or-jamun-fresh-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=lqO92Wb9AwB7YC5jH0IgUnIqiKeydWh4yY6ZOr7dEGI="},
    {name:"Amla",price:70,category:"Fruits",badge:"Organic",stock:15,image:"https://images.unsplash.com/photo-1676043967557-2b70d9facd71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1sYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Pear",price:95,category:"Fruits",badge:"Fresh",stock:10,image:"https://images.unsplash.com/photo-1696426506268-00a41b06b956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Peach",price:120,category:"Fruits",badge:"Fresh",stock:10,image:"https://images.unsplash.com/photo-1570978561297-793391262fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2h8ZW58MHx8MHx8fDA%3D"},
    {name:"Plum",price:110,category:"Fruits",badge:"Fresh",stock:10,image:"https://images.unsplash.com/photo-1518834903818-7d1557333fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGx1bXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Lychee",price:150,category:"Fruits",badge:"Seasonal",stock:8,image:"https://plus.unsplash.com/premium_photo-1722961407854-fcc0004b4929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THljaGVlfGVufDB8fDB8fHww"},
    {name:"Coconut",price:50,category:"Fruits",badge:"Fresh",stock:20,image:"https://images.unsplash.com/photo-1603779046675-2eccbab9b982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Dragon Fruit",price:180,category:"Fruits",badge:"Premium",stock:6,image:"https://images.unsplash.com/photo-1635843110565-cb35d1c03d86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJhZ29uJTIwRnJ1aXR8ZW58MHx8MHx8fDA%3D"},
    {name:"Kiwi",price:140,category:"Fruits",badge:"Premium",stock:8,image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"},

    // ================= BERRIES =================
    {name:"Jujube (Ber)",price:60,category:"Berries",badge:"Seasonal",stock:14,image:"https://media.istockphoto.com/id/1404670340/photo/heap-of-red-indian-jujube-also-known-as-chinee-apple-chinese-apple-jujube-indian-plum-masau.webp?a=1&b=1&s=612x612&w=0&k=20&c=cBNpG4s67uLIsUR87N1klXeOJRtwSHXhoJWsKA2_LYU="},
    {name:"Cape Gooseberry",price:120,category:"Berries",badge:"Premium",stock:10,image:"https://plus.unsplash.com/premium_photo-1667029757024-c2e94a1dde72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FwZSUyMEdvb3NlYmVycnl8ZW58MHx8MHx8fDA%3D"},
    {name:"Mulberry (Shahtoot)",price:150,category:"Berries",badge:"Seasonal",stock:8,image:"https://media.istockphoto.com/id/2198475870/photo/black-mulberry-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=P3G8wp8x_VMNYB0w81WiPZn1XbAGC1gxiAP5B2un7Ts="},
    {name:"Strawberry",price:160,category:"Berries",badge:"Fresh",stock:12,image:"https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"}
];

// ================= ADD TO CART =================

function addToCart(name, price, image) {

    let product = allProducts.find(p => p.name === name);

    if (product.stock <= 0) {
        alert("Out of Stock!");
        return;
    }

    product.stock -= 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: parseFloat(price),
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayProducts(allProducts); // refresh UI
}

// ================= DISPLAY PRODUCTS =================

function displayProducts(products) {

    const productList = document.getElementById("productList");
    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(product => {

        let div = document.createElement("div");
        div.classList.add("product-card");

        div.innerHTML = `
            <span class="badge">${product.badge || ""}</span>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price} / kg</p>
            <small>Stock: ${product.stock || 20}</small>
            <button 
  ${product.stock <= 0 ? "disabled" : ""}
  onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
  ${product.stock <= 0 ? "Out of Stock" : "Add to Cart"}
</button>
        `;

        productList.appendChild(div);
    });
}


// ================= SEARCH =================

function searchProduct() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    displayProducts(filtered);
}

// ================= UPLOAD PRODUCT =================

function setupUpload() {

    const uploadForm = document.getElementById("uploadForm");
    if (!uploadForm) return;

    uploadForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("productName").value;
        let price = document.getElementById("productPrice").value;
        let image = document.getElementById("productImage").value;

        let product = {
            name: name,
            price: parseFloat(price),
            image: image,
            stock: 25,
            badge: "New"
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));

        document.getElementById("uploadMessage").innerText =
            "Product uploaded successfully!";

        uploadForm.reset();
    });
}


// ================= LOGIN =================

function setupLogin() {

    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let role = document.getElementById("role").value;
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        errorMessage.innerText = "";

        if (role === "") {
            errorMessage.innerText = "Please select a role.";
            return;
        }

        if (!email.includes("@")) {
            errorMessage.innerText = "Enter valid email.";
            return;
        }

        if (password.length < 6) {
            errorMessage.innerText = "Password must be 6+ characters.";
            return;
        }

        alert("Login successful!");
        window.location.href = "index.html";
    });
}


// ================= INITIAL LOAD =================

let allProducts = [];

document.addEventListener("DOMContentLoaded", function () {

    // Merge default + uploaded products
    let uploaded = JSON.parse(localStorage.getItem("products")) || [];
    allProducts = [...defaultProducts, ...uploaded];

    if (document.getElementById("productList")) {
        displayProducts(allProducts);
    }

    setupUpload();
    setupLogin();
});


//filer

function filterProducts() {
    let category = document.getElementById("categoryFilter").value;

    if (category === "All") {
        displayedProducts = [...defaultProducts];
    } else {
        displayedProducts = defaultProducts.filter(p => p.category === category);
    }

    displayProducts(displayedProducts);
}

//sort
function sortProducts() {
    let sortValue = document.getElementById("sortPrice").value;

    if (sortValue === "low") {
        displayedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
        displayedProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(displayedProducts);
}

window.onload = function(){
    document.getElementById("loader").style.display="none";
}
