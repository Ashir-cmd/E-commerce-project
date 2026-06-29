let cart=JSON.parse(localStorage.getItem("cart"));

let container=document.getElementById("cartItems");

let total=0;

if(cart!=null){

cart.forEach(function(product){

container.innerHTML+=`

<div class="card">

<img src="${product.thumbnail}">

<h3>${product.title}</h3>

<h4>₹${product.price}</h4>

</div>

`;

total=total+product.price;

});

}

document.getElementById("total").innerHTML="Total Bill : ₹"+total;