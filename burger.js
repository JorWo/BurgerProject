var spicyBurger = {
  Name: "The Spicy Burger",
  Meat: "Angus Beef",
  Veg: "Lettuce, Tomato, Onion",
  Sauce: "Mayo, Sriracha",
  Price: 12.95
};
var mildBurger = {
  Name: "The Mild Burger",
  Meat: "Turkey",
  Veg: "Lettuce, Tomato, Onion",
  Sauce: "Mayo, Mustard",
  Price: 10.95
};
var tax = 1.04712;

function spicyPrice() {
  document.getElementById('leftPrice').innerHTML = "Your total is $"+(tax*spicyBurger.Price).toFixed(2);
}

function mildPrice() {
  document.getElementById('rightPrice').innerHTML = "Your total is $"+(tax*mildBurger.Price).toFixed(2);
}

document.getElementById('leftTitle').innerHTML = spicyBurger.Name;
document.getElementById('rightTitle').innerHTML = mildBurger.Name;
document.getElementById('leftMeat').innerHTML = "-" + spicyBurger.Meat;
document.getElementById('rightMeat').innerHTML = "-" + mildBurger.Meat;
document.getElementById('leftOrgPrice').innerHTML = "-$" + spicyBurger.Price;
document.getElementById('rightOrgPrice').innerHTML = "-$" + mildBurger.Price;
document.getElementById('leftVeg').innerHTML = "-" + spicyBurger.Veg;
document.getElementById('rightVeg').innerHTML = "-" + mildBurger.Veg;
document.getElementById('leftSauce').innerHTML = "-" + spicyBurger.Sauce;
document.getElementById('rightSauce').innerHTML = "-" + mildBurger.Sauce;


