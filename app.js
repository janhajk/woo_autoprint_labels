const config = require(__dirname + '/config.js');
var WooCommerceAPI = require('woocommerce-api');
 


var WooCommerce = new WooCommerceAPI({
  url: config.url,
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret,
  wpAPI: true,
  version: 'wc/v3'
});



// Cron
setInterval(function() {
   WooCommerce.get('orders', {status:'processing'}, function(err, data, res) {
     console.log(res);
   });
}, 5000);