const config = require(__dirname + '/config.js');
var WooCommerceAPI = require('woocommerce-api');
 


var WooCommerce = new WooCommerceAPI({
  url: config.url,
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret,
  wpAPI: true,
  version: 'wv/v1'
});



// Cron
setInterval(function() {
   WooCommerce.get('orders', function(err, data, res) {
     console.log(res);
   });
}, 5000);