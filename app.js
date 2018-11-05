const config = require(__dirname + '/config.js');
var WooCommerceAPI = require('woocommerce-api');
 


var WooCommerce = new WooCommerceAPI({
  url: config.url,
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret,
  wpAPI: true,
  version: 'v3'
});



// Cron
setInterval(function() {
    // your function
}, 5000);