let id=localStorage.getItem("selectedProduct");

let products=JSON.parse(localStorage.getItem("products"));

let product;

products.forEach(function(item){ 

    if(item.id==id){

        product=item;

    }

});

let container=document.getElementById("product");

container.innerHTML=`

<div class="card">

<img src="${product.thumbnail}">

<h2>${product.title}</h2>

<h3>₹${product.price}</h3>

<p>${product.description}</p>

<button onclick="addToCart()">

Add To Cart

</button>

</div>

`;

function addToCart(){

    let cart=JSON.parse(localStorage.getItem("cart"));

    if(cart==null){

        cart=[];

    }

    cart.push(product);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Added To Cart");

}