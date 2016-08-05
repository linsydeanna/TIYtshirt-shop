var item1 = {
  item: "The Kevin",
  price: 22
}
var item2 = {
  item: "The Lake",
  price: 28
}
var item3 = {
   item: "The Ed",
   price: 32
}
var arrayCart = [];
var total = 0;
var button1 = document.querySelector("#buttonone");
var addItemCostToCart = function(cost) {
	total += cost;
  document.getElementById('total').innerHTML = total;
};
var purchase1 = item1.item + item1.price;
button1.addEventListener("click", function(event){
  var list = document.querySelector("#cart-contents");
  var createlistitem = document.createElement("li");
  createlistitem.innerText = purchase1;
  list.appendChild(createlistitem);
  addItemCostToCart(item1.price);
  arrayCart.push(item1)
})
var button2 = document.querySelector("#buttontwo");
var purchase2 = item2.item + item2.price;
button2.addEventListener("click", function(event){
  var list = document.querySelector("#cart-contents");
  var createlistitem = document.createElement("li");
  createlistitem.innerText = purchase2;
  list.appendChild(createlistitem);
    addItemCostToCart(item2.price);
  arrayCart.push(item2)
})
var button3 = document.querySelector("#buttonthree");
var purchase3 = item3.item + item3.price;
button3.addEventListener("click", function(event){
  var list = document.querySelector("#cart-contents");
  var createlistitem = document.createElement("li");
  createlistitem.innerText = purchase3;
  list.appendChild(createlistitem);
    addItemCostToCart(item3.price);
  arrayCart.push(item3)
})
var viewcart = document.querySelector("#view-cart");
viewcart.addEventListener("click", function(event){
  console.log('cart total' + total + arrayCart);
});

//   /*
//   event.preventDefault();
// if (window.confirm("Would you like to check out?\nYour Total Is: " + total)) {
//   console.log('confirmed') /*
//   //window.open("exit.html", "Thanks for Visiting!");
// }
// })


$(document).ready(function() {
  var $storeItems = $('#store-items')

  data.forEach(function(item) {
    var $itemSummary = $(`<li>
                            <a href="${item.path}">
                              <img src="${item.img}">
                              <div>"${item.shirtname}"</div>
                              <div>"${item.price}"</div>
                            </a>
                          </li>`);
    $storeItems.append($itemSummary);
  });

});
