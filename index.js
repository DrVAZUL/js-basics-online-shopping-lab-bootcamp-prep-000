var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item] :Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
 }


function viewCart() {
  if(cart[0] === undefined) {
    console.log("Your shopping cart is empty.")
  } else if(cart.length === 1) {
    var key = Object.keys(cart[0])
    var value = cart[0][key]
    console.log(`In your cart, you have ${key} at $${value}.`)
  } else if(cart.length === 2) {
    var k = Object.keys(cart[0])
    var v = cart[0][k]
    var newKey = Object.keys(cart[1])
    var newValue = cart[1][newKey]
    console.log(`In your cart, you have ${k} at $${v} and ${newKey} at $${newValue}.`)
  } else {
    var array = new Array()

    for(var x = 0; x < cart.length; x++) {
    var key = Object.keys(cart[x])
    var value = cart[x][key]
    var miniString = `${key} at $${value}`
    array.push(miniString)
  }
  array[cart.length - 1] = `and ${array[cart.length-1]}`
  console.log(`In your cart, you have ${array.join(', ')}.`)
}
  }


function total() {
    var sum = 0
  for(var x = 0; x < cart.length; x++) {
    var key = Object.keys(cart[x])
    sum += cart[x][key]
  }
  return sum
}

function removeFromCart(item) {
  if(cart.hasOwnProperty(item) === false) {
    console.log("That item is not in your cart")
  } else {
    cart[0] = item
    cart.shift()
    return cart
  }
}
function placeOrder(cardNumber) {
  // write your code here
}
