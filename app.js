
$(document).ready(function() {
    var $storeItems = $('#store-items')

    data.forEach(populate);

    function populate(item) {
        var $itemSummary = $(`<li>
      <a href="${item.path}">
        <div class="containertwo">

            <div class="largebox">
              <img class="shirtpic" src="${item.img}">
            </div>

            <div class="smallboxone allsmall">
              <div class="icons refresh">
              <i class="fa fa-exchange" aria-hidden="true"></i>
              </div>
            </div>

            <div class="smallboxtwo allsmall small-with-border">
              <div class="icons heart">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              </div>
            </div>

            <div class="smallboxthree allsmall small-with-border">
              <div class="submenutwo">
                <div class="shirtcolorblue shirtcolor"></div>
                <div class="shirtcolorpink shirtcolor"></div>
                <div class="shirtcolororange shirtcolor"></div>
                <div class="shirtcolorgreen shirtcolor"></div>
              </div>
              <div class="allsquareicons">
              <i class="fa fa-square" aria-hidden="true"></i>
              </div>
            </div>

            <div class="smallboxfour allsmall small-with-border">
               <div class="submenuone">
                <div class="size tshirtXL">XL</div>
                <div class="size tshirtL">L</div>
                <div class="size tshirtM">M</div>
                <div class="size tshirtS">S</div>
              </div>
              <p class="extralarge">XL</p>
            </div>

            <div ${item.button} class="smallboxfive allsmall small-with-border">
              <div class="icons cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
            </div>

        </div>
        <div class="shirtinfo">
          <div class="shirtname">${item.shirtname}</div>
          <div class="price">${item.price}</div>
        </div>
        </a>
      </li>`);
        $storeItems.append($itemSummary);
    }



// CART js

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
var item4 = {
    item: "The Brandon",
    price: 45
}
var item5 = {
    item: "The Joe",
    price: 38
}
var item6 = {
    item: "The Bama",
    price: 27
}

var arrayCart = [];
var total = 0;
var button1 = document.querySelector("#buttonone");
var button2 = document.querySelector("#buttontwo");
var button3 = document.querySelector("#buttonthree");
var button4 = document.querySelector("#buttonfour");
var button5 = document.querySelector("#buttonfive");
var button6 = document.querySelector("#buttonsix");

var addItemCostToCart = function(cost) {
    total += cost;
    document.getElementById('total').innerHTML = total;
};

var purchase1 = item1.item + item1.price;
button1.addEventListener("click", function(event) {
    var list = document.querySelector("#cart-contents");
    var createlistitem = document.createElement("li");
    createlistitem.innerText = purchase1;
    list.appendChild(createlistitem);
    addItemCostToCart(item1.price);
    arrayCart.push(item1)
})

var purchase2 = item2.item + item2.price;
button2.addEventListener("click", function(event) {
    var list = document.querySelector("#cart-contents");
    var createlistitem = document.createElement("li");
    createlistitem.innerText = purchase2;
    list.appendChild(createlistitem);
    addItemCostToCart(item2.price);
    arrayCart.push(item2)
})

var purchase3 = item3.item + item3.price;
button3.addEventListener("click", function(event) {
    var list = document.querySelector("#cart-contents");
    var createlistitem = document.createElement("li");
    createlistitem.innerText = purchase3;
    list.appendChild(createlistitem);
    addItemCostToCart(item3.price);
    arrayCart.push(item3)
})

var purchase4 = item4.item + item4.price;
button4.addEventListener("click", function(event) {
    var list = document.querySelector("#cart-contents");
    var createlistitem = document.createElement("li");
    createlistitem.innerText = purchase4;
    list.appendChild(createlistitem);
    addItemCostToCart(item4.price);
    arrayCart.push(item4)
})

var purchase5 = item5.item + item5.price;
button5.addEventListener("click", function(event) {
    var list = document.querySelector("#cart-contents");
    var createlistitem = document.createElement("li");
    createlistitem.innerText = purchase5;
    list.appendChild(createlistitem);
    addItemCostToCart(item5.price);
    arrayCart.push(item5)
})

var purchase6 = item6.item + item6.price;
button6.addEventListener("click", function(event) {
    var list = document.querySelector("#cart-contents");
    var createlistitem = document.createElement("li");
    createlistitem.innerText = purchase6;
    list.appendChild(createlistitem);
    addItemCostToCart(item6.price);
    arrayCart.push(item6)
})

var viewcart = document.querySelector("#view-cart");
viewcart.addEventListener("click", function(event) {
    console.log('cart total' + total + arrayCart);
});
});

//   /*
//   event.preventDefault();
// if (window.confirm("Would you like to check out?\nYour Total Is: " + total)) {
//   console.log('confirmed') /*
//   //window.open("exit.html", "Thanks for Visiting!");
// }
// })
