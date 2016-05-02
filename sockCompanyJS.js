// addToPage Function Begins
function addToPage(product) {
  var selector = '#' + product.html_id;
  // First, add in the outermost div which encapsulates the name, category, price, etc
  $('.main .container .row').append($('<div id="'+ product.html_id +'"class="'+ product.html_class +' product col-md-4">').html( $('<div class=name>').text(product.name)));
  $(selector).append('<div class=category>' + product.category + '</div>');
  $(selector).append('<div class=price>' + "$"+product.price+".00" + '</div>');
  $(selector).append('<div class=picture><img src= "' + product.picture_url + '" ></div>');
  $(selector).append('<div class=selling_points>' + '<ul></ul>' + '</div>');

  var i = 0;
  while(product.selling_points[i] !== undefined) {
    $(selector + ' .selling_points ul').append("<li>"+product.selling_points[i]+"</li>");
    i++;
  }
}
// addToPage Function ENDS


// Tall Galaxy Food Cat Socks START
var tallGalaxyFoodCat = {
  html_id: "tallGalaxyFoodCat",
  html_class: "tallsock",
  name: "Tall Galaxy Food Cat Socks",
  category: "Tall Socks",
  price: 15.00,
  picture_url: "http://cdn.shopify.com/s/files/1/0205/2636/products/galaxy-kitty-fast-food-knee-high-socks-2_1024x1024.jpg?v=1452551292",
  selling_points: ["Height: Tall", "Material: 100% Polyester", "Print/Color: Features amazing cats eating fastfood in space!"],
};

// Tall Galaxy Food Cat Socks END

// Tall Bacon Socks START
var tallBacon = {
  html_id: "tallBacon",
  html_class: "tallsock",
  name: "Tall Bacon Socks",
  category: "Tall Socks",
  price: 15.00,
  picture_url: "http://cdn.shopify.com/s/files/1/0205/2636/products/bacon-knee-high-socks-3_1024x1024.jpg?v=1406667275",
  selling_points: ["Height: Tall", "Material: 100% Polyester", "Print/Color: It's bacon! Need we say more?"]
};


// Tall Bacon Socks END

// Tall Pink Emoji Socks START
var tallPinkEmoji = {
  html_id: "tallPinkEmoji",
  html_class: "tallsock",
  name: "Tall Pink Emoji Socks",
  category: "Tall Socks",
  price: 15.00,
  picture_url: "http://cdn.shopify.com/s/files/1/0205/2636/products/girly-emoji-knee-high-socks-3_1024x1024.jpg?v=1452536560",
  selling_points: ["Height: Tall", "Material: 100% Polyester", "Print/Color: Like pink? Like emojis? Like cats? You'll like these socks."]
};

// Tall Pink Emoji Socks END


// Short Milk and Cookies Socks START
var shortMilkAndCookies = {
  html_id: "shortMilkAndCookies",
  html_class: "shortsock",
  name: "Short Milk and Cookies Socks",
  category: "Short Socks",
  price: 8.00,
  picture_url: "http://cdn.shopify.com/s/files/1/0205/2636/products/milk-and-cookies-ankle-socks-1_1024x1024.jpg?v=1421693418",
  selling_points: ["Height: Short", "Material: 100% Polyester", "Print/Color: Features a milk and cookies print - suitable even for the lactose intolerant among us!"],
};

// Short Milk and Cookies Socks END

// Short Unicorn Socks START
var shortUnicorn = {
  html_id: "shortUnicorn",
  html_class:"shortsock",
  name: "Short Unicorn Socks",
  category: "Short Socks",
  price: 8.00,
  picture_url: "http://cdn.shopify.com/s/files/1/0205/2636/products/unicorn-socks_1024x1024.jpg?v=1394151008",
  selling_points: ["Height: Short", "Material: 100% Polyester", "Print/Color: Rainbows. Cupcakes. Unicorns. Lollipops. Opulence at it's finest."],
};

// Short Unicorn Socks END

// Short Peace Out Socks START

var shortPeaceOut = {
  html_id: "shortPeaceOut",
  html_class:"shortsock",
  name: "Short Peace Out Socks",
  category: "Short Socks",
  price: 8.00,
  // Objects are composed of KEYS and VALUES.
  // Example:  key: "value",
  // Keys cannot contain spaces. Think of them like variables.
  picture_url: "http://cdn.shopify.com/s/files/1/0205/2636/products/peace-out-ankle-socks-3_1024x1024.jpg?v=1452700187",
  selling_points: ["Height: Short", "Material: 100% Polyester", "Print/Color: Peace out of this world with glow in the dark tie-dye socks."],
};

// Short Peace Out Socks END


// Event Handling START
/* Utilize .empty()
$( "#tallSockButton" ).click(function(event) {
  event.preventDefault();
  $('.main .container .row').empty();
  addToPage(tallGalaxyFoodCat);
  addToPage(tallBacon);
  addToPage(tallPinkEmoji);
});

$( "#shortSockButton" ).click(function(event) {
  event.preventDefault();
  $('.main .container .row').empty();
  addToPage(shortMilkAndCookies);
  addToPage(shortUnicorn);
  addToPage(shortPeaceOut);
});

*/
// EVENT HANLDING STARTS
// Load everything
addToPage(tallGalaxyFoodCat);
addToPage(tallBacon);
addToPage(tallPinkEmoji);
addToPage(shortMilkAndCookies);
addToPage(shortUnicorn);
addToPage(shortPeaceOut);
$(".shortsock").hide();
$(".tallsock").hide();

// Home Page STARTS
$( "#homeButton" ).click(function(event) {
  event.preventDefault();
  $("#homeText").show();
  $(".shortsock").hide();
  $(".tallsock").hide();

});

// Home Page ENDS

// Tall Sock Event START
$( "#tallSockButton" ).click(function(event) {
  event.preventDefault();
  $("#homeText").hide();
  $(".shortsock").hide();
  $(".tallsock").hide();


  $(".tallsock").show();
  $(".shortsock").hide();

});
// Tall Sock Event ENDS

// Short Sock Event START
$( "#shortSockButton" ).click(function(event) {
  event.preventDefault();
  $("#homeText").hide();
  $(".shortsock").hide();
  $(".tallsock").hide();

$(".shortsock").show();
$(".tallsock").hide();

});

// Short Sock Event ENDS

// All Sock Event STARTS
$( "#allSockButton" ).click(function(event) {
  event.preventDefault();
  $("#homeText").hide();
  $(".shortsock").hide();
  $(".tallsock").hide();

$(".shortsock").show();
$(".tallsock").show();

});
// All Sock Event ENDS

// EVENT HANDLING ENDS
