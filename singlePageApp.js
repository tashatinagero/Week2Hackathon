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

$('#tallGalaxyFoodCat .name').append(tallGalaxyFoodCat.name);
$('#tallGalaxyFoodCat .category').append(tallGalaxyFoodCat.category);
$('#tallGalaxyFoodCat .price').append("$"+tallGalaxyFoodCat.price+".00");
$('#tallGalaxyFoodCat .picture').html('<img src= "' + tallGalaxyFoodCat.picture_url + '" >');
$('#tallGalaxyFoodCat .selling_points').append("<ul></ul>");

var i = 0;
while(tallGalaxyFoodCat.selling_points[i] !== undefined) {
  $('#tallGalaxyFoodCat .selling_points ul').append("<li>"+tallGalaxyFoodCat.selling_points[i]+"</li>");
  i++;
}

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

$('#tallBacon .name').append(tallBacon.name);
$('#tallBacon .category').append(tallBacon.category);
$('#tallBacon .price').append("$"+tallBacon.price+".00");
$('#tallBacon .picture').html('<img src= "' + tallBacon.picture_url + '" >');
$('#tallBacon .selling_points').append("<ul></ul>");

i = 0;
while(tallBacon.selling_points[i] !== undefined) {
  $('#tallBacon .selling_points ul').append("<li>"+tallBacon.selling_points[i]+"</li>");
  i++;
}

// Tall Bacon Socks END

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

$('#shortMilkAndCookies .name').append(shortMilkAndCookies.name);
$('#shortMilkAndCookies .category').append(shortMilkAndCookies.category);
$('#shortMilkAndCookies .price').append("$"+shortMilkAndCookies.price+".00");
$('#shortMilkAndCookies .picture').html('<img src= "' + shortMilkAndCookies.picture_url + '" >');
$('#shortMilkAndCookies .selling_points').append("<ul></ul>");

i = 0;
while(shortMilkAndCookies.selling_points[i] !== undefined) {
  $('#shortMilkAndCookies .selling_points ul').append("<li>"+shortMilkAndCookies.selling_points[i]+"</li>");
  i++;
}
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

$('#shortUnicorn .name').append(shortUnicorn.name);
$('#shortUnicorn .category').append(shortUnicorn.category);
$('#shortUnicorn .price').append("$"+shortUnicorn.price+".00");
$('#shortUnicorn .picture').html('<img src= "' + shortUnicorn.picture_url + '" >');
$('#shortUnicorn .selling_points').append("<ul></ul>");

i = 0;
while(shortUnicorn.selling_points[i] !== undefined) {
  $('#shortUnicorn .selling_points ul').append("<li>"+shortUnicorn.selling_points[i]+"</li>");
  i++;
}

// Short Unicorn Socks END
