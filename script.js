async function loadProducts(){

    let response = await fetch("https://dummyjson.com/products?limit=194");

    let data = await response.json();

    let products = data.products;

     localStorage.setItem("products",JSON.stringify(products));

    let container=document.getElementById("products");

    products.forEach(function(product){

        container.innerHTML+=`

        <div class="card">

        <img src="${product.thumbnail}">

        <h3>${product.title}</h3>

        <h4>₹${product.price}</h4>

        <button onclick="viewProduct(${product.id})">
        View Details
        </button>

        </div>

        `;

    });

}

loadProducts();


function viewProduct(id){

    localStorage.setItem("selectedProduct",id);

    window.location.href="product.html";

}